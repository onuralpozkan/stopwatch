import { useState, useEffect } from 'react';
const DatePart = () => {
  const t = new Date();
  const h = t.getHours();
  const m = t.getMinutes();
  const d = t.getDate();
  const mt = t.getMonth();
  const wd = t.getDay();
  
  const [hour, setHour] = useState(null)
  const [min, setMin] = useState(null)
  const [clock, setClock] = useState(null)
  useEffect(()=>{
    setHour(t.getHours())
    setMin(t.getMinutes())
    setClock(hour + ':' + min)
  },[min,hour])
  const months = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
  ];
  const days = [
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
    'Pazar',
  ];
  const month = months[mt];
  const date = d + ' ' + month;
  const day = days[wd];
  return (
    <div className="wa-date-wrapper">
      <div className="wa-date">
        <p className="wa-clock">{clock}</p>
        <p className="wa-day">{date}</p>
        <p className="wa-weekday">{day}</p>
      </div>
    </div>
  );
};
export default DatePart;
