import './TimerInput.css'

export default function TimerInput({ onChange }) {
    return (
        <div className="timer-input-container">
            <label htmlFor='target-time-input' className='timer-input-label'>
                Set timer for:
            </label>
            <input type="datetime-local" 
                id="target-time-input" 
                className ='timer-input-field'
                onChange = {e => onChange(e.target.value)}>
            </input>
        </div>
    );
}