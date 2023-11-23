import { BASE_URL, checkResponse } from "../../utils/consts";

export const SET_CURRENT_ORDER = "SET_CURRENT_ORDER";
export const REMOVE_CURRENT_ORDER = "REMOVE_CURRENT_ORDER";
export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";

export const setOrder = (order) => {
  return {
    type: SET_CURRENT_ORDER,
    payload: order,
  };
};

export const removeOrder = () => {
  return {
    type: REMOVE_CURRENT_ORDER,
  };
};

export function getOrder(number) {
  return function (dispatch) {
    dispatch({ type: GET_ORDER_REQUEST });
    fetch(BASE_URL + `/orders/${number}`)
      .then((res) => checkResponse(res))
      .then((data) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
        });
        dispatch(setOrder(data.orders[0]));
      })
      .catch((error) => {
        dispatch({
          type: GET_ORDER_FAILED,
        });
        console.log(error);
      });
  };
}
