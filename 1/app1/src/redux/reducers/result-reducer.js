import {ADD_RESULT,RESET} from "../action-types";

const initialState = {
    result: 0
}

export const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RESULT: {
            return {...state, result: (state.result + action.payload) > 0 ? state.result + action.payload : 0}
        }
        case RESET: {
            return {...state, result: 0}
        }
        default: {
            return state;
        }
    }
}
