import { useState, useEffect, useRef } from 'react';
import SoundFile from '../../assets/sounds/digital-beep.wav'
import useClock from '../utils/useClock';
import './Alarm.css'
const SingleAlarm = ({id, removeAlarm}) => {
  const [alarm, setAlarm] = useState({
    hours: '01',
    minutes: '00',
  });
  const {clock} = useClock()
  const mySound = useRef()
  //const sound = <audio ref={mySound} src={SoundFile}/>
  const [minutes, setMinutes] = useState([]);
  const [hours, setHours] = useState([]);
  const options = () => {
    for (let i = 0; i < 61; i++) {
      setMinutes((p) => [...p, i]);
    }
    for (let i = 0; i < 25; i++) {
      setHours((p) => [...p, i]);
    }
  };
  useEffect(() => {
    options();
  }, []);

  const handleTime = (e) => {
    const { name, value } = e.target;
    setAlarm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const selectHour = (
    <select name="hours" onChange={handleTime}>
      {hours.map((i) => {
        if (i < 10) {
          i = '0' + i;
        }
        return (
          <option value={i} key={`hou-${i}`} >
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
  const format = alarm.hours + ":" + alarm.minutes
  const [isAlarmSet, setIsAlarmSet] = useState(false);
  const [isAlarmPlay, setIsAlarmPlay] = useState(false)
  useEffect(() => {
    if(isAlarmSet && clock.time == format){
      mySound.current.play();
      setIsAlarmPlay(true)
  }
  }, [clock.time, isAlarmSet])

  const stopAlarm = () => {
    mySound.current.pause();
    setIsAlarmPlay(false);
  }
  const stopBtn = isAlarmPlay && <button className="wa-btn wa-btn-stop wa-btn-inline" onClick={stopAlarm}>STOP</button>;
  return (
    <div className="wa-alarm-box">
      <span className="wa-set-alarm">{selectHour} <span className="wa-twodots">:</span> {selectMinute}</span>
      <input type="checkbox" name="cb-alarm" id="cb-alarm" onChange={()=>setIsAlarmSet(!isAlarmSet)} />
      <button className="wa-btn wa-btn-delete wa-btn-inline" style={{position:"relative"}} onClick={(e)=>removeAlarm(e,id)}>
        <i className="las la-trash"></i>
      </button>
      {stopBtn}
      <audio ref={mySound} src={SoundFile}/>
    </div>
  );
};

export default SingleAlarm;
