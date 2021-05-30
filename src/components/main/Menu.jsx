import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundClock from './bgImage/BackgroundClock';
import { AlarmIcon } from './icons/AlarmIcon';
import { CountdownIcon } from './icons/CountdownIcon';
import { StopwatchIcon } from './icons/StopwatchIcon';
const Menu = (props) => {
  return (
    <div className={`wa-menu-wrapper ${props.clsName}`}>
      {props.clsName === "wa-menu-mobile-wrapper" && <BackgroundClock />} 
      <div className="wa-menu">
        <Link to="/stopwatch">
          <StopwatchIcon />
        </Link>
        <Link to="/alarm">
          <AlarmIcon />
        </Link>
        <Link to="/countdown">
          <CountdownIcon />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
