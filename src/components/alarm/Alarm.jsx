import { useState, useEffect, useRef } from 'react';
import SoundFile from '../../assets/sounds/digital-beep.wav';
import useClock from '../utils/useClock';
import './Alarm.css';
import useAlarmSetter from './useAlarmSetter';
const Alarm = () => {
  const { clock } = useClock();
  const mySound = useRef();
  //const sound = <audio ref={mySound} src={SoundFile}/>
  const { selectHour, selectMinute, stopAlarm, isAlarmBell } = useAlarmSetter(
    mySound,
    clock
  );
  const alarmBtn = isAlarmBell ? (
    <div className="wa-alarm-stop">
      <button onClick={stopAlarm}>Stop Alarm</button>
    </div>
  ) : null;
  return (
    <div className="wa-alarm-wrapper">
      <div className="wa-alarm-title">
        <h1>
          <h1>Alarm Clock</h1>
        </h1>
      </div>
      <div className="wa-alarm-current-time">
        <h3>{clock.time}</h3>
      </div>
      <div className="wa-alarm-box">
        <div className="wa-alarm-set">
          <span>Set Alarm:</span>
          <br />
          {selectHour}
          <span> : </span>
          {selectMinute}
        </div>
        {alarmBtn}
      </div>
      <audio ref={mySound} src={SoundFile} />
    </div>
  );
};

export default Alarm;
