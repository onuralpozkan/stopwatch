import React,{useState} from 'react';
import DatePart from './Date';
import Menu from './Menu';
import './Main.css';

const Main = () => {
  const [mobileMenuClass, setMobileMenuClass] = useState("")
  const handleMenu = () => {
      setMobileMenuClass(prevState => prevState === "" ? "wa-menu-mobile-wrapper" : "")
  }
  return (
    <div className="wa-home-wrapper">
      <DatePart />
      <Menu clsName={mobileMenuClass} />
      <div className="wa-menu-btn">
        <button onClick={handleMenu}>+</button>
      </div>
    </div>
  );
};

export default Main;
