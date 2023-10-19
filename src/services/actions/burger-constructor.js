import { v4 as uuidv4 } from "uuid";

export const GET_ITEM = 'GET_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const REMOVE_ALL = 'REMOVE_ALL';

export function addIngredient(ingredient) {
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
