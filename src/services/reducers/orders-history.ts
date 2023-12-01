import {
    ORDERS_HISTORY_WS_CONNECTION_CLOSED,
    ORDERS_HISTORY_WS_CONNECTION_ERROR,
    ORDERS_HISTORY_WS_CONNECTION_SUCCESS,
    ORDERS_HISTORY_WS_GET_DATA,
  } from "../actions/orders-history";
import { TOrdersHystoryActions, TOrdersHystoryState } from "../types/orders-history";
  
  const initialState: TOrdersHystoryState = {
    ordersHistoryWsConnected: false,
    ordersHistoryWsError: false,
    data: null,
  };
  
  export const ordersHistoryReducer = (state = initialState, action: TOrdersHystoryActions) => {
    switch (action.type) {
      case ORDERS_HISTORY_WS_CONNECTION_SUCCESS:
        return {
          ...state,
          ordersHistoryWsConnected: true,
        };
      case ORDERS_HISTORY_WS_CONNECTION_ERROR:
        return {
          ...state,
          ordersHistoryWsError: true,
          ordersHistoryWsConnected: false,
        };
      case ORDERS_HISTORY_WS_CONNECTION_CLOSED:
        return {
          ...state,
          ordersHistoryWsConnected: false,
          data: null,
        };
      case ORDERS_HISTORY_WS_GET_DATA:
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };