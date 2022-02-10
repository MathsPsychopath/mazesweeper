import { combineReducers } from "redux";
import gameReducer from "./GameState/game.reducer";
import timerReducer from "./Timer/timer.reducer";

const rootReducer = combineReducers({
  game: gameReducer,
  timer: timerReducer,
});

export default rootReducer;
