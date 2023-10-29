import {
  DELETE_ORDER_ID,
  GET_ORDER_ID_FAILED,
  GET_ORDER_ID_REQUEST,
  GET_ORDER_ID_SUCCESS,
} from "../actions/order-details";

const initialState = {
  orderNumber: null,
  orderNumberRequest: false,
  orderNumberRequestSuccess: false,
  orderNumberFailed: false,
};

export const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_ID_REQUEST:
      return {
        ...state,
        orderNumberRequest: true,
      };
    case GET_ORDER_ID_SUCCESS:
      return {
        ...state,
        orderNumber: action.number,
        orderNumberRequestSuccess: action.success,
        orderNumberRequest: false,
        orderNumberFailed: false,
      };
    case GET_ORDER_ID_FAILED:
      return {
        ...state,
        orderNumberRequest: false,
        orderNumberFailed: true,
      };
    case DELETE_ORDER_ID:
      return {
        ...state,
        orderNumber: null,
        orderNumberRequestSuccess: false,
      };
    default:
      return state;
  }
};
