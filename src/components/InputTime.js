import React, { useState, useContext } from "react";
import Container from "./Container";

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

    const inputStyle = {
        fontSize: '20px'
    }

    return (
        <div>
            <Container m='10px 0' f='15px'>
                네이게이터와 드라이버는 자주 교체해주는게 좋아요☺️
            </Container>
            <input style={inputStyle}
                type='number'
                min={0}
                max={59}
                value={minutes}
                onChange={e => setMinutes(e.target.value)}
            />
            :
            <input style={inputStyle}
                type='number'
                min={0}
                max={59}
                value={seconds}
                onChange={e => setSeconds(e.target.value)}
            />
            <Container m='10px 0'>
                <button onClick={startTimer}>🎬 시작</button>
            </Container>
        </div>
    )
}

export default InputTime;
