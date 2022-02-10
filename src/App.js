import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";
import {
  setTimer,
  decrementTimer,
  setInfinite,
  pauseTimer,
} from "./redux/Timer/timer.actions";
/*
import {
  Switch,
  useRouteMatch,
  Route
} from "react-router-dom";*/

const tempFunc = (props) => {
  if (props.time === 0) return;
  const timer = setInterval(() => {
    if (props.time === 0) {
      clearInterval(timer);
      props.pauseTimer();
      return;
    }
    props.pauseTimer();
    props.decrementTimer();
  }, 1000);
};

function App(props) {
  //props.setTimer(150);
  //props.pauseTimer();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapsStateToProps = (state) => {
  return {
    time: state.timer.time,
    paused: state.timer.paused,
    isInfinite: state.timer.isInfinite,
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    setTimer: (time) => dispatch(setTimer(time)),
    decrementTimer: () => dispatch(decrementTimer()),
    setInfinite: () => dispatch(setInfinite()),
    pauseTimer: () => dispatch(pauseTimer()),
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(App);
