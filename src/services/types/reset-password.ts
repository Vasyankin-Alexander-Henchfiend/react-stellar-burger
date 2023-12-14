import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_SUCCESS,
} from "../actions/reset-password";

export type TResetPasswordRequestAction = {
  readonly type: typeof RESET_PASSWORD_REQUEST;
};

export type TResetPasswordSuccessAction = {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
  success: boolean
};

export type TResetPasswordFailedAction = {
  readonly type: typeof RESET_PASSWORD_FAILED;
};

export type TResetPasswordActions =
  | TResetPasswordRequestAction
  | TResetPasswordSuccessAction
  | TResetPasswordFailedAction;

export type TResetPasswordState = {
  resetPasswordSuccess: boolean;
  resetPasswordRequest: boolean;
  resetPasswordFailed: boolean;
};
