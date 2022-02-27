import { CYCLE_GAME_STATE, SET_GAME_STATE } from "./game.types";
import * as states from "./gamestates";

const INITIAL_STATE = {
  gameState: states.PRE_GAME,
};

const cycle = (currentGameState, state) => {
  let currentPos = states.GAME_STATES.indexOf(state.gameState) + 1;
  if (currentPos >= 3) currentPos = 0;
  return states.GAME_STATES[currentPos];
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CYCLE_GAME_STATE:
      return {
        ...state,
        gameState: cycle(state.gameState, state),
      };
    case SET_GAME_STATE:
      return {
        ...state,
        gameState: action.gameState,
      };
    default:
      return state;
  }
};

export default reducer;
