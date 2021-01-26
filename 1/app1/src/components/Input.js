import React from "react";
import '../App.css';

export default function Input({setCount}) {
    const inputRef = React.createRef();


    const onSubmitHandler = () => {
        setCount(prev => prev + +inputRef.current.value)
    }

    return (
        <div className='submit-box'>
            <input type="number" name='inp' ref={inputRef}/>
            <button className="submit-btn" onClick={onSubmitHandler}>SUBMIT</button>
        </div>
    );
}
