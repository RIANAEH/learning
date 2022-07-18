import React, { useState, useEffect } from "react";
import ReactHowler from 'react-howler'
import Container from "../Container";
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
            setSeconds(59);
            setMinutes(parseInt(minutes) - 1);
        }
        }, 1000);
        return () => clearInterval(countdown);
    }, [minutes, seconds]);

    return (
        <div>
            <Container m='10px 0' f='15px'>
                종료되면 효과음이 울려요🎶
            </Container>
            <Container m='10px 0'>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </Container>
            <Container m='10px 0'>
                <button onClick={stopTimer}>🛑 종료</button>
            </Container>
            <ReactHowler
                src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
                playing={minutes === 0 && seconds === 0}
            ></ReactHowler>
        </div>
    )
}

export default SimpleTimer;