import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
} from "../actions/reset-password";

const initialState = {
  resetPasswordSuccess: false,
  resetPasswordRequest: false,
  resetPasswordFailed: false,
};

export const resetPasswordReduser = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        resetPasswordRequest: true,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordSuccess: action.success,
        resetPasswordRequest: false,
        resetPasswordFailed: false,
      };
    case RESET_PASSWORD_FAILED:
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordFailed: true,
      };
    default:
      return state;
  }
};
