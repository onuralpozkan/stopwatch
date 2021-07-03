import React, { useState, useEffect } from 'react';
import { ArrowIcon } from '../../assets/icons/ArrowIcon';
import { AlarmContextConsumer } from '../context/alarmContext';
import uniqid from 'uniqid'
import {v4 as uuidv4} from 'uuid'
const AlarmBox = ({ idx }) => {
  const style = {
    displat: 'flex',
    flexFlow: 'column',
  };
  const mainStyle = {
    display: 'flex',
    flexFlow: 'column',
  };

  //console.log(form)
  const [clock, setClock] = useState({})
  const handleClock = (e) => {
      const {name,value,type, checked} = e.target
      type === "checkbox" ?
      setClock(p => ({...p,[name]: checked}) ) :
      setClock(p => ({...p,[name]: value}) )
  }
  console.log(clock);

  const [alarms, setAlarms] = useState([])
  const AlarmComp = ({id}) => (
    <form id={`form${id}`}>
      <fieldset>
        <label htmlFor="clock-1">Minute {id}: </label>
        <input type="number" max={10} min={0} name={`min${id}`} id={`min${id}`} value={clock[`min${id}`] } onChange={handleClock} />
        <label htmlFor="hour">Hour {id}: </label>
        <input type="number" max={10} min={0} name={`hr${id}`} id={`hr${id}`} value={clock[`hr${id}`]} onChange={handleClock} />
        <label htmlFor="setAlarm">Set</label>
        <input type="checkbox" name={`isSet${id}`} id={`isSet${id}`} value={clock[`isSet${id}`]} onChange={handleClock} />
      <span style={{cursor:'pointer',marginLeft:"10px"}} onClick={(e)=>removeAlarm(e,id)}>X</span>
      </fieldset>
    </form> 
  )
const removeAlarm = (e,id) => {
  setAlarms(p => (p.filter(i => i.id != id)))
} 
  const addAlarm = () => {
    let uuid = uniqid('alarm-')
    console.log("AddALrm uuid:");
    console.log(uuid);
    // let id =  uuidv4();
    // console.log(id);
    setAlarms(p => [...p, {
      comp:  <AlarmComp id={uuid}/>,
    id:uuid
    }])
  }
  return (
    <div style={mainStyle} id="alarmBox">
{/* 
     <form id="1">
        <fieldset>
          <label htmlFor="clock-1">Minute 1: </label>
          <input type="number" max={10} min={0} name="minute" id="minute" value={clock["minute"] || ""} onChange={handleClock} />
          <label htmlFor="hour">Hour 1: </label>
          <input type="number" max={10} min={0} name="hour" id="hour" value={clock["hour"] || ""} onChange={handleClock} />
        </fieldset>
      </form>
      <form id="2">
        <fieldset>
          <label htmlFor="clock-2">Minute 2: </label>
          <input type="number" max={10} min={0} name="min" id="min" value={clock["min"] || ""} onChange={handleClock} />
          <label htmlFor="hour">Hour 2: </label>
          <input type="number" max={10} min={0} name="hr" id="hr" value={clock["hr"] || ""} onChange={handleClock} />
        </fieldset>
      </form>  */}


      <div>{alarms.length > 0 ? alarms.map(i => <div key={i.id}>{i.comp}</div>) : "NO Al"}</div>

      <button onClick={addAlarm}>++</button>
     
      
     
      {/* <div className="first">
        <fieldset>
          <label htmlFor="min">Minutes: </label>
          <input
            type="number"
            name="min"
            id="first"
            maxLength={2}
            min={0}
            max={59}
            onChange={e => {
              const {name,value,id} = e.target
              setForm(p => ({...p, [id]:{...p[id],[name]:value}}))
            }}
            value={form.first.min}
          />
          <label htmlFor="hr">Hour: </label>
          <input
            type="number"
            name="hr"
            id="first"
            maxLength={2}
            min={0}
            max={23}
            onChange={e => {
              const {name,value,id} = e.target
              setForm(p => ({...p, [id]:{...p[id],[name]:value}}))
              console.log(form);
            }}
            value={form.first.hr}
          />
        </fieldset>
      </div> */}

      {/* <div className="second">
        <fieldset>
          <label htmlFor="min">Minutes: </label>
          <input
            type="number"
            name="min"
            id="second"
            maxLength={2}
            min={0}
            max={59}
            onChange={handleChange}
            value={form.second.min}
          />
          <label htmlFor="hr">Hour: </label>
          <input
            type="number"
            name="hr"
            id="second"
            maxLength={2}
            min={0}
            max={23}
            onChange={handleChange}
            value={form.second.hr}
          />
        </fieldset>
      </div> */}
    
    </div>
  );
};

export default AlarmBox;
