import { TOrdersData } from "../../components/ui/types";
import {
  ORDERS_HISTORY_WS_CONNECTION_START,
  ORDERS_HISTORY_WS_GET_DATA,
  ORDERS_HISTORY_WS_CONNECTION_SUCCESS,
  ORDERS_HISTORY_WS_CONNECTION_ERROR,
  ORDERS_HISTORY_WS_CONNECTION_CLOSED,
  ORDERS_HISTORY_WS_CONNECTION_FINISHED,
} from "../actions/orders-history";

export type TOrdersHystoryWsConnectionStartAction = {
  readonly type: typeof ORDERS_HISTORY_WS_CONNECTION_START;
};

export type TOrdersHystoryWsConnectionSuccessAction = {
  readonly type: typeof ORDERS_HISTORY_WS_CONNECTION_SUCCESS;
};

export type TOrdersHystoryWsConnectionErrorAction = {
  readonly type: typeof ORDERS_HISTORY_WS_CONNECTION_ERROR;
};

export type TOrdersHystoryWsConnectionClosedAction = {
  readonly type: typeof ORDERS_HISTORY_WS_CONNECTION_CLOSED;
};

export type TOrdersHystoryWsConnectionFinishedAction = {
  readonly type: typeof ORDERS_HISTORY_WS_CONNECTION_FINISHED;
};

export type TOrdersHystoryWsGetDataAction = {
  readonly type: typeof ORDERS_HISTORY_WS_GET_DATA;
  payload: TOrdersData
};

export type TOrdersHystoryActions =
  | TOrdersHystoryWsConnectionStartAction
  | TOrdersHystoryWsConnectionSuccessAction
  | TOrdersHystoryWsConnectionErrorAction
  | TOrdersHystoryWsConnectionClosedAction
  | TOrdersHystoryWsConnectionFinishedAction
  | TOrdersHystoryWsGetDataAction;

export type TOrdersHystoryState = {
  ordersHistoryWsConnected: boolean;
  ordersHistoryWsError: boolean;
  data: TOrdersData | null;
};
