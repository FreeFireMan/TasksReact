import React from "react";
import '../App.css';
import {useSelector} from "react-redux";

export default function Buttons({calculationHandler}) {

    const buttons = useSelector((store) => store.buttons);

    const btnHandler = (value) => {
        calculationHandler(value)
    }

    return (
        <div className="calculations-box">
            {buttons.map((el, i) => (
                <button className='calc-btn' key={i} onClick={btnHandler.bind(null, el)}>{el}</button>))}
            <button className='reset' onClick={() => btnHandler('reset')}>RESET</button>
        </div>

    );
}
