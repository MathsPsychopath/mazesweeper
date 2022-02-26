import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";
import { changeMode, changeGrid } from "./redux/MenuSelection/menu.actions";
import HeaderFooter from "./Components/Common/HeaderFooter";
import {
  setTimer,
  decrementTimer,
  setInfinite,
  pauseTimer,
} from "./redux/Timer/timer.actions";
import SelectGrid from "./Components/Pages/SelectGrid/SelectGrid";
import HowToPlay from "./Components/Pages/HowToPlay/HowToPlay";
import { Routes, Route } from "react-router-dom";

function BoilerPlate(props) {
  return (
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
  );
}

function App(props) {
  return (
    <div className="App">
      <HeaderFooter>
        <Routes>
          <Route path="play" element={<SelectGrid {...props} />} />
          <Route path="howtoplay" element={<HowToPlay {...props} />} />
          <Route index element={<BoilerPlate {...props} />} />
        </Routes>
      </HeaderFooter>
    </div>
  );
}

const mapsStateToProps = (state) => {
  return {
    time: state.timer.time,
    paused: state.timer.paused,
    isInfinite: state.timer.isInfinite,
    gridSize: state.menu.gridSize,
    mode: state.menu.mode,
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    setTimer: (time) => dispatch(setTimer(time)),
    decrementTimer: () => dispatch(decrementTimer()),
    setInfinite: () => dispatch(setInfinite()),
    pauseTimer: () => dispatch(pauseTimer()),
    changeMode: (newMode) => dispatch(changeMode(newMode)),
    changeGrid: (newGrid) => dispatch(changeGrid(newGrid)),
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(App);
