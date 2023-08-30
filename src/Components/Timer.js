import { useState, useEffect } from "react";
import './Timer.css'
import TimerInput from "./TimerInput.js";
export default function Timer() {

    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    const [targetDate, setTargetDate] = useState()

    useEffect(() => {
        const calculateTimeRemaining = () => {
            if (!targetDate) {
                return null;
            }
            const convertedDate = new Date(targetDate)
            const now = new Date().getTime()
            const distance = convertedDate.getTime() - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeRemaining({days, hours, minutes, seconds})
        }

        calculateTimeRemaining();

        const timer = setInterval(calculateTimeRemaining, 1000);

        return () => clearInterval(timer);
    }, [targetDate])

    function handleChange (changedDate){
        setTargetDate(changedDate)
    }

    return (
        <>
            <TimerInput onChange = {handleChange}></TimerInput>
            <div className="countdown-container">
            <div className="time-block">
                <div className="time">{timeRemaining.days}</div>
                <div className="label">Days</div>
            </div>
            <div className="time-block">
                <div className="time">{timeRemaining.hours}</div>
                <div className="label">Hours</div>
            </div>
            <div className="time-block">
                <div className="time">{timeRemaining.minutes}</div>
                <div className="label">Minutes</div>
            </div>
            <div className="time-block">
                <div className="time">{timeRemaining.seconds}</div>
                <div className="label">Seconds</div>
            </div>
            </div>
        </>
      );
}