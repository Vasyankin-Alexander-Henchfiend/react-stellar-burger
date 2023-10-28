export const ORDERS_HISTORY_WS_CONNECTION_START = "ORDERS_HISTORY_WS_CONNECTION_START";
export const ORDERS_HISTORY_WS_CONNECTION_SUCCESS = "ORDERS_HISTORY_WS_CONNECTION_SUCCESS";
export const ORDERS_HISTORY_WS_CONNECTION_ERROR = "ORDERS_HISTORY_WS_CONNECTION_ERROR";
export const ORDERS_HISTORY_WS_CONNECTION_CLOSED = "ORDERS_HISTORY_WS_CONNECTION_CLOSED";
export const ORDERS_HISTORY_WS_GET_DATA = "ORDERS_HISTORY_WS_GET_DATA";
export const ORDERS_HISTORY_WS_CONNECTION_FINISHED = 'ORDERS_HISTORY_WS_CONNECTION_FINISHED'

export const wsOrdersHistoryConnectionSuccess = () => {
  return {
    type: ORDERS_HISTORY_WS_CONNECTION_SUCCESS,
  };
};

export const wsOrdersHistoryConnectionError = () => {
  return {
    type: ORDERS_HISTORY_WS_CONNECTION_ERROR,
  };
};

export const wsOrdersHistoryConnectionClosed = () => {
  return {
    type: ORDERS_HISTORY_WS_CONNECTION_CLOSED,
  };
};

export const wsOrdersHistoryConnectionFinished = () => {
  return {
    type: ORDERS_HISTORY_WS_CONNECTION_FINISHED,
  };
};

export const wsOrdersHistoryGetData = (message) => {
  return {
    type: ORDERS_HISTORY_WS_GET_DATA,
    payload: message,
  };
};
