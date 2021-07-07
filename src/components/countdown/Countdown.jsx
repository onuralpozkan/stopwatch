import useCountdown from './useCountdown';
import { useRef, useState } from 'react';
import './Countdown.css';
import SoundFile from '../../assets/sounds/digital-beep.wav';
import { Link } from 'react-router-dom';
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

  const mySound = useRef();
  const sound = <audio ref={mySound} src={SoundFile} autoPlay />;
  console.log(mySound.current);
  const handleSound = () => {
    mySound.current.pause();
  };
  const handlePlay = () => {
    mySound.current.play();
  };
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const openConfig = () => {
    setIsConfigOpen(!isConfigOpen);
  };
  return (
    <div className="wa-countdown-wrapper">
      <div className="wa-countdown-top">
        <div className="wa-home">
          <Link to="/" className="wa-top-links">
            <i className="las la-home"></i>
          </Link>
        </div>
        <div className="wa-alarm-config" onClick={openConfig}>
          <Link className="wa-top-links">
            <i className="las la-cog"></i>
          </Link>
        </div>
        <div
          className={`wa-config-box wa-config-${
            isConfigOpen ? 'open' : 'close'
          }`}
        >
          <ul>
            <li>Settings</li>
            <li>Set Alarm Music</li>
            <li>
              <input type="file" name="" id="" />
            </li>
          </ul>
        </div>
      </div>
      <h1 className="wa-pages-title">Countdown</h1>
      <div className="wa-user-input">
        <input
          type="number"
          name="user-count"
          id="userCount"
          onChange={handleChange}
          ref={countInput}
          value={userInput}
        />
        <label htmlFor="user-count">Please enter a seconds</label>
      </div>
      <div className="wa-countdown-btns">
        <button
          onClick={startCountdown}
          disabled={isStarted && true}
          className="wa-btn wa-btn-circular wa-btn-play"
        >
          <i className="las la-play-circle"></i>
        </button>
        {userInput === 0 && (
          <button
            onClick={handleSound}
            className="wa-btn wa-btn-circular wa-btn-play"
          >
            <i className="las la-stop-circle"></i>
          </button>
        )}
        <button
          onClick={handleStop}
          className="wa-btn wa-btn-circular wa-btn-play"
        >
          <i className="las la-pause-circle"></i>
        </button>
        <button
          onClick={resetCountdown}
          className="wa-btn wa-btn-circular wa-btn-play"
        >
          <i className="las la-undo-alt"></i>
        </button>
      </div>
      <div className="wa-sound">{userInput === 0 && sound}</div>
    </div>
  );
};
export default Countdown;
