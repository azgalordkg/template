import { fromJS } from "immutable";

import createReducer from "@utils/createReducer";

import {
  EValueSet,
} from "./types";
import {
  GET_VALUE_SET_REQUEST,
} from "./actions";

const valueSetStoreModel = {
  fetching: false,
  data: [],
  error: null,
};

const initialState: any = fromJS({
  valueSets: {
    [EValueSet.ad_type]: valueSetStoreModel,
    [EValueSet.apartment_type]: valueSetStoreModel,
    [EValueSet.other]: valueSetStoreModel,
    [EValueSet.series]: valueSetStoreModel,
    [EValueSet.build_type]: valueSetStoreModel,
    [EValueSet.heating]: valueSetStoreModel,
    [EValueSet.details]: valueSetStoreModel,
  },
  location: {
    regions: valueSetStoreModel,
    cities: { ...valueSetStoreModel, isFetched: false },
    districts: valueSetStoreModel,
  },
});

const setValueSetFetching = (value: any): any => (
  state: any,
  action: any,
) => {
  const { file } = action.payload;

  return state.setIn(["valueSets", file, "fetching"], value);
};

export default createReducer(initialState, {
  [GET_VALUE_SET_REQUEST]: setValueSetFetching(true),
});
