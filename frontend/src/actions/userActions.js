import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGOUT,
} from "../constants/userConstants";

export const userLoginAction =
  (email, password) => async (dispatch, getState) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
      const { data } = await axios.post("http://localhost:8080/api/login", {
        email,
        password,
      });
      console.log(data);

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const userLogOutAction = () => async (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
  });
};

export const userRegisterAction =
  (name, email, dob, contacts, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });

      const { data } = await axios.post("http://localhost:8080/api/register", {
        name,
        email,
        password,
        dob,
        contacts,
      });
      console.log(data);
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };