import React from "react";
import '../App.css';
import {useSelector} from "react-redux";
import {ADD_RESULT, RESET} from "../redux/action-types";

export default function Buttons() {

    const buttons = useSelector((store) => store.buttons.buttons);
    const dispatch = useDispatch();

    const btnHandler = (payload) => {
        dispatch({type: ADD_RESULT, payload})
    }

    return (
        <div className="calculations-box">
            {buttons.map((el, i) => (
                <button className='calc-btn' key={i} onClick={btnHandler.bind(null, el)}>{el}</button>))}
            <button className='reset' onClick={() => dispatch({type: RESET})}>RESET</button>
        </div>

    );
}
