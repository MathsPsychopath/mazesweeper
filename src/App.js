import { useDispatch } from "react-redux";
import {
  changeMode,
  changeGrid,
  setUnpublished,
} from "./redux/MenuSelection/menu.actions";
import HeaderFooter from "./Components/Common/page/HeaderFooter";
import { setTimer } from "./redux/Timer/timer.actions";
import {
  changeGridsSolved,
  resetSolveTime,
  setInGame,
  setPostGame,
  setPreAnswer,
  setPreGame,
  updateBaseScore,
  updatePenalties,
  updateTimeBonus,
  zeroPoints,
} from "./redux/GameState/game.actions";
import SelectGrid from "./Components/Pages/SelectGrid/SelectGrid";
import HowToPlay from "./Components/Pages/HowToPlay/HowToPlay";
import Landing from "./Components/Pages/Landing/Landing";
import { Routes, Route, useLocation } from "react-router-dom";
import PlayGame from "./Components/Pages/PlayGame/PlayGame";
import Results from "./Components/Pages/Results/Results";
import ModalRoot from "./Components/Common/ModalRoot";
import Leaderboard from "./Components/Pages/Leaderboard/Leaderboard";
import "./styles.css";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  switch (location.pathname) {
    case "/results":
      dispatch(setPostGame());
      dispatch(setTimer(150));
      dispatch(changeMode("QuickMode"));
      break;
    case "/playgame":
      dispatch(zeroPoints());
      dispatch(setInGame());
      dispatch(setUnpublished());
      dispatch(resetSolveTime());
      dispatch(changeGridsSolved(0));
      dispatch(updateBaseScore(0));
      dispatch(updatePenalties(0));
      dispatch(updateTimeBonus(0));
      break;
    default:
      dispatch(setPreGame());
      dispatch(setPreAnswer());
      dispatch(changeGrid("10x10"));
  }
  return (
    <div className="text-center">
      <ModalRoot />
      <HeaderFooter>
        <Routes>
          <Route path="play" element={<SelectGrid />} />
          <Route path="howtoplay" element={<HowToPlay />} />
          <Route path="playgame" element={<PlayGame />} />
          <Route path="results" element={<Results />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route index element={<Landing />} />
        </Routes>
      </HeaderFooter>
    </div>
  );
}

export default App;
