import {
  GET_ITEM,
  DELETE_ITEM,
  REMOVE_ALL,
  MOVE_ITEM,
} from "../actions/burger-constructor";
import { TBurgerConstructorState, TBurgerConstructorActions } from "../types/burger-constructor";

const initialState: TBurgerConstructorState = {
  selectedItems: {
    bun: null,
    ingredients: [],
  },
};

export const burgerConstructorReducer = (
  state = initialState,
  action: TBurgerConstructorActions
) => {
  switch (action.type) {
    case GET_ITEM:
      if (action.newIngredient.type === "bun") {
        return {
          ...state,
          selectedItems: {
            ...state.selectedItems,
            bun: action.newIngredient,
          },
        };
      } else {
        return {
          ...state,
          selectedItems: {
            ...state.selectedItems,
            ingredients: [
              ...state.selectedItems.ingredients,
              action.newIngredient,
            ],
          },
        };
      }
    case MOVE_ITEM:
      return {
        ...state,
        selectedItems: {
          ...state.selectedItems,
          ingredients: action.movedIngredient,
        },
      };
    case DELETE_ITEM:
      return {
        ...state,
        selectedItems: {
          ...state.selectedItems,
          ingredients: [...state.selectedItems.ingredients].filter(
            (item) => item.uniqueId !== action.id
          ),
        },
      };
    case REMOVE_ALL:
      return {
        ...state,
        selectedItems: {
          bun: null,
          ingredients: [],
        },
      };
    default:
      return state;
  }
};
