import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_REMOVE,
} from "../actions/forgot-password";
import {
  TForgotPasswordActions,
  TForgotPasswordState,
} from "../types/forgot-password";

const initialState: TForgotPasswordState = {
  emailSuccess: false,
  emailRequest: false,
  emailFailed: false,
};

export const forgotPasswordReduser = (
  state = initialState,
  action: TForgotPasswordActions
) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        emailRequest: true,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        emailSuccess: action.success,
        emailRequest: false,
        emailFailed: false,
      };
    case FORGOT_PASSWORD_FAILED:
      return {
        ...state,
        emailRequest: false,
        emailFailed: true,
      };
    case FORGOT_PASSWORD_REMOVE:
      return {
        ...state,
        emailSuccess: false,
        emailRequest: false,
        emailFailed: false,
      };
    default:
      return state;
  }
};
