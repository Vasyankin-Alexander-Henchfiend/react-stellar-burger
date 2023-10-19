import { BASE_URL, checkResponse } from "../../utils/consts";

export const PATCH_PROFILE_REQUEST = "PATCH_PROFILE_REQUEST";
export const PATCH_PROFILE_SUCCESS = "PATCH_PROFILE_SUCCESS";
export const PATCH_PROFILE_FAILED = "PATCH_PROFILE_FAILED";

export function patchProfileRequest(name, email) {
  return function (dispatch) {
    dispatch({ type: PATCH_PROFILE_REQUEST });
    fetch(BASE_URL + "/auth/user", {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({ name, email }),
    })
      .then((res) => checkResponse(res))
      .then((data) => {
        dispatch({
          type: PATCH_PROFILE_SUCCESS,
          success: data.success,
          userData: data.user,
        });
      })
      .catch((error) => {
        dispatch({
          type: PATCH_PROFILE_FAILED,
        });
        console.log(error);
      });
  };
}
