import { BASE_URL, checkResponse } from "../../utils/consts";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export function loginRequest(email, password) {
  return function (dispatch) {
    dispatch({ type: LOGIN_REQUEST });
    fetch(BASE_URL + "/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
      }),
    })
      .then((res) => checkResponse(res))
      .then((data) => {
        localStorage.setItem('accessToken', data.accessToken)
        localStorage.setItem('refreshToken', data.refreshToken)
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
}