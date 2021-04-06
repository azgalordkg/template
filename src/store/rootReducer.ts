import { combineReducers } from "redux";

import { IApplicationState } from "@store/rootInterface";
import common from "@store/common/reducer";

const rootReducer = combineReducers<IApplicationState>({
  common,
});

export default rootReducer;
