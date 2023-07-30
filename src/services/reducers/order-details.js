import {
  DELETE_ORDER_ID,
  GET_ORDER_ID_FAILED,
  GET_ORDER_ID_REQUEST,
  GET_ORDER_ID_SUCCESS,
} from "../actions/order-details";

const initialState = {
  number: null,
  numberRequest: false,
  numberFailed: false,
};

export const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_ID_REQUEST: {
      return {
        ...state,
        numberRequest: true,
      };
    }
    case GET_ORDER_ID_SUCCESS: {
      return {
        ...state,
        number: action.number,
        numberRequest: false,
        numberFailed: false,
      };
    }
    case GET_ORDER_ID_FAILED: {
      return {
        ...state,
        numberRequest: false,
        numberFailed: true,
      };
    }
    case DELETE_ORDER_ID: {
      return {
        ...state,
        number: null,
      };
    }
    default: {
      return state;
    }
  }
};
