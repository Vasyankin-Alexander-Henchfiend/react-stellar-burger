import { TOrder } from "../../components/ui/types";
import {
  SET_CURRENT_ORDER,
  GET_ORDER_REQUEST,
  GET_ORDER_FAILED,
  GET_ORDER_SUCCESS,
  REMOVE_CURRENT_ORDER,
} from "../actions/order-information";


export type TSetCurrentOrderAction = {
    readonly type: typeof SET_CURRENT_ORDER
    payload: TOrder
};

export type TGetOrderRequestAction = {
    readonly type: typeof GET_ORDER_REQUEST
};

export type TGetOrderSuccessAction = {
    readonly type: typeof GET_ORDER_SUCCESS
};

export type TGetOrderFailedAction = {
    readonly type: typeof GET_ORDER_FAILED
};

export type TRemoveCurrentOrderAction = {
    readonly type: typeof REMOVE_CURRENT_ORDER
};

export type TOrderInformationActions =
| TGetOrderFailedAction
| TSetCurrentOrderAction
| TGetOrderRequestAction
| TGetOrderSuccessAction
| TRemoveCurrentOrderAction;

export type TOrderInformationState = {
    order: null,
    orderRequest: boolean,
    orderSuccess: boolean,
    orderFieled: boolean,
}