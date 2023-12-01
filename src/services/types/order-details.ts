import { DELETE_ORDER_ID, GET_ORDER_ID_FAILED, GET_ORDER_ID_REQUEST, GET_ORDER_ID_SUCCESS } from "../actions/order-details";

export type TDeleteOrderIDAction = {
    readonly type: typeof DELETE_ORDER_ID
}

export type TGetOrderIDFailedAction = {
    readonly type: typeof GET_ORDER_ID_FAILED
}

export type TGetOrderIDRequestAction = {
    readonly type: typeof GET_ORDER_ID_REQUEST
}

export type TGetOrderIDSuccessAction = {
    readonly type: typeof GET_ORDER_ID_SUCCESS
    number: number,
    success: boolean,
}

export type TOrderDetailsActions = 
| TDeleteOrderIDAction
| TGetOrderIDFailedAction
| TGetOrderIDRequestAction
| TGetOrderIDSuccessAction;

export type TOrderDetailsState = {
    orderNumber: number | null,
    orderNumberRequest: boolean,
    orderNumberRequestSuccess: boolean,
    orderNumberFailed: boolean,
}