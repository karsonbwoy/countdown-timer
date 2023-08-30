export default function Countdown({ timeRemaining }) {
    if(!timeRemaining){
        return (<div className="time-over">Time is up!</div>)
    }
    return(
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
    );
}