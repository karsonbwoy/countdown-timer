import { useState, useEffect} from "react";
import './Timer.css'
import TimerInput from "./TimerInput.js";
import Countdown from "./Countdown.js";
import Audio from "./Audio.js";
export default function Timer() {

    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })
    const [targetDate, setTargetDate] = useState(
        localStorage.getItem('targetDate') || ''
        )

    function saveDate(targetDate) {
        localStorage.setItem('targetDate', targetDate)
    }

    useEffect(() => saveDate(targetDate),[targetDate])

    useEffect(() => {
        const calculateTimeRemaining = () => {
            if (!targetDate || isNaN(Date.parse(targetDate))) {
                console.log('target date undefined');
                return null;
            }
            const convertedDate = new Date(targetDate)
            const now = new Date().getTime()
            const distance = convertedDate.getTime() - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeRemaining(distance<0 ? false :{days, hours, minutes, seconds})
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
            <Audio timeRemaining = {timeRemaining}/>
            <Countdown timeRemaining = {timeRemaining}/>
            <TimerInput onChange = {handleChange} value = {targetDate}></TimerInput>
        </>
      );
}