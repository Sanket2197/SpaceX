import axios from "axios";
import {
  GET_ALL_LAUNCHES_INIT,
  GET_ALL_LAUNCHES,
  LAUNCH_ERROR,
  GET_ALL_SUCCESS_LAUNCHES,
  GET_ALL_SUCCESS_LAUNCHES_LANDED,
  GET_ALL_LAUNCHES_BY_YEAR,
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

// Get All Success Launches
export const getAllSuccessLaunches = (success) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_LAUNCHES_INIT,
    });

    const res = await axios.get(`/api/spacex/get-all-success/${success}`);

    dispatch({
      type: GET_ALL_SUCCESS_LAUNCHES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LAUNCH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get All Success Launches Landed
export const getAllSuccessLaunchesLanded = (land) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_LAUNCHES_INIT,
    });

    const res = await axios.get(`/api/spacex/get-all-success-land/${land}`);

    dispatch({
      type: GET_ALL_SUCCESS_LAUNCHES_LANDED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LAUNCH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get All  Launches By Year
export const getAllLaunchesByYear = (year) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_LAUNCHES_INIT,
    });

    const res = await axios.get(
      `/api/spacex/get-all-success-land-by-year/${year}`
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
