import Result from "./components/Result";
import Buttons from "./components/Buttons";
import Input from "./components/Input";
import React, {useState} from "react";

export default function App() {

    const [count, setCount] = useState(0);
    const buttons = [1, -1, 100, -100, 50, -50]
        //todo ці два метода об'єднати у один
    const onSubmitHandler = (ref) => {
        setCount(prev => prev + +ref.current.value)
    }
    const calculationHandler = (event) => {
        const value = +event.target.innerText
        if (event.target.innerText === 'RESET') setCount(0);
        else setCount(res => res + value <= 0 ? res = 0 : res += value);
    }
    return (
        <div className='app-box'>
            <Result count={count}/>
            <Buttons setCount={setCount} btns={buttons} calculationHandler={calculationHandler}/>
            <Input setCount={setCount} onSubmitHandler={onSubmitHandler}/>
        </div>
    );
}
















