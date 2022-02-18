import { combineReducers } from "redux";
import gameReducer from "./GameState/game.reducer";
import timerReducer from "./Timer/timer.reducer";
import menuReducer from "./MenuSelection/menu.reducer";

const rootReducer = combineReducers({
  game: gameReducer,
  timer: timerReducer,
  menu: menuReducer,
});

export default rootReducer;
