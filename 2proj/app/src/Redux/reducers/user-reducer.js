import {ADD_USERS_FROM_API, ADD_CHOSEN_USER,DELETE_CHOSEN_USER} from "../action-types";
import {act} from "@testing-library/react";


const initialState = {
    users: [],
    chosenUser: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERS_FROM_API: {
            return {...initialState, users: action.payload}
        }
        case ADD_CHOSEN_USER: {
            const chosenUser = state.users.filter(user => user.id === action.payload);
            return {...state, chosenUser}
        }
        case DELETE_CHOSEN_USER: {
            console.log(action.payload,'delete');
            const withDeleted = state.users.filter(user => user.id !== action.payload);
            return {...state, users: withDeleted}
        }
        default: {
            return state;
        }
    }
}
