export const FEED_WS_CONNECTION_START = "FEED_WS_CONNECTION_START";
export const FEED_WS_CONNECTION_SUCCESS = "FEED_WS_CONNECTION_SUCCESS";
export const FEED_WS_CONNECTION_ERROR = "FEED_WS_CONNECTION_ERROR";
export const FEED_WS_CONNECTION_CLOSED = "FEED_WS_CONNECTION_CLOSED";
export const FEED_WS_GET_DATA = "FEED_WS_GET_DATA";
export const FEED_WS_CONNECTION_FINISHED = 'FEED_WS_CONNECTION_FINISHED'

export const wsConnectionSuccess = () => {
  return {
    type: FEED_WS_CONNECTION_SUCCESS,
  };
};

export const wsConnectionError = () => {
  return {
    type: FEED_WS_CONNECTION_ERROR,
  };
};

export const wsConnectionClosed = () => {
  return {
    type: FEED_WS_CONNECTION_CLOSED,
  };
};

export const wsConnectionFinished = () => {
  return {
    type: FEED_WS_CONNECTION_FINISHED,
  };
};

export const wsGetData = (message) => {
  return {
    type: FEED_WS_GET_DATA,
    payload: message,
  };
};
