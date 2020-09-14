import {
  GET_ALL_LAUNCHES_INIT,
  GET_ALL_LAUNCHES,
  GET_ALL_LAUNCHES_BY_YEAR,
  UPDATE_FILTER,
  LAUNCH_ERROR,
} from "../actions/types";

const initialState = {
  launches: [],
  loading: true,
  filters: {
    year: undefined,
    launch_success: null,
    land_success: null,
  },
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_LAUNCHES_INIT:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_LAUNCHES:
    case GET_ALL_LAUNCHES_BY_YEAR:
      return {
        ...state,
        launches: payload,
        loading: false,
      };

    case UPDATE_FILTER:
      return {
        ...state,
        filters: payload,
        loading: false,
      };

    case LAUNCH_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}
