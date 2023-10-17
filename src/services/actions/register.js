import { BASE_URL, checkResponse } from "../../utils/consts";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

export function registerRequest(email, password, name) {
  return function (dispatch) {
    dispatch({ type: REGISTER_REQUEST });
    fetch(BASE_URL + "/auth/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    })
      .then((res) => checkResponse(res))
      .then((data) => {
        dispatch({
          type: REGISTER_SUCCESS,
          success: data.success,
        });
      })
      .catch((error) => {
        dispatch({
          type: REGISTER_FAILED,
        });
        console.log(error);
      });
  };
}