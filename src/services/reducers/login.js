import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILED,
  } from "../actions/login";

  import {
    PATCH_PROFILE_REQUEST,
    PATCH_PROFILE_SUCCESS,
    PATCH_PROFILE_FAILED,
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

    patchProfileSuccess: false,
    patchProfileRequest: false,
    patchProfileFailed: false,

    logoutSuccess: false,
    logoutRequest: false,
    logoutFailed: false,
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
        case LOGOUT_REQUEST:
        return {
          ...state,
          logoutRequest: true,
        };
      case LOGOUT_SUCCESS:
        return {
          ...state,
          logoutSuccess: action.success,
          userData: action.userData,
          logoutRequest: false,
          loginFailed: false,
        };
      case LOGOUT_FAILED:
        return {
          ...state,
          logoutRequest: false,
          logoutFailed: true,
        };
        case PATCH_PROFILE_REQUEST:
          return {
            ...state,
            patchProfileRequest: true,
          };
        case PATCH_PROFILE_SUCCESS:
          return {
            ...state,
            patchProfileSuccess: action.success,
            userData: action.userData,
            patchProfileRequest: false,
            patchProfileFailed: false,
          };
        case PATCH_PROFILE_FAILED:
          return {
            ...state,
            patchProfileRequest: false,
            patchProfileFailed: true,
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