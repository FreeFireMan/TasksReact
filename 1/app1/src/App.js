import Result from "./components/Result";
import Buttons from "./components/Buttons";
import Input from "./components/Input";
import React, {useState} from "react";

export default function App() {
    const [count, setCount] = useState(0);
    const buttons = [1, -1, 100, -100]
    return (
        <div className='app-box'>
            <Result count={count}/>
            <Buttons setCount={setCount} btns={buttons}/>
            <Input setCount={setCount}/>
        </div>
    );
}
















