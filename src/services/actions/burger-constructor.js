import { v4 as uuidv4 } from "uuid";

export const GET_ITEM = 'GET_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export function addUniqueId(ingredient) {
  return function (dispatch) {
    const uniqueId = uuidv4();
    const ingredientWithUniqueId = {
        uniqueId: uniqueId,
        type: ingredient.type,
        _id: ingredient._id,
        name: ingredient.name,
        image: ingredient.image,
        price: ingredient.price,
        fat: ingredient.fat,
        proteins: ingredient.proteins,
        carbohydrates: ingredient.carbohydrates,
        calories: ingredient.calories,
      }
    dispatch({
      type: GET_ITEM,
      newIngredient: ingredientWithUniqueId
    });
  };
}