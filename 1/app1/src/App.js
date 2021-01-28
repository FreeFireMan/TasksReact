import Result from "./components/Result";
import Buttons from "./components/Buttons";
import Input from "./components/Input";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {ADD_BUTTONS, ADD_RESULT, RESET} from "./redux/action-types";

export default function App() {

    const dispatch = useDispatch();
    const [count, setCount] = useState(0);

    useEffect(() => {
        dispatch({type: ADD_BUTTONS, payload: [1, -1, 100, -100, 50, -50]})
    }, []);

    const calculationHandler = (el) => {
        el === 'reset'
            ? dispatch({type: RESET, payload: 0})
            : dispatch({type: ADD_RESULT, payload: el})
    }

    return (
        <div className='app-box'>
            <Result count={count}/>
            <Buttons calculationHandler={calculationHandler}/>
            <Input calculationHandler={calculationHandler}/>
        </div>
    );
}
















