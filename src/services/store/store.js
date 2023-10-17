import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { burgerIngredientsReducer } from '../reducers/burger-ingredients';
import { ingredientDetailsReducer } from '../reducers/ingredient-details';
import { orderDetailsReducer } from '../reducers/order-details';
import { burgerConstructorReducer } from "../reducers/burger-constructor";
import { forgotPasswordReduser } from "../reducers/forgot-password";
import thunk from 'redux-thunk';
import { resetPasswordReduser } from "../reducers/reset-password";
import { registerReduser } from "../reducers/register";
import { loginReduser } from "../reducers/login";
import { profileReduser } from "../reducers/profile";

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose; 

const enhancer = composeEnhancers(applyMiddleware(thunk))


export const rootreducer = combineReducers({
    items: burgerIngredientsReducer,
    currentIngredient: ingredientDetailsReducer,
    orderID: orderDetailsReducer,
    selectedItems: burgerConstructorReducer,
    forgotPassword: forgotPasswordReduser,
    resetPassword: resetPasswordReduser,
    register: registerReduser,
    login: loginReduser,
    profile: profileReduser,
})

export const store = createStore(rootreducer, enhancer);