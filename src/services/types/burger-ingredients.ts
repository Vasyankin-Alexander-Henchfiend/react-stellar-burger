import { TIngredient } from "../../components/ui/types";
import { GET_ITEMS_FAILED, GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS } from "../actions/burger-ingredients";

export type TBurgerIngredientsState = {
  items: [];
  itemsRequest: boolean;
  itemsFailed: boolean;
};

export type TGetItemRequestAction = {
  readonly type: typeof GET_ITEMS_REQUEST;
  itemsRequest: boolean;
};

export type TGetItemSuccessAction = {
  readonly type: typeof GET_ITEMS_SUCCESS;
  itemsFailed: boolean;
  items: Array<TIngredient>;
  itemsRequest: boolean;
};

export type TGetItemFailedAction = {
  readonly type: typeof GET_ITEMS_FAILED;
  itemsFailed: boolean;
  itemsRequest: boolean;
};

export type TBurgerIngredientsActions =
  | TGetItemFailedAction
  | TGetItemRequestAction
  | TGetItemSuccessAction;
