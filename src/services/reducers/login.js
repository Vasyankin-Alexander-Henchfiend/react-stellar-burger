import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
  } from "../actions/login";
  
  const initialState = {
    accessToken: null,
    loginSuccess: false,
    loginRequest: false,
    loginFailed: false,
  };
  
  export const loginReduser = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          loginRequest: true,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loginSuccess: action.success,
          accessToken: action.accessToken,
          loginRequest: false,
          loginFailed: false,
        };
      case LOGIN_FAILED:
        return {
          ...state,
          loginRequest: false,
          loginFailed: true,
        };
      default:
        return state;
    }
  };