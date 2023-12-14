import { TOrdersData } from "../../components/ui/types";
import {
  FEED_WS_CONNECTION_START,
  FEED_WS_CONNECTION_CLOSED,
  FEED_WS_CONNECTION_ERROR,
  FEED_WS_CONNECTION_FINISHED,
  FEED_WS_CONNECTION_SUCCESS,
  FEED_WS_GET_DATA,
} from "../actions/feed";

export type TFeedWsConnectionStartAction = {
  readonly type: typeof FEED_WS_CONNECTION_START;
};

export type TFeedWsConnectionClosedAction = {
    readonly type: typeof FEED_WS_CONNECTION_CLOSED
};

export type TFeedWsConnectionErrorAction = {
    readonly type: typeof FEED_WS_CONNECTION_ERROR
};

export type TFeedWsConnectionFinishedAction = {
    readonly type: typeof FEED_WS_CONNECTION_FINISHED
};

export type TFeedWsConnectionSuccessAction = {
    readonly type: typeof FEED_WS_CONNECTION_SUCCESS
};

export type TFeedWsGetDataAction = {
    readonly type: typeof FEED_WS_GET_DATA,
    payload: TOrdersData
};

export type TFeedActions = 
| TFeedWsConnectionStartAction
| TFeedWsConnectionClosedAction
| TFeedWsConnectionErrorAction
| TFeedWsConnectionFinishedAction
| TFeedWsConnectionSuccessAction
| TFeedWsGetDataAction;

export type TFeedState = {
    feedWsConnected: boolean,
    feedWsError: boolean,
    data: TOrdersData | null,
}