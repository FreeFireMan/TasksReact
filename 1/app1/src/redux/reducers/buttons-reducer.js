import {ADD_BUTTONS} from "../action-types";

const initialState = {
    buttons: []
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
