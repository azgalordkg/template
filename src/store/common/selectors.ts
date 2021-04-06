import { createSelector } from "reselect";

import {
  EValueSet,
} from "@store/common/types";
import { IApplicationState } from "@store/rootInterface";

const selectState = (state: IApplicationState): any =>
  state.common;

export const makeSelectValueSetFetching = (file: EValueSet) =>
  createSelector(selectState, (state: any) =>
    state?.getIn(["valueSets", file, "fetching"])
  );
