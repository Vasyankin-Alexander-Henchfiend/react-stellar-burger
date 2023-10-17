import { BASE_URL, checkResponse } from "../../utils/consts";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";

export function resetPasswordRequest(password, token) {
  return function (dispatch) {
    dispatch({ type: RESET_PASSWORD_REQUEST });
    fetch(BASE_URL + "/password-reset/reset", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        token: token,
      }),
    })
      .then((res) => checkResponse(res))
      .then((data) => {
        dispatch({
          type: RESET_PASSWORD_SUCCESS,
          success: data.success,
        });
      })
      .catch((error) => {
        dispatch({
          type: RESET_PASSWORD_FAILED,
        });
        console.log(error);
      });
  };
}
