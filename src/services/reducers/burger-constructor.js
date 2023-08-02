import { GET_ITEM, DELETE_ITEM } from "../actions/burger-constructor";

const initialState = {
  selectedItems: {
    bun: null,
    ingredients: [],
  },
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEM:
      if (action.newIngredient.type === "bun") {
        return {
          ...state,
          selectedItems: {
            ...state.selectedItems,
            bun: action.newIngredient
          },
        };
      } else {
        return {
          ...state,
          selectedItems: {
            ...state.selectedItems,
            ingredients: [...state.selectedItems.ingredients, action.newIngredient],
          },
        };
      }
    case DELETE_ITEM:
      return {
        ...state,
        selectedItems: {
          ...state.selectedItems,
          ingredients: [...state.selectedItems.ingredients].filter(item => item.uniqueId !== action.id)
        }
      };
    default:
      return state;
  }
};
