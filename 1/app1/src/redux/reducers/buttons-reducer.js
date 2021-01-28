import {ADD_BUTTONS} from "../action-types";

const initialState = {
    buttons: [1, -1, 100, -100, 50, -50]
}

export const buttonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BUTTONS: {
            return {...state, buttons: action.payload}
        }
        default: {
            return state;
        }
    }
}
