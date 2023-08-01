import { GET_ITEM, DELETE_ITEM } from "../actions/burger-constructor";

const initialState = {
    selectedItems: null,
    count: 0,

}

export const burgerConstructorReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_ITEM: {
            return {
                ...state,

            }
        }
        case DELETE_ITEM: {
            return {
                ...state,

            }
        }
        default: {
            return state
        }
    }
}