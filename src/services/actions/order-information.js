export const SET_CURRENT_ORDER = 'SET_CURRENT_ORDER';
export const REMOVE_CURRENT_ORDER = 'REMOVE_CURRENT_ORDER';

export const setOrder = (order) => {
    return {
        type: SET_CURRENT_ORDER,
        payload: order,
    }
}

export const removeOrder = () => {
    return {
        type: REMOVE_CURRENT_ORDER,
    }
}