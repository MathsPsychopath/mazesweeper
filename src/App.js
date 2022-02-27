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
import { cycleGameState } from "./redux/GameState/game.actions";
import SelectGrid from "./Components/Pages/SelectGrid/SelectGrid";
import HowToPlay from "./Components/Pages/HowToPlay/HowToPlay";
import Landing from "./Components/Pages/Landing/Landing";
import { Routes, Route } from "react-router-dom";
import PlayGame from "./Components/Pages/PlayGame/PlayGame";

function App(props) {
  return (
    <div className="App">
      <HeaderFooter>
        <Routes>
          <Route path="play" element={<SelectGrid {...props} />} />
          <Route path="howtoplay" element={<HowToPlay {...props} />} />
          <Route path="playgame" element={<PlayGame {...props} />} />
          <Route index element={<Landing {...props} />} />
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
    gameState: state.game.gameState,
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
    cycleGameState: (gameState) => dispatch(cycleGameState(gameState)),
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(App);
