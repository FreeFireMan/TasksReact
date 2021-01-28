import React from "react";
import '../App.css';

export default function Buttons({btns, calculationHandler}) {

    const btnHandler = (value) => {
        calculationHandler(value)
    }

    return (
        <div className="calculations-box">
            {btns.map((el, i) => (
                <button className='calc-btn' key={i} onClick={btnHandler.bind(null, el)}>{el}</button>))}
            <button className='reset' onClick={() => btnHandler('reset')}>RESET</button>
        </div>

    );
}
