import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  AUTHENTICATED_FAIL,
  AUTHENTICATED_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
  LOGOUT,
} from "./types";
import axios from "axios";

export const checkAuthenticated = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ token: localStorage.getItem("access") });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/jwt/verify/`,
        body,
        config
      );
      if (res.data.code !== "token_not_valid") {
        dispatch({
          type: AUTHENTICATED_SUCCESS,
        });
      } else {
        dispatch({
          type: AUTHENTICATED_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: AUTHENTICATED_FAIL,
      });
    }
  } else {
    dispatch({
      type: AUTHENTICATED_FAIL,
    });
  }
};

export const load_user = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/users/me/`,
        config
      );
      dispatch({
        type: USER_LOADED_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: USER_LOADED_FAIL,
      });
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL,
    });
  }
};
export const login = (username, password) => async (dispatch) => {
  console.log(process.env.REACT_APP_API_URL)
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username, password });
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/jwt/create/`,
      body,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(load_user());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const signup = (username, email, password, re_password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username, email, password, re_password });
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/users/`,
      body,
      config
    );
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SIGNUP_FAIL,
    });
  }
};

export const verify = (uid, token) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ uid, token });
  try {
    await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/users/activation/`,
      body,
      config
    );
    dispatch({
      type: ACTIVATION_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: ACTIVATION_FAIL,
    });
  }
}


export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};