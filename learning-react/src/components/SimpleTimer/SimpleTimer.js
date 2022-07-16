import React, { useState, useEffect } from "react";
import './SimpleTimer.css';

const SimpleTimer = (props) => {
    
    const targetMinutes = props.minutes ? parseInt(props.minutes) : 0;
    const targetSeconds = props.seconds ? parseInt(props.seconds) : 0;
    
    const [minutes, setMinutes] = useState(targetMinutes);
    const [seconds, setSeconds] = useState(targetSeconds);

    const stopTimer = () => {
        props.stop();
      };
    
    useEffect(() => {
        const countdown = setInterval(() => {
        if (parseInt(seconds) > 0) {
            setSeconds(parseInt(seconds) - 1);
        }
        if (parseInt(seconds) === 0) {
            if (parseInt(minutes) === 0) {
            clearInterval(countdown);
            return () => clearInterval(countdown);
            }
            setMinutes(parseInt(minutes) - 1);
            setSeconds(59);
        }
        }, 1000);
        return () => clearInterval(countdown);
    }, [minutes, seconds]);

    return (
        <div>
            <div>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </div>
            <div onClick={stopTimer}>stop 🖐</div>
        </div>
    )
}

export default SimpleTimer;