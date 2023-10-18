import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
  } from "../actions/login";

  import {
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_FAILED,
  } from "../actions/profile";

  import {
    SET_AUTH_CHECKED,
    SET_USER
  } from "../actions/auth";
  
  const initialState = {
    userData: null,
    isAuthChecked: false,

    loginSuccess: false,
    loginRequest: false,
    loginFailed: false,

    profileSuccess: false,
    profileRequest: false,
    profileFailed: false,
  };
  
  export const userDataReduser = (state = initialState, action) => {
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
          userData: action.userData,
          loginRequest: false,
          loginFailed: false,
        };
      case LOGIN_FAILED:
        return {
          ...state,
          loginRequest: false,
          loginFailed: true,
        };
        case PROFILE_REQUEST:
          return {
            ...state,
            profileRequest: true,
          };
        case PROFILE_SUCCESS:
          return {
            ...state,
            userData: action.userData,
            profileRequest: false,
            profileFailed: false,
            profileSuccess: action.success,
          };
        case PROFILE_FAILED:
          return {
            ...state,
            profileRequest: false,
            profileFailed: true,
          };
        case SET_AUTH_CHECKED:
          return {
            ...state,
            isAuthChecked: action.payload,
          };
        case SET_USER: 
        return {
          ...state,
          userData: action.payload,
        }
      default:
        return state;
    }
  };