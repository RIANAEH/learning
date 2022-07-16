import React , {useState} from 'react';
import SimpleTimer from './SimpleTimer/SimpleTimer';
import InputTime from './InputTime';

const Countdown = () => {

    const [isRunning, setRunning] = useState(false);
    
    const timerValue = {
        minutes: 0,
        seconds: 0
    }
    
    const startCountdown = ( timerData ) => {
        setTimer(timerData);
        setRunning(!isRunning);
    }

    const stop = () => {
        setTimer(timerValue);
        setRunning(!isRunning);
    }
    
    const [ timer , setTimer ] = useState(timerValue);
    
    return (
        <div>
            {isRunning ? (
                <SimpleTimer 
                    minutes={timer.minutes} 
                    seconds={timer.seconds}
                    stop={stop}
                />
            ) : (
                <InputTime startCountdown={startCountdown}/>
            )
            }
        </div>
    )
}

export default Countdown;
