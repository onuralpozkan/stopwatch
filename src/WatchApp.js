import './WatchApp.css';
import Main from './components/main/Main';
import { Route, Switch } from 'react-router-dom';
import Stopwatch from './components/stopwatch/Stopwwatch';
import Countdown from './components/countdown/Countdown';
import Alarm from './components/alarm/Alarm';

function WatchApp() {

  return (
    <div className="wa-top-level-container">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/stopwatch" component={Stopwatch} />
        <Route path="/countdown" component={Countdown} />
        <Route path="/alarm" component={Alarm} />
      </Switch>
    </div>
  );
}

export default WatchApp;
