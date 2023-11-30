import { TRefreshTokenResponse } from "../../../components/ui/types";
import {
  BASE_URL,
  checkResponse,
  cleanTokenHeader,
} from "../../../utils/consts";
import { TUser } from "../../types/user.types";

export const SET_AUTH_CHECKED = "SET_AUTH_CHECKED";
export const SET_USER = "SET_USER";

export const setAuthChecked = (value: boolean) => ({
  type: SET_AUTH_CHECKED,
  payload: value,
});

export const setUser = (user: TUser) => ({
  type: SET_USER,
  payload: user,
});

export const checkUserAuth = () => {
  return (dispatch) => {
    if (localStorage.getItem("accessToken")) {
      dispatch(getUser())
        .catch(() => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("cleanAccessToken");
          localStorage.removeItem("refreshToken");
          dispatch(setUser(null));
        })
        .finally(() => dispatch(setAuthChecked(true)));
    } else {
      dispatch(setAuthChecked(true));
    }
  };
};

export function getUser() {
  return (dispatch) => {
    return fetchWithRefresh(BASE_URL + "/auth/user", {
      headers: {
        "Content-type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
    }).then((data) => {
      dispatch(setUser(data.user));
    });
  };
}

export const refreshToken = (): Promise<TRefreshTokenResponse> => {
  return fetch(BASE_URL + "/auth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  }).then((res) => checkResponse(res));
};


export const fetchWithRefresh = async (url: string, options: RequestInit) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err: any) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      localStorage.setItem(
        "cleanAccessToken",
        cleanTokenHeader(refreshData.accessToken)
      );
      if (options.headers) {
        options.headers.authorization = refreshData.accessToken;
      } 
      const res = await fetch(url, options);
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};

