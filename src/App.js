import "./App.css";

import { connect } from "react-redux";
import { changeMode, changeGrid } from "./redux/MenuSelection/menu.actions";
import HeaderFooter from "./Components/Common/HeaderFooter";
import {
  setTimer,
  decrementTimer,
  pauseTimer,
} from "./redux/Timer/timer.actions";
import {
  setInGame,
  setPostGame,
  setPreGame,
} from "./redux/GameState/game.actions";
import SelectGrid from "./Components/Pages/SelectGrid/SelectGrid";
import HowToPlay from "./Components/Pages/HowToPlay/HowToPlay";
import Landing from "./Components/Pages/Landing/Landing";
import { Routes, Route, useLocation } from "react-router-dom";
import PlayGame from "./Components/Pages/PlayGame/PlayGame";

function App(props) {
  const location = useLocation();
  //need to migrate to redux hooks or will switch each timer tick
  switch (location.pathname) {
    case "/results":
      props.setPostGame();
      props.setTimer(150);
      props.changeMode("QuickMode"); //reset to default
      props.changeGrid("10x10");
      break;
    case "/playgame":
      props.setInGame();
      break;
    default:
      props.setPreGame();
  }
  return (
    <div className="App">
      <HeaderFooter>
        <Routes>
          <Route path="play" element={<SelectGrid {...props} />} />
          <Route path="howtoplay" element={<HowToPlay {...props} />} />
          <Route path="playgame" element={<PlayGame {...props} />} />
          <Route path="results" element={null} />
          <Route path="leaderboard" element={null} />
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
    gridSize: state.menu.gridSize,
    mode: state.menu.mode,
    gameState: state.game.gameState,
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    setTimer: (time) => dispatch(setTimer(time)),
    decrementTimer: () => dispatch(decrementTimer()),
    pauseTimer: () => dispatch(pauseTimer()),
    changeMode: (newMode) => dispatch(changeMode(newMode)),
    changeGrid: (newGrid) => dispatch(changeGrid(newGrid)),
    setInGame: () => dispatch(setInGame()),
    setPreGame: () => dispatch(setPreGame()),
    setPostGame: () => dispatch(setPostGame()),
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(App);
