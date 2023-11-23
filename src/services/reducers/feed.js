import {
  FEED_WS_CONNECTION_CLOSED,
  FEED_WS_CONNECTION_ERROR,
  FEED_WS_CONNECTION_SUCCESS,
  FEED_WS_GET_DATA,
} from "../actions/feed";

const initialState = {
  feedWsConnected: false,
  feedWsError: false,
  data: null,
};

export const feedReducer = (state = initialState, action) => {
  switch ((action.type)) {
    case FEED_WS_CONNECTION_SUCCESS:
      return {
        ...state,
        feedWsConnected: true,
      };
    case FEED_WS_CONNECTION_ERROR:
      return {
        ...state,
        feedWsError: true,
        feedWsConnected: false,
      };
    case FEED_WS_CONNECTION_CLOSED:
      return {
        ...state,
        feedWsConnected: false,
        data: null,
      };
    case FEED_WS_GET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
