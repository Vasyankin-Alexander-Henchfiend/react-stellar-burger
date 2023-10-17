import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
  } from "../actions/register";
  
  const initialState = {
    registerSuccess: false,
    registerRequest: false,
    registerFailed: false,
  };
  
  export const registerReduser = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_REQUEST:
        return {
          ...state,
          registerRequest: true,
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          registerSuccess: action.success,
          registerRequest: false,
          registerFailed: false,
        };
      case REGISTER_FAILED:
        return {
          ...state,
          registerRequest: false,
          registerFailed: true,
        };
      default:
        return state;
    }
  };