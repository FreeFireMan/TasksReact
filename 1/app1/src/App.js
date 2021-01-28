import Result from "./components/Result";
import Buttons from "./components/Buttons";
import Input from "./components/Input";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {ADD_BUTTONS} from "./redux/action-types";

export default function App() {

    const dispatch = useDispatch();
    const [count, setCount] = useState(0);

    useEffect(() => {
        dispatch({type: ADD_BUTTONS, payload: [1, -1, 100, -100, 50, -50]})
    }, []);

    const calculationHandler = (el) => {
        el === 'reset'
            ? setCount(0)
            : setCount(res => res + el <= 0 ? res = 0 : res += el);
    }

    return (
        <div className='app-box'>
            <Result count={count}/>
            <Buttons calculationHandler={calculationHandler}/>
            <Input setCount={setCount} calculationHandler={calculationHandler}/>
        </div>
    );
}
















