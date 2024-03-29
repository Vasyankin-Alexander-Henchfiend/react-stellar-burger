import { TIngredient } from "../../components/ui/types";
import { BASE_URL, ingredientsId, checkResponse } from "../../utils/consts";
import { AppThunk } from "../types";

export const DELETE_ORDER_ID: "DELETE_ORDER_ID" = "DELETE_ORDER_ID";
export const GET_ORDER_ID_REQUEST: "GET_ORDER_ID_REQUEST" = "GET_ORDER_ID_REQUEST";
export const GET_ORDER_ID_SUCCESS: "GET_ORDER_ID_SUCCESS" = "GET_ORDER_ID_SUCCESS";
export const GET_ORDER_ID_FAILED: "GET_ORDER_ID_FAILED" = "GET_ORDER_ID_FAILED";

export function getOrderId(bun: TIngredient, ingredients: TIngredient[]): AppThunk {
  return function (dispatch) {
    dispatch({ type: GET_ORDER_ID_REQUEST });
    fetch(BASE_URL + "/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem('accessToken') ?? '',
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
          success: data.success,
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
