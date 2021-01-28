import {createStore} from "redux";
import {buttonsReducer} from "./reducers/buttons-reducer";

export const store = createStore(buttonsReducer)
