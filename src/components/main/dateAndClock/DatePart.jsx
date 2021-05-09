import useClock from '../../utils/useClock';
import useDate from '../../utils/useDate';
const DatePart = () => {
  const { clock } = useClock();
  const { date, day } = useDate();
  return (
    <div className="wa-date-wrapper">
      <div className="wa-date">
        <p className="wa-clock">{clock.time}</p>
        <p className="wa-day">{date}</p>
        <p className="wa-weekday">{day}</p>
      </div>
    </div>
  );
};
export default DatePart;
