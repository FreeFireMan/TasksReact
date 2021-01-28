import Result from "./components/Result";
import Buttons from "./components/Buttons";
import Input from "./components/Input";
import React, {useState} from "react";

export default function App() {

    const [count, setCount] = useState(0);
    const buttons = [1, -1, 100, -100, 50, -50]

    const calculationHandler = (el) => {

        el === 'reset'
            ?setCount(0)
            :setCount(res => res + el <= 0 ? res = 0 : res += el);

    }

    return (
        <div className='app-box'>
            <Result count={count}/>
            <Buttons btns={buttons} calculationHandler={calculationHandler}/>
            <Input setCount={setCount} calculationHandler={calculationHandler}/>
        </div>
    );
}
















