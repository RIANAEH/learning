import React , {useEffect, useState} from 'react';
import SimpleTimer from './SimpleTimer/SimpleTimer';
import InputTime from './InputTime';
import Container from './Container';

const Countdown = () => {

    const crews = ['🐶', '🐱'];
    const [now, setNow] = useState(true);

    const [isRunning, setRunning] = useState(false);
    
    const startCountdown = ( timerData ) => {
        setTimer(timerData);
        setRunning(!isRunning);
    }

    const stop = () => {
        setRunning(!isRunning);

        setNow(!now);
    }
    
    const [ timer , setTimer ] = useState({minutes: 0, seconds: 0});
    
    return (
        <div>
            <Container m='10px 0' f='20px'>
                <mark>드라이버: {now ? (crews[0]) : (crews[1])}</mark>
            </Container>
            {isRunning ? (
                <SimpleTimer 
                    minutes={timer.minutes} 
                    seconds={timer.seconds}
                    stop={stop}
                />
            ) : (
                <InputTime timer={timer} startCountdown={startCountdown}/>
            )
            }
        </div>
    )
}

export default Countdown;
