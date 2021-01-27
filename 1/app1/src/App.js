import Result from "./components/Result";
import Buttons from "./components/Buttons";
import Input from "./components/Input";
import React, {useState} from "react";

export default function App() {

    const [count, setCount] = useState(0);
    const buttons = [1, -1, 100, -100, 50, -50]

    const calculationHandler = (inp, el) => {
        if (inp > 0) setCount(prev => prev + inp);
        else if (el) setCount(res => res + el <= 0 ? res = 0 : res += el);
        else setCount(0);
    }

    return (
        <div className='app-box'>
            <Result count={count}/>
            <Buttons setCount={setCount} btns={buttons} calculationHandler={calculationHandler}/>
            <Input setCount={setCount} calculationHandler={calculationHandler}/>
        </div>
    );
}
















