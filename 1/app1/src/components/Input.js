import React from "react";
import '../App.css';

export default function Input({onSubmitHandler}) {
    //todo позбавитися рефа і зробити контрольований інпут
    const inputRef = React.createRef();


    return (
        <div className='submit-box'>
            <input type="number" name='inp' ref={inputRef}/>
            <button className="submit-btn" onClick={() => onSubmitHandler(inputRef)}>SUBMIT</button>
        </div>
    );
}
