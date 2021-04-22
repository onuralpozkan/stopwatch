import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [second, setSecond] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [timeArray, setTimeArray] = useState([]);
  const startWatch = () => {
    setIsStarted(!isStarted);
    if(isStarted){
      let time = second + " : " + (count < 10 ? '0' + count : count);
      timeArray.push(time)
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
  const intervals = timeArray.map((i,index) => (<li className="time-item" key={`i - ${index}`}>{index + 1}. <em>{i}</em></li>))
  return (
    <div className="main">
      <div className="watch">
        <h1>StopWatch</h1>

        <h1>
          {second === 0 ? null : second + ' : '}
          {count < 10 ? '0' + count : count}
        </h1>

        <div className="btns">
          <button onClick={startWatch}>{isStarted ? 'Stop' : 'Start'}</button>
          <button
            onClick={() => {
              setCount(0);
              setSecond(0);
              setTimeArray([])
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="right-panel">
        <ul className="time-list">
          {intervals}
          {/* <li className="time-item">
            "02 : 22"
          </li>
          <li className="time-item">
            "02 : 22"
          </li>
          <li className="time-item">
            "02 : 22"
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default App;
