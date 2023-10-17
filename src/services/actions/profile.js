import { BASE_URL, checkResponse } from "../../utils/consts";

export const PROFILE_REQUEST = "PROFILE_REQUEST";
export const PROFILE_SUCCESS = "PROFILE_SUCCESS";
export const PROFILE_FAILED = "PROFILE_FAILED";

export function profileRequest(accessToken) {
  return function (dispatch) {
    dispatch({ type: PROFILE_REQUEST });
    fetch(BASE_URL + "/auth/user", {
      headers: {
        "Content-type": "application/json",
        authorization: accessToken
      },
      body: JSON.stringify(),
    })
      .then((res) => checkResponse(res))
      .then((data) => {
        dispatch({
          type: PROFILE_SUCCESS,
          success: data.success,
          name: data.user.name,
          email: data.user.email
        });
      })
      .catch((error) => {
        dispatch({
          type: PROFILE_FAILED,
        });
        console.log(error);
      });
  };
}