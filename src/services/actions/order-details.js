import { POSTURL, ingredientsId, checkResponse } from "../../utils/consts";

export const DELETE_ORDER_ID = "DELETE_ORDER_ID";
export const GET_ORDER_ID_REQUEST = "GET_ORDER_ID_REQUEST";
export const GET_ORDER_ID_SUCCESS = "GET_ORDER_ID_SUCCESS";
export const GET_ORDER_ID_FAILED = "GET_ORDER_ID_FAILED";

export function getOrderId(bun, ingredients) {
  return function (dispatch) {
    dispatch({ type: GET_ORDER_ID_REQUEST });
    fetch(POSTURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        ingredients: ingredientsId(bun, ingredients),
      }),
    })
      .then((res) => checkResponse(res))
      .then((data) => {
        dispatch({
          type: GET_ORDER_ID_SUCCESS,
          number: data.order.number,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ORDER_ID_FAILED,
        });
        console.log(error);
      });
  };
}
