import { SET_IN_GAME, SET_POST_GAME, SET_PRE_GAME } from "./game.types";
import * as states from "./gamestates";

const INITIAL_STATE = {
  gameState: states.PRE_GAME,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_IN_GAME:
      return {
        ...state,
        gameState: states.IN_GAME,
      };
    case SET_PRE_GAME:
      return {
        ...state,
        gameState: states.PRE_GAME,
      };
    case SET_POST_GAME:
      return {
        ...state,
        gameState: states.POST_GAME,
      };
    default:
      return state;
  }
};

export default reducer;
