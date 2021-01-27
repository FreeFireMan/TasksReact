import React from "react";
import '../App.css';

export default function Buttons({btns, calculationHandler}) {


    return (
        <div className="calculations-box">
            {btns.map((el, i) => (<button className='calc-btn' key={i} onClick={calculationHandler}>{el}</button>))}
            <button className='reset' onClick={calculationHandler}>RESET</button>
        </div>

    );
}
