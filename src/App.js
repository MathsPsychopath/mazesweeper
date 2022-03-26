import "./App.css";

import { useDispatch } from "react-redux";
import {
  changeMode,
  changeGrid,
  setUnpublished,
} from "./redux/MenuSelection/menu.actions";
import HeaderFooter from "./Components/Common/HeaderFooter";
import { setTimer } from "./redux/Timer/timer.actions";
import {
  setInGame,
  setPostGame,
  setPreAnswer,
  setPreGame,
  zeroPoints,
} from "./redux/GameState/game.actions";
import SelectGrid from "./Components/Pages/SelectGrid/SelectGrid";
import HowToPlay from "./Components/Pages/HowToPlay/HowToPlay";
import Landing from "./Components/Pages/Landing/Landing";
import { Routes, Route, useLocation } from "react-router-dom";
import PlayGame from "./Components/Pages/PlayGame/PlayGame";
import Results from "./Components/Pages/Results/Results";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  switch (location.pathname) {
    case "/results":
      dispatch(setPostGame());
      dispatch(setTimer(150));
      dispatch(changeMode("QuickMode"));
      dispatch(changeGrid("10x10"));
      break;
    case "/playgame":
      dispatch(zeroPoints());
      dispatch(setInGame());
      dispatch(setUnpublished());
      break;
    default:
      dispatch(setPreGame());
      dispatch(setPreAnswer());
  }
  return (
    <div className="App">
      <HeaderFooter>
        <Routes>
          <Route path="play" element={<SelectGrid />} />
          <Route path="howtoplay" element={<HowToPlay />} />
          <Route path="playgame" element={<PlayGame />} />
          <Route path="results" element={<Results />} />
          <Route path="leaderboard" element={null} />
          <Route index element={<Landing />} />
        </Routes>
      </HeaderFooter>
    </div>
  );
}

export default App;
