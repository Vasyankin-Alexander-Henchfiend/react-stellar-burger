import {
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_FAILED,
  } from "../actions/profile";
  
  const initialState = {
    userName: null,
    userEmail: null,
    profileSuccess: false,
    profileRequest: false,
    profileFailed: false,
  };
  
  export const profileReduser = (state = initialState, action) => {
    switch (action.type) {
      case PROFILE_REQUEST:
        return {
          ...state,
          profileRequest: true,
        };
      case PROFILE_SUCCESS:
        return {
          ...state,
          userName: action.name,
          userEmail: action.email,
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
      default:
        return state;
    }
  };