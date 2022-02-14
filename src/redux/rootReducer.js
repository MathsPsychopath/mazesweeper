import { combineReducers } from "redux";
import counterReducer from "./Counter/counter.reducer";
import gameReducer from "./GameState/game.reducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    game: gameReducer,
});

export default rootReducer;
