import { combineReducers } from "redux";
import timerReducer from "./Timer/timer.reducer";

const rootReducer = combineReducers({
  timer: timerReducer,
});

export default rootReducer;
