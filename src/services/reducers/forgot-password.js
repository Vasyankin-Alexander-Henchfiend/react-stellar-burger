import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
} from "../actions/forgot-password";

const initialState = {
  emailSuccess: false,
  emailRequest: false,
  emailFailed: false,
};

export const forgotPasswordReduser = (state = initialState, action) => {
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
    default:
      return state;
  }
};
