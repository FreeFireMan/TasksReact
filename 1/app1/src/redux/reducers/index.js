import {combineReducers} from "redux";
import {buttonsReducer} from "./buttons-reducer";
import {resultReducer} from "./result-reducer";

export const reducer = combineReducers({
    buttons: buttonsReducer,
    result: resultReducer

})



