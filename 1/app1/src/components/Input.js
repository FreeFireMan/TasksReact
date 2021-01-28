import React, {useState} from "react";
import '../App.css';
import {useDispatch} from "react-redux";
import {ADD_RESULT} from "../redux/action-types";

export default function Input() {

    const dispatch = useDispatch();
    const [payload, setPayload] = useState(0);

    return (
        <div className='submit-box'>
            <input
                type="number"
                name='inp'
                onChange={({target: {value}}) =>
                    setPayload(+value)} value={payload}
            />
            <button
                className="submit-btn"
                onClick={() =>
                    dispatch({type: ADD_RESULT, payload})}
            >SUBMIT
            </button>
        </div>
    );
}



