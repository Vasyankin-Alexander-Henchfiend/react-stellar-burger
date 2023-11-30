import { v4 as uuidv4 } from "uuid";
import { TIngredient } from "../../components/ui/types";

export const GET_ITEM: 'GET_ITEM' = 'GET_ITEM';
export const DELETE_ITEM: 'DELETE_ITEM' = 'DELETE_ITEM';
export const REMOVE_ALL: 'REMOVE_ALL' = 'REMOVE_ALL';
export const MOVE_ITEM: 'MOVE_ITEM' = 'MOVE_ITEM';

export function addIngredient(ingredient: TIngredient) {
    const uniqueId = uuidv4();
    const ingredientWithUniqueId = {
        ...ingredient,
        uniqueId: uniqueId,
      }
   return {
      type: GET_ITEM,
      newIngredient: ingredientWithUniqueId
    };
  };
