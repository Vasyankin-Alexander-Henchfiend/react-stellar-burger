import { BASE_URL } from "../../../utils/consts";
import { fetchWithRefresh } from "./auth";
import { TForm } from "../../types/user.types";
import { AppThunk } from "../../types";

export const PATCH_PROFILE_REQUEST: "PATCH_PROFILE_REQUEST" = "PATCH_PROFILE_REQUEST";
export const PATCH_PROFILE_SUCCESS: "PATCH_PROFILE_SUCCESS" = "PATCH_PROFILE_SUCCESS";
export const PATCH_PROFILE_FAILED: "PATCH_PROFILE_FAILED" = "PATCH_PROFILE_FAILED";

export function patchProfileRequest(form: TForm): AppThunk {
  return (dispatch) => {
    dispatch({ type: PATCH_PROFILE_REQUEST });
    fetchWithRefresh(BASE_URL + "/auth/user", {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        authorization: localStorage.getItem("accessToken") ?? '',
      },
      body: JSON.stringify(form),
    })
      .then((data) => {
        dispatch({
          type: PATCH_PROFILE_SUCCESS,
          success: data.success,
          userData: data.user,
        });
      });
  };
}
