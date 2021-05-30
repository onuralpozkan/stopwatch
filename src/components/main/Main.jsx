import React, { useState } from 'react';
import Menu from './Menu';
import './Main.css';
import DatePart from './dateAndClock/DatePart';
import BackgroundClock from './bgImage/BackgroundClock';
import Countdown from '../countdown/Countdown';
import { AlarmIcon } from './icons/AlarmIcon';
import { StopwatchIcon } from './icons/StopwatchIcon';
import { CountdownIcon } from './icons/CountdownIcon';
import { MobileBgClock } from './bgImage/MobileBgClock';
import { Link, NavLink } from 'react-router-dom';

const Main = () => {
  const [mobileMenuClass, setMobileMenuClass] = useState('');

  const [isHoverAlarm, setIsHoverAlarm] = useState(false);
  const [isHoverStopwatch, setIsHoverStopwatch] = useState(false);
  const [isHoverCountdown, setIsHoverCountdown] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setMobileMenuClass((prevState) => (prevState === '' ? '--open' : ''));
    setIsOpen(!isOpen);
  };
  return (
    <div className="wa-main">
      <div className="wa-title">
        <h1>
          Time App <br className="wa-br" />
          &amp;
          <br className="wa-br" /> Cal
        </h1>
      </div>

      <div className="wa-bg-wrapper">
        <BackgroundClock />
        <div className={`wa-alarm-icon wa-alarm-icon${mobileMenuClass}`}>
          <Link to="/alarm">
            <AlarmIcon />
          </Link>
        </div>
        <div
          className={`wa-stopwatch-icon wa-stopwatch-icon${mobileMenuClass}`}
        >
          <Link to="/stopwatch">
            <StopwatchIcon />
          </Link>
        </div>
        <div
          className={`wa-countdown-icon wa-countdown-icon${mobileMenuClass}`}
        >
          <Link to="/countdown">
            <CountdownIcon />
          </Link>
        </div>
      </div>
      <div className="wa-btn-wrapper">
        <button onClick={handleMenu}>
          <span className="line line-1"></span>
          <span className="line line-2"></span>
        </button>
      </div>
      <nav className="wa-nav">
        <ul>
          <li onMouseEnter={()=>setIsHoverAlarm(true)} onMouseLeave={()=>setIsHoverAlarm(false)}>
            <Link to="/alarm">
              <AlarmIcon id={isHoverAlarm ? "alarmEar" : ""}/>
            </Link>
          </li>
          <li onMouseEnter={()=>setIsHoverStopwatch(true)} onMouseLeave={()=>setIsHoverStopwatch(false)}>
            <Link to="/stopwatch">
              <StopwatchIcon id={isHoverStopwatch ? "stopwatchEar" : ""}/>
            </Link>
          </li>
          <li onMouseEnter={()=>setIsHoverCountdown(true)} onMouseLeave={()=>setIsHoverCountdown(false)}>
            <Link to="/countdown" >
              <CountdownIcon id={isHoverCountdown ? "countdownArrow" : ""}/>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Main;
