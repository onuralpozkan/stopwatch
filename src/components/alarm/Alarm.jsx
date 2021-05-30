import { useState, useEffect, useRef } from 'react';
import SoundFile from '../../assets/sounds/digital-beep.wav';
import useClock from '../utils/useClock';
import './Alarm.css';
import useAlarmSetter from './useAlarmSetter';
import useSetter from './useSetter';
const Alarm = () => {
  const { clock } = useClock();
  const mySound = useRef();
  const hourInput = useRef();
  //const sound = <audio ref={mySound} src={SoundFile}/>
  const {  stopAlarm, isAlarmBell,selector } = useAlarmSetter(
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
        {/* <div className="wa-alarm-set">
          <span>Set Alarm:</span>
          <br />
          {selectHour}
          <span> : </span>
          {selectMinute}
        </div> */}
        {alarmBtn}
      </div>
      <div className="wa-alarm-box">
        {selector(0,23,"hours")} <span className="dots">:</span> {selector(0,59,"minutes")}
      </div>
      <audio ref={mySound} src={SoundFile} />
    </div>
  );
};

export default Alarm;
