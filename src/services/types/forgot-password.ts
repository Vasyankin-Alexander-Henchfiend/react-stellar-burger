import {
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_REMOVE
} from "../actions/forgot-password";


export type TForgotPasswordRequestAction = {
    readonly type: typeof FORGOT_PASSWORD_REQUEST
}

export type TForgotPasswordSuccessAction = {
    readonly type: typeof FORGOT_PASSWORD_SUCCESS
    success: boolean
}

export type TForgotPasswordFailedAction = {
    readonly type: typeof FORGOT_PASSWORD_FAILED
}

export type TForgotPasswordRemoveAction = {
    readonly type: typeof FORGOT_PASSWORD_REMOVE
}

export type TForgotPasswordActions = 
| TForgotPasswordRequestAction
| TForgotPasswordSuccessAction
| TForgotPasswordFailedAction
| TForgotPasswordRemoveAction;

export type TForgotPasswordState = {
    emailSuccess: boolean,
    emailRequest: boolean,
    emailFailed: boolean,
}