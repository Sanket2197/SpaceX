import axios from "axios";
import {
  GET_ALL_LAUNCHES_INIT,
  GET_ALL_LAUNCHES,
  LAUNCH_ERROR,
  GET_ALL_LAUNCHES_BY_YEAR,
  UPDATE_FILTER,
} from "./types";

// Get All Launches
export const getAllLaunches = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_LAUNCHES_INIT,
    });

    const res = await axios.get("/api/spacex/get-all-launches");

    dispatch({
      type: GET_ALL_LAUNCHES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LAUNCH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update Filters
export const updateFilters = (filters) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_LAUNCHES_INIT,
    });

    dispatch({
      type: UPDATE_FILTER,
      payload: filters,
    });
  } catch (err) {
    dispatch({
      type: LAUNCH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get Details
export const getLaunchDetailsByFilters = (filters) => async (dispatch) => {
  try {
    const { year, launch_success, land_success } = filters;

    dispatch({
      type: GET_ALL_LAUNCHES_INIT,
    });

    const res = await axios.get(
      `/api/spacex/get-all-by-filter/${year}/${launch_success}/${land_success}`
    );

    dispatch({
      type: GET_ALL_LAUNCHES_BY_YEAR,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LAUNCH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
