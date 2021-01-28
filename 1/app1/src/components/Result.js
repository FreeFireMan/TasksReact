import React from "react";
import '../App.css';
import {useSelector} from "react-redux";

export default function Result() {
    const result = useSelector((store) => store.result.result);

    return (
        <div className='main-calc-box'>
            <div className='result'>
                {result}
            </div>
            <h1>Calculator</h1>
        </div>
    );
}


