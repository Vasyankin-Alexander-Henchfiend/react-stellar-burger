import { BASE_URL, checkResponse } from "../../utils/consts";

export const SET_AUTH_CHECKED = "SET_AUTH_CHECKED";
export const SET_USER = "SET_USER";

export const setAuthChecked = (value) => ({
  type: SET_AUTH_CHECKED,
  payload: value,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

function getUser() {
  return (dispatch) => {
    return fetch(BASE_URL + "/auth/user", {
      headers: {
        "Content-type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
      body: JSON.stringify(),
    })
      .then((res) => checkResponse(res))
      .then((data) => {
        dispatch(setUser(data.user));
      });
  };
}

export const checkUserAuth = () => {
  return (dispatch) => {
    if (localStorage.getItem("accessToken")) {
      dispatch(getUser())
        .catch(() => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          dispatch(setUser(null));
        })
        .finally(() => dispatch(setAuthChecked(true)));
    } else {
      dispatch(setAuthChecked(true));
    }
  };
};
