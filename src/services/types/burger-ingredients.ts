import { TIngredient } from "../../components/ui/types";
import { GET_ITEMS_FAILED, GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS } from "../actions/burger-ingredients";

export type TBurgerIngredientsState = {
  items: [];
  itemsRequest: boolean;
  itemsFailed: boolean;
};

export type TGetItemRequestAction = {
  readonly type: typeof GET_ITEMS_REQUEST;
};

export type TGetItemSuccessAction = {
  readonly type: typeof GET_ITEMS_SUCCESS;
  items: Array<TIngredient>;
};

export type TGetItemFailedAction = {
  readonly type: typeof GET_ITEMS_FAILED;
};

export type TBurgerIngredientsActions =
  | TGetItemFailedAction
  | TGetItemRequestAction
  | TGetItemSuccessAction;
