import { useState, useEffect } from 'react';
import { ArrowIcon } from '../../assets/icons/ArrowIcon';
function useAlarmSetter(mySound, clock) {
  const [minutes, setMinutes] = useState([]);
  const [hours, setHours] = useState([]);
  const [isAlarmBell, setisAlarmBell] = useState(false);

  const [alarm, setAlarm] = useState({
    hours: 0,
    minutes: 2,
  });

  const handleTime = (e) => {
    const { name, value } = e.target;
    setAlarm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const format = alarm.hours + ':' + alarm.minutes;

  const [count, setCount] = useState({
    hours: 0,
    minutes: 9,
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setCount((prevCount) => ({
      ...prevCount,
      [name]: value,
    }));
  };

  const handleIncrement = (max, inputName) => {
    setAlarm((prevState) => ({
      ...prevState,
      [inputName]: prevState[inputName] < max ? prevState[inputName] + 1 : max,
    }));
  };
  const handleDecrement = (min, inputName) => {
    setAlarm((prevState) => ({
      ...prevState,
      [inputName]: prevState[inputName] > min ? prevState[inputName] - 1 : min,
    }));
  };
  const selector = (min, max, inputName) => {
    return (
      <div className="wa-alarm-setter">
        <i onClick={() => handleIncrement(max, inputName)}>
          <ArrowIcon clsName="chevron-up" />
        </i>
        <input
          type="text"
          maxLength="2"
          onChange={handleInput}
          value={alarm[inputName]}
          name={inputName}
        />
        <i onClick={() => handleDecrement(min, inputName)}>
          <ArrowIcon clsName="chevron-down" />
        </i>
      </div>
    );
  };

  useEffect(() => {
    if (clock.time == format) {
      setisAlarmBell(true);
      mySound.current.play();
    }
  }, [clock.time]);
  const stopAlarm = () => {
    setisAlarmBell(false);
    mySound.current.pause();
  };

  return { stopAlarm, alarm, isAlarmBell, selector };
}
export default useAlarmSetter;
