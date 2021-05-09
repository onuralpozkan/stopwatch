import { useState, useEffect } from 'react';
function useAlarmSetter(mySound, clock) {
  const [minutes, setMinutes] = useState([]);
  const [hours, setHours] = useState([]);
  const [isAlarmBell, setisAlarmBell] = useState(false)

  const [alarm, setAlarm] = useState({
    hours: '01',
    minutes: '00',
  });

  const handleTime = (e) => {
    const { name, value } = e.target;
    setAlarm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const format = alarm.hours + ':' + alarm.minutes;
  const options = () => {
    for (let i = 0; i < 60; i++) {
      setMinutes((p) => [...p, i]);
    }
    for (let i = 0; i < 25; i++) {
      setHours((p) => [...p, i]);
    }
  };
  useEffect(() => {
    options();
  }, []);

  const selectHour = (
    <select name="hours" onChange={handleTime}>
      {hours.map((i) => {
        if (i < 10) {
          i = '0' + i;
        }
        return (
          <option value={i} key={`hou-${i}`}>
            {i}
          </option>
        );
      })}
    </select>
  );
  const selectMinute = (
    <select name="minutes" onChange={handleTime}>
      {minutes.map((i) => {
        if (i < 10) {
          i = '0' + i;
        }
        return (
          <option value={i} key={`min-${i}`}>
            {i}
          </option>
        );
      })}
    </select>
  );

  useEffect(() => {
    if (clock.time == format) {
      setisAlarmBell(true)
      mySound.current.play();
    }
  }, [clock.time]);
  const stopAlarm = () => {
    setisAlarmBell(false)
    mySound.current.pause();
  };

  return { selectHour, selectMinute, stopAlarm, alarm, isAlarmBell };
}
export default useAlarmSetter;
