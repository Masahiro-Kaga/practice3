import React, { useState } from 'react'
import Input from './Input';
import Output from './Output';

const Greeting = () => {
    const [changeText,setChangeText ] = useState(false);
    const changeTextHandler = () => {
        setChangeText(true);
    }
    
    return (
        <div>
            <h2>Hello world!</h2>
            {!changeText && <Output>Its good to see you</Output>}
            {changeText && <Output>Changed!</Output>}
            <Input></Input>
            <button onClick={changeTextHandler}>changed!</button>
        </div>
    )
}

export default Greeting
