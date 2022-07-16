import React, { useState, useContext } from "react";

const InputTime = props => {

    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);

    const startTimer = () => {
        props.startCountdown({
            minutes, 
            seconds
        })
        console.log('start!');
    }

    return (
        <div>
            <input
                type='number'
                value={minutes}
                onChange={e => setMinutes(e.target.value)}
            />
            :
            <input
                type='number'
                value={seconds}
                onChange={e => setSeconds(e.target.value)}
            />
            <div onClick={startTimer}>🏃🏻‍♂️</div>
        </div>
    )
}

export default InputTime;
