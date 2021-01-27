import React, {useState} from "react";
import '../App.css';

export default function Input({calculationHandler}) {
    //todo позбавитися рефа і зробити контрольований інпут

    const [inputValue, setInputValue] = useState(0);
    console.log(inputValue);
    return (
        <div className='submit-box'>
            <input type="number" name='inp' onChange={(e) => setInputValue(+(e.target.value))} value={inputValue}/>
            <button className="submit-btn" onClick={() => calculationHandler(inputValue)}>SUBMIT</button>
        </div>
    );
}
