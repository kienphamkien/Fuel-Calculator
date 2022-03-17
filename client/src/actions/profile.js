import axios from "axios";
import {
  LOAD_USER_PROFILE_SUCCESS,
  LOAD_USER_PROFILE_FAIL,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAIL,
} from "./types";

export const load_user_profile = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `JWT ${localStorage.getItem("access")}`,
    },
  };

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/accounts/profile`,
      config
    );

    if (res.data.error) {
      dispatch({
        type: LOAD_USER_PROFILE_FAIL,
      });
    } else {
      dispatch({
        type: LOAD_USER_PROFILE_SUCCESS,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({
      type: LOAD_USER_PROFILE_FAIL,
    });
  }
};

export const update_profile =
  (full_name, address1, address2, city, state, zipcode) => async (dispatch) => {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
      },
    };

    const body = JSON.stringify({
      full_name,
      address1,
      address2,
      city,
      state,
      zipcode,
    });

    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/accounts/profile`,
        body,
        config
      );

      dispatch({
        type: UPDATE_USER_PROFILE_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: UPDATE_USER_PROFILE_FAIL,
      });
    }
  };
