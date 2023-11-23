export const FEED_WS_CONNECTION_START = "FEED_WS_CONNECTION_START";
export const FEED_WS_CONNECTION_SUCCESS = "FEED_WS_CONNECTION_SUCCESS";
export const FEED_WS_CONNECTION_ERROR = "FEED_WS_CONNECTION_ERROR";
export const FEED_WS_CONNECTION_CLOSED = "FEED_WS_CONNECTION_CLOSED";
export const FEED_WS_GET_DATA = "FEED_WS_GET_DATA";
export const FEED_WS_CONNECTION_FINISHED = 'FEED_WS_CONNECTION_FINISHED'

export const wsFeedConnectionSuccess = () => {
  return {
    type: FEED_WS_CONNECTION_SUCCESS,
  };
};

export const wsFeedConnectionError = () => {
  return {
    type: FEED_WS_CONNECTION_ERROR,
  };
};

export const wsFeedConnectionClosed = () => {
  return {
    type: FEED_WS_CONNECTION_CLOSED,
  };
};

export const wsFeedConnectionFinished = () => {
  return {
    type: FEED_WS_CONNECTION_FINISHED,
  };
};

export const wsFeedGetData = (message) => {
  return {
    type: FEED_WS_GET_DATA,
    payload: message,
  };
};
