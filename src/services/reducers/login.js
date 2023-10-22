import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from "../actions/user/register";

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from "../actions/user/login";

import {
  PATCH_PROFILE_REQUEST,
  PATCH_PROFILE_SUCCESS,
  PATCH_PROFILE_FAILED,
} from "../actions/user/profile";

import { SET_AUTH_CHECKED, SET_USER } from "../actions/user/auth";

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

  registerSuccess: false,
  registerRequest: false,
  registerFailed: false,
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
        logoutSuccess: false,
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
        loginSuccess: false,
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
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        registerRequest: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: action.success,
        userData: action.userData,
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
