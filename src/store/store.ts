import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware, compose, CombinedState } from "redux";
import createSagaMiddleware from "redux-saga";

import {
  IWithSagaTaskStore,
  IApplicationState,
  IPayloadAction,
} from "./rootInterface";

import rootReducer from "@store/rootReducer";
import rootSaga from "@store/rootSaga";

export const configureStore = <T extends object = never>(
  initialState: T
): IWithSagaTaskStore => {
  const sagaMiddleware = createSagaMiddleware({});

  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__" as keyof Window]
      ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__" as keyof Window]({
          shouldHotReload: false,
        })
      : compose;

  const store: IWithSagaTaskStore = createStore<
    CombinedState<IApplicationState>,
    IPayloadAction,
    undefined,
    undefined
  >(rootReducer, initialState, composeEnhancers(...enhancers));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const initStore = (initialState: IApplicationState = {}) =>
  configureStore<IApplicationState>(initialState);

export const wrapper = createWrapper<IWithSagaTaskStore>(() => initStore());

export default initStore;
