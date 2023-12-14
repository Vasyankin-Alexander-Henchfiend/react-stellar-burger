import {
  BASE_URL,
  checkResponse,
  cleanTokenHeader,
} from "../../../utils/consts";
import { AppThunk } from "../../types";
import { TForm } from "../../types/user.types";

export const LOGIN_REQUEST: "LOGIN_REQUEST" = "LOGIN_REQUEST";
export const LOGIN_SUCCESS: "LOGIN_SUCCESS" = "LOGIN_SUCCESS";
export const LOGIN_FAILED: "LOGIN_FAILED" = "LOGIN_FAILED";
export const LOGOUT_REQUEST: "LOGOUT_REQUEST" = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS: "LOGOUT_SUCCESS" = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED: "LOGOUT_FAILED" = "LOGOUT_FAILED";

export const loginRequest =
  (form: TForm): AppThunk =>
  (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    fetch(BASE_URL + "/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => checkResponse(res))
      .then((data) => {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem(
          "cleanAccessToken",
          cleanTokenHeader(data.accessToken)
        );
        localStorage.setItem("refreshToken", data.refreshToken);
        dispatch({
          type: LOGIN_SUCCESS,
          success: data.success,
          userData: data.user,
        });
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_FAILED,
        });
        console.log(error);
      });
  };

export function logoutRequest(): AppThunk {
  const refreshToken = localStorage.getItem("refreshToken");
  return (dispatch) => {
    dispatch({ type: LOGOUT_REQUEST });
    fetch(BASE_URL + "/auth/logout", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ token: refreshToken }),
    })
      .then((res) => checkResponse(res))
      .then((data) => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("cleanAccessToken");
        localStorage.removeItem("refreshToken");
        dispatch({
          type: LOGOUT_SUCCESS,
          success: data.success,
          userData: null,
        });
      })
      .catch((error) => {
        dispatch({
          type: LOGOUT_FAILED,
        });
        console.log(error);
      });
  };
}
