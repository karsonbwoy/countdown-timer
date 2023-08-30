export default function TimerInput({ onChange }) {
    return (
        <div className="countdown-container">
           <label htmlFor='target-time-input'>Set timer for:<br/>
            <input type="datetime-local" id="target-time-input" onChange = {e => onChange(e.target.value)}></input>
           </label>
        </div>
    );
}