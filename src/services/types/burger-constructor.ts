import { TIngredient } from "../../components/ui/types";
import {
  DELETE_ITEM,
  GET_ITEM,
  MOVE_ITEM,
  REMOVE_ALL,
} from "../actions/burger-constructor";

export type TGetItemAction = {
  readonly type: typeof GET_ITEM;
  newIngredient: TIngredient;
};

export type TMoveItemAction = {
  readonly type: typeof MOVE_ITEM;
  movedIngredient: TIngredient[];
};

export type TDeleteItemAction = {
  readonly type: typeof DELETE_ITEM;
  id: string | undefined
};

export type TRemoveAllAction = {
  readonly type: typeof REMOVE_ALL;
};

export type TBurgerConstructorActions =
  | TGetItemAction
  | TDeleteItemAction
  | TRemoveAllAction
  | TMoveItemAction;

export type TBurgerConstructorState = {
  selectedItems: {
    bun: TIngredient | null;
    ingredients: TIngredient[] | [];
  };
};
