import { AxiosResponse } from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";
import request from "@api/index";

import { IPayloadAction } from "@store/rootInterface";

import {
  TValueSet,
} from "./types";
import {
  getValueSetSuccess,
  getValueSetFailure,
  GET_VALUE_SET_REQUEST,
} from "./actions";

function* getValueSet(action: IPayloadAction<TValueSet>) {
  try {
    const response: AxiosResponse = yield call(
      request.get,
      "common/value-set/",
      {
        params: action.payload,
      }
    );
    yield put(
      getValueSetSuccess({
        data: response.data,
        file: action.payload.file,
      })
    );
  } catch (error) {
    yield put(
      getValueSetFailure({
        error,
        file: action.payload.file,
      })
    );
  }
}

function* Saga() {
  yield all([takeEvery(GET_VALUE_SET_REQUEST, getValueSet)]);
}

export default Saga;
