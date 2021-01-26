import React, {useState} from 'react';

import '../App.css';


export default function Calculator() {
    const [count, setCount] = useState(0);

    const calculationHandler = (event) => {
        const value = event.target.innerText;
        if (value === '+1') setCount(prev => prev + 1)
        else if (value === '-1') setCount(prev => prev - 1)
        else if (value === '+100') setCount(prev => prev + 100)
        else if (value === '-100') setCount(prev => prev - 100)
        else setCount(0)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setCount(e.target[0].value)
    }
    return (
        <div className='main-calc-box'>
            <h1>Calculator</h1>
            <div className='result'>
                {count}
            </div>
            <div className="calculations-box">
                <button className='calc-btn' onClick={calculationHandler} value='1'>+1</button>
                <button className='calc-btn' onClick={calculationHandler}>-1</button>
                <button className='calc-btn' onClick={calculationHandler}>+100</button>
                <button className='calc-btn' onClick={calculationHandler}>-100</button>
            </div>
            <button className='reset' onClick={calculationHandler}>RESET</button>
            <div className='bottom-box'>
                <form action="" onSubmit={onSubmitHandler}>
                    <input type="number"/>
                    <button className="submit-btn">SUBMIT</button>
                </form>


            </div>
        </div>
    );
}
