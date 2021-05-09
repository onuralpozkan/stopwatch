import useCountdown from './useCountdown';
import {useRef} from 'react'
import './Countdown.css';
import SoundFile from '../../assets/sounds/digital-beep.wav'
const Countdown = () => {
  const {
    handleChange,
    startCountdown,
    handleStop,
    resetCountdown,
    countInput,
    isStarted,
    userInput,
  } = useCountdown(5);
  
  const mySound = useRef()
  const sound = <audio ref={mySound} src={SoundFile} autoPlay/>
  console.log(mySound.current);
  const handleSound = () => {
    mySound.current.pause()
  }
  const handlePlay = () => {
    mySound.current.play()
  }
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
      <div className="wa-sound">
        {userInput === 0 && sound}
        <button onClick={handleSound}>||</button>
        <button onClick={handlePlay}>Play</button>
      </div>
    </div>
  );
};
export default Countdown;
