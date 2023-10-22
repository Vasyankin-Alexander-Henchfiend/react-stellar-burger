import { BASE_URL, checkResponse } from "../../utils/consts";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";

export function forgotPasswordRequest(email) {
  return function (dispatch) {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });
    fetch(BASE_URL + "/password-reset", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => checkResponse(res))
      .then((data) => {
        localStorage.setItem('isForgotPasswordSuccess', true)
        dispatch({
          type: FORGOT_PASSWORD_SUCCESS,
          success: data.success,
        });
      })
      .catch((error) => {
        dispatch({
          type: FORGOT_PASSWORD_FAILED,
        });
        console.log(error);
      });
  };
}
