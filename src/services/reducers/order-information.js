import {
  SET_CURRENT_ORDER,
  REMOVE_CURRENT_ORDER,
} from "../actions/order-information";

const initialState = {
  order: null,
};

export const orderInformationReducer = (store = initialState, action) => {
  switch (action.type) {
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
