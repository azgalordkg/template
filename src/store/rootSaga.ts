import { all, fork } from "redux-saga/effects";

import commonSaga from "./common/effects";

function* rootSaga() {
  yield all([
    fork(commonSaga),
  ]);
}

export default rootSaga;
