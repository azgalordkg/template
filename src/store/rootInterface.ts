import { Store } from "redux";
import { Task } from "redux-saga";
import { RecordOf } from "immutable";
import { TCommonState } from "@store/common/types";

export interface IApplicationState {
  common?: RecordOf<TCommonState>;
}

export interface IWithSagaTaskStore extends Store {
  sagaTask?: Task;
  initialState?: IApplicationState;
}

export declare type IPayloadAction<
  P = void,
  T extends string = string,
  M = never,
  E = never
> = {
  payload: P;
  type: T;
} & ([M] extends [never]
  ? {}
  : {
      meta: M;
    }) &
  ([E] extends [never]
    ? {}
    : {
        error: E;
      });

export declare type THandler<T, S = void> = (
  state: T,
  action: IPayloadAction<S>
) => T;
export declare type THandlers<T, S = void> = {
  [action: string]: THandler<T, S> | THandler<T, S>[];
};
