import { useState, useEffect, useRef } from 'react';
import SoundFile from '../../assets/sounds/digital-beep.wav';
import useClock from '../utils/useClock';
import './Alarm.css';
import uniqid from 'uniqid';
import SingleAlarm from './SingleAlarm';
const Alarm = () => {
  const [alarms, setAlarms] = useState([]);

  const addAlarm = () => {
    let uuid = uniqid('alarm-');
    setAlarms((p) => [
      ...p,
      {
        component: <SingleAlarm id={uuid} removeAlarm={removeAlarm} />,
        id: uuid,
      },
    ]);
  };

  const removeAlarm = (e, id) => {
    setAlarms((p) => p.filter((i) => i.id != id));
  };
  const alarmBox = alarms.length > 0 ? alarms.map((i) => i.component) : 'Add alarm to set alarm :)' 
  return (
    <div className="wa-alarm-wrapper">
      <h1 className="wa-alarm-title">Alarm</h1>
      <div className="wa-alarms-container">
        {alarmBox}
      </div>
      <button onClick={addAlarm} className="wa-btn wa-btn-circular">
        <i className="la la-plus"></i>
      </button>
    </div>
  );
};

export default Alarm;
