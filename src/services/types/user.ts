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
import { TUser } from "./user.types";

export type TRegisterRequestAction = {
  readonly type: typeof REGISTER_REQUEST;
};

export type TRegisterSuccessAction = {
  readonly type: typeof REGISTER_SUCCESS;
  success: boolean,
  userData: TUser
};

export type TRegisterFailedAction = {
  readonly type: typeof REGISTER_FAILED;
};

export type TLoginRequestAction = {
  readonly type: typeof LOGIN_REQUEST;
};

export type TLoginSuccessAction = {
  readonly type: typeof LOGIN_SUCCESS;
  success: boolean,
  userData: TUser
};

export type TLoginFailedAction = {
  readonly type: typeof LOGIN_FAILED;
};

export type TLogoutRequestAction = {
  readonly type: typeof LOGOUT_REQUEST;
};

export type TLogoutSuccessAction = {
  readonly type: typeof LOGOUT_SUCCESS;
  success: boolean,
  userData: TUser
};

export type TLogoutFailedAction = {
  readonly type: typeof LOGOUT_FAILED;
};

export type TPatchProfileRequestAction = {
  readonly type: typeof PATCH_PROFILE_REQUEST;
};

export type TPatchProfileSuccessAction = {
  readonly type: typeof PATCH_PROFILE_SUCCESS;
  success: boolean,
  userData: TUser
};

export type TPatchProfileFailedAction = {
  readonly type: typeof PATCH_PROFILE_FAILED;
};

export type TSetAuthCheckedAction = {
  readonly type: typeof SET_AUTH_CHECKED;
  payload: boolean
};

export type TSetUserAction = {
  readonly type: typeof SET_USER;
  payload: TUser
};

export type TUserActions =
  | TRegisterRequestAction
  | TRegisterSuccessAction
  | TRegisterFailedAction
  | TLoginRequestAction
  | TLoginSuccessAction
  | TLoginFailedAction
  | TLogoutRequestAction
  | TLogoutSuccessAction
  | TLogoutFailedAction
  | TPatchProfileRequestAction
  | TPatchProfileSuccessAction
  | TPatchProfileFailedAction
  | TSetAuthCheckedAction
  | TSetUserAction;

export type TUserState = {
  userData:  | null;
  isAuthChecked: boolean;

  loginSuccess: boolean;
  loginRequest: boolean;
  loginFailed: boolean;

  patchProfileSuccess: boolean;
  patchProfileRequest: boolean;
  patchProfileFailed: boolean;

  logoutSuccess: boolean;
  logoutRequest: boolean;
  logoutFailed: boolean;

  registerSuccess: boolean;
  registerRequest: boolean;
  registerFailed: boolean;
};
