import { combineReducers, createStore, applyMiddleware } from "redux";
import { burgerIngredientsReducer } from '../reducers/burger-ingredients';
import { ingredientDetailsReducer } from '../reducers/ingredient-details';
import { orderDetailsReducer } from '../reducers/order-details';
import thunk from 'redux-thunk';


export const rootreducer = combineReducers({
    items: burgerIngredientsReducer,
    currentIngredient: ingredientDetailsReducer,
    orderID: orderDetailsReducer,

})

export const store = createStore(rootreducer, applyMiddleware(thunk));