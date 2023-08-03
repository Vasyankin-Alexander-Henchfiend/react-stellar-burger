import { BASE_URL, checkResponse } from "../../utils/consts";

export const GET_ITEMS_REQUEST = "GET_ITEMS_REQUEST";
export const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS";
export const GET_ITEMS_FAILED = "GET_ITEMS_FAILED";

export function getItems() {
  return function (dispatch) {
    dispatch({ type: GET_ITEMS_REQUEST });
    fetch(BASE_URL + '/ingredients')
      .then((res) => checkResponse(res))
      .then((data) => {
        dispatch({
          type: GET_ITEMS_SUCCESS,
          items: data.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ITEMS_FAILED,
        });
        console.log(error);
      });
  };
}
