import {
  SET_CURRENT_ORDER,
  REMOVE_CURRENT_ORDER,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED
} from "../actions/order-information";
import { TOrderInformationActions, TOrderInformationState } from "../types/order-information";

const initialState: TOrderInformationState = {
  order: null,
  orderRequest: false,
  orderSuccess: false,
  orderFieled: false,
};

export const orderInformationReducer = (store = initialState, action: TOrderInformationActions) => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return {
        ...store,
        orderRequest:true,
      };
    case GET_ORDER_SUCCESS:
      return {
        ...store,
        orderRequest: false,
        orderSuccess: true,
      };
    case GET_ORDER_FAILED:
      return {
        ...store,
        orderRequest: false,
        orderFieled: true,
      }
    case SET_CURRENT_ORDER:
      return {
        ...store,
        order: action.payload,
      };
    case REMOVE_CURRENT_ORDER:
      return {
        ...store,
        order: null,
      };
    default:
      return store;
  }
};
