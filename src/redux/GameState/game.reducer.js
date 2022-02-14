import * as types from "./game.types";
import * as states from "./gamestates";

const INITIAL_STATE = {
  gameState: states.PRE_GAME,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GAME_STATE:
      return {
        ...state,
        gameState: action.gameState,
      };
    default:
      return state;
  }
};

export default reducer;
