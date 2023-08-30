import './TimerInput.css'

export default function TimerInput({ onChange, value }) {
    return (
        <div className="timer-input-container">
            <label htmlFor='target-time-input' className='timer-input-label'>
                Set timer for:
            </label>
            <input type="datetime-local" 
                id="target-time-input" 
                className ='timer-input-field'
                value = {value}
                onChange = {e => onChange(e.target.value)}
                max="2025-12-31T23:59" 
                min="2020-01-01T00:00" 
            >
            </input>
        </div>
    );
}