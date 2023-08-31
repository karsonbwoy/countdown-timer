import alarm from '../assets/alarm.mp3'
import './Audio.css'
import { useRef, useState, useEffect} from "react";

export default function Audio({ timeRemaining }) {
    const alarmRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(()=>{
        if(!isMuted){
            if (timeRemaining.days === 0 && timeRemaining.hours === 0 && timeRemaining.minutes === 0 && timeRemaining.seconds === 0) {
                if (alarmRef.current) {
                    alarmRef.current.play();
                    console.log('Alarm played');
                }
            } else if(timeRemaining){
                if (alarmRef.current) {
                    alarmRef.current.pause();
                }
            }
        } else if (alarmRef.current) {
            alarmRef.current.pause();
        }
    },[timeRemaining, isMuted])

    function toggleMuting() {
        setIsMuted(!isMuted);
    }

    return(
        <div className='container'>
            <button className = {`mute-button${isMuted? ' muted' : ''}`} onClick={toggleMuting}>{isMuted? 'Unmute' : 'Mute'}</button>
            <audio ref={alarmRef} src={alarm}/>
        </div>
    )
}