import { useEffect, useState } from 'react';
import './Stopwatch.css';
import { Link } from 'react-router-dom';
function Stopwatch() {
  const [count, setCount] = useState(0);
  const [second, setSecond] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [timeArray, setTimeArray] = useState([]);
  const startWatch = () => {
    setIsStarted(!isStarted);
    if (isStarted) {
      let time = second + ' : ' + (count < 10 ? '0' + count : count);
      timeArray.push(time);
    }
  };
  useEffect(() => {
    let interval = null;
    if (isStarted) {
      interval = setInterval(() => {
        if (count < 60) {
          setCount((prevCount) => prevCount + 1);
        } else if (count === 60) {
          setCount(0);
          setSecond((prevS) => prevS + 1);
        }
      }, 10);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isStarted, count]);
  const intervals = timeArray.map((i, index) => (
    <li className="wa-time-item" key={`i - ${index}`}>
      <span style={{color:'#bababa',marginRight:".2rem"}}>{index + 1}.</span> {i}
    </li>
  ));
  return (
    <div className="wa-stopwatch">
      <div className="wa-watch">
        <div className="wa-stopwatch-top">
          <div className="wa-home">
            <Link to="/" className="wa-top-links">
              <i className="las la-home"></i>
            </Link>
          </div>
        </div>
        <h1 className="wa-pages-title">StopWatch</h1>
        <div className="wa-stopwatch-time">
          <h1>
            <span>{second === 0 ? null : second + ':'}</span>
            <span> {count < 10 ? '0' + count : count}</span>
          </h1>
        </div>

        <div className="wa-btns">
          <button
            className="wa-btn wa-btn-circular wa-btn-play"
            onClick={startWatch}
          >
            {isStarted ? (
              <i className="las la-pause-circle"></i>
            ) : (
              <i className="las la-play-circle"></i>
            )}
          </button>
          <button
            className="wa-btn wa-btn-circular wa-btn-play"
            onClick={() => {
              setCount(0);
              setSecond(0);
              setTimeArray([]);
            }}
          >
            <i className="las la-undo-alt"></i>
          </button>
        </div>
      </div>
      <div className="wa-right-panel">
        <ul className="wa-time-list">
          <li className="wa-time-item">Turlar</li>
          {intervals}</ul>
      </div>
    </div>
  );
}

export default Stopwatch;
