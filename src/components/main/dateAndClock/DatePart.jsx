import useClock from '../../utils/useClock';
import useDate from '../../utils/useDate';
const DatePart = () => {
  const { clock } = useClock();
  const { date, day } = useDate();
  return (
    <div className="wa-date-wrapper">
      <div className="wa-date">
        <p className="wa-clock">Time</p>
        <p className="wa-day">&amp;</p>
        <p className="wa-weekday">Calendar</p>
      </div>
    </div>
  );
};
export default DatePart;
