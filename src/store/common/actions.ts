import createAction from "@utils/createAction";

export const GET_VALUE_SET_REQUEST = "GET_VALUE_SET_REQUEST";
export const GET_VALUE_SET_SUCCESS = "GET_VALUE_SET_SUCCESS";
export const GET_VALUE_SET_FAILURE = "GET_VALUE_SET_FAILURE";

export const getValueSetRequest = createAction(
  GET_VALUE_SET_REQUEST
);
export const getValueSetSuccess = createAction(
  GET_VALUE_SET_SUCCESS
);
export const getValueSetFailure = createAction(
  GET_VALUE_SET_FAILURE
);
