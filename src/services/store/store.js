import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { burgerIngredientsReducer } from "../reducers/burger-ingredients";
import { orderDetailsReducer } from "../reducers/order-details";
import { burgerConstructorReducer } from "../reducers/burger-constructor";
import { forgotPasswordReduser } from "../reducers/forgot-password";
import thunk from "redux-thunk";
import { resetPasswordReduser } from "../reducers/reset-password";
import { userDataReduser } from "../reducers/user";
import { socketMiddleware } from "../middleware/wsMiddleware";
import { FEED_WS_CONNECTION_CLOSED, FEED_WS_CONNECTION_ERROR, FEED_WS_CONNECTION_START, FEED_WS_CONNECTION_SUCCESS, FEED_WS_GET_DATA, FEED_WS_CONNECTION_FINISHED } from "../actions/feed";
import { feedReducer } from "../reducers/feed";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const wsUrl = 'wss://norma.nomoreparties.space/orders/all'
const wsActions = {
  wsInit: FEED_WS_CONNECTION_START,
  onOpen: FEED_WS_CONNECTION_SUCCESS,
  onClose: FEED_WS_CONNECTION_CLOSED,
  onError: FEED_WS_CONNECTION_ERROR,
  onMessage: FEED_WS_GET_DATA,
  wsClose: FEED_WS_CONNECTION_FINISHED
}

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsUrl, wsActions)));

export const rootreducer = combineReducers({
  items: burgerIngredientsReducer,
  orderID: orderDetailsReducer,
  selectedItems: burgerConstructorReducer,
  forgotPassword: forgotPasswordReduser,
  resetPassword: resetPasswordReduser,
  user: userDataReduser,
  feed: feedReducer,

});

export const store = createStore(rootreducer, enhancer);
