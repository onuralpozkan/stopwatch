import useCountdown from './useCountdown';
import './Countdown.css';
const Countdown = () => {
  const {
    handleChange,
    startCountdown,
    handleStop,
    resetCountdown,
    countInput,
    isStarted,
    userInput,
  } = useCountdown(50);

  return (
    <div className="wa-countdown-wrapper">
      <div className="wa-user-input">
        <label htmlFor="user-count">Please enter a number for seconds</label>
        <input
          type="number"
          name="user-count"
          id="user-count"
          onChange={handleChange}
          ref={countInput}
          value={userInput}
        />
      </div>
      <div className="wa-countdown-btns">
        <button onClick={startCountdown} disabled={isStarted && true}>
          Start
        </button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={resetCountdown}>Reset</button>
      </div>
      <div className="wa-count">
        <p>{userInput}</p>
      </div>
    </div>
  );
};
export default Countdown;
