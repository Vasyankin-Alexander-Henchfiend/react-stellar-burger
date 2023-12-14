import { feedWsActions, ordersHistoryWsActions } from "../store/store";

export type TWsConnectionActions = 
typeof feedWsActions | typeof ordersHistoryWsActions