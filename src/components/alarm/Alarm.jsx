import { useState } from 'react';
import './Alarm.css';
import uniqid from 'uniqid';
import SingleAlarm from './SingleAlarm';
import { Link } from 'react-router-dom';
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
  const alarmBox =
    alarms.length > 0
      ? alarms.map((i) => <div key={i.id}>{i.component}</div>)
      : 'Add alarm to set alarm :)';
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const openConfig = () => {
    setIsConfigOpen(!isConfigOpen);
  };
  return (
    <div className="wa-alarm-wrapper">
      <div className="wa-alarm-top">
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
      <h1 className="wa-pages-title">Alarm</h1>
      <div className="wa-alarms-container">{alarmBox}</div>
      <button onClick={addAlarm} className="wa-btn wa-btn-circular">
        <i className="la la-plus"></i>
      </button>
    </div>
  );
};

export default Alarm;
