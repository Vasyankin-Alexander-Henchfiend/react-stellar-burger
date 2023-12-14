import { store } from "../store/store";
import { TBurgerConstructorActions } from "./burger-constructor";
import { TBurgerIngredientsActions } from "./burger-ingredients";
import { TResetPasswordActions } from "./reset-password";
import { TUserActions } from "./user";
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { TForgotPasswordActions } from "./forgot-password";
import { TOrdersHystoryActions } from "./orders-history";
import { TOrderInformationActions } from "./order-information";
import { TOrderDetailsActions } from "./order-details";
import { TFeedActions } from "./feed";

export type RootState = ReturnType<typeof store.getState>; 

type TApplicationActions = 
| TBurgerConstructorActions
| TBurgerIngredientsActions
| TUserActions
| TResetPasswordActions
| TForgotPasswordActions
| TOrdersHystoryActions
| TOrderInformationActions
| TOrderDetailsActions
| TFeedActions

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TApplicationActions
>; 

export type AppDispatch = ThunkDispatch<
  RootState,
  unknown,
  TApplicationActions
>;

