import React from "react";
import '../App.css';

export default function Buttons({setCount}) {
//
    const calculationHandler = (event) => {
        const value = event.target.innerText;
        if (value === '+1') setCount(prev => prev + 1)
        else if (value === '-1') setCount(prev => prev <= 0 ? prev = 0 : prev - 1)
        else if (value === '+100') setCount(prev => prev + 100)
        else if (value === '-100') setCount(prev => prev <= 0 ? prev = 0 : prev - 100)
        else setCount(0)
    }

    return (
        <div className="calculations-box">
            <button className='calc-btn' onClick={calculationHandler}>+1</button>
            <button className='calc-btn' onClick={calculationHandler}>-1</button>
            <button className='calc-btn' onClick={calculationHandler}>+100</button>
            <button className='calc-btn' onClick={calculationHandler}>-100</button>
            <button className='reset' onClick={calculationHandler}>RESET</button>
        </div>

    );
}
