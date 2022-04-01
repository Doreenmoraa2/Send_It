import axios from "axios";

import { LOGIN_SUCCESS, SIGNUP_SUCCESS} from "../ActionTypes/UserActionType";
import {LOGIN_FAIL, SIGNUP_FAIL, LOGIN_RESET} from "../ActionTypes/UserActionType";

export const login = (user) => async (dispatch) => {
 
  axios
    .post("http://localhost:5000/users/login", user)
    .then((response) => {
      if (response.data.status) {
        dispatch({
          type: LOGIN_SUCCESS,
          user: response.data.user,
          
        });
      } else {
        dispatch({
          type: LOGIN_FAIL,
          error: response.data.message,
        });
      }
    })
    .catch((error) => {
     console.log(error);
     dispatch({
      type: LOGIN_FAIL,
      error: "An error occured",
    });
    });
};

export const signup = (userAdd) => async (dispatch) => {
  axios
    .post("http://localhost:5000/users", userAdd)
    .then((response) => {
      console.log(response);
      if (response.data.status) {
        dispatch({
          type: SIGNUP_SUCCESS,
        });
      } else {
        dispatch({
          type: SIGNUP_FAIL,
          error: "An error occured. Try again later",
        });
      }
    })
    .catch((error) => {
        console.log(error);
    });
};

export function loginReset(){
  return {
    type: LOGIN_RESET
  }
}
