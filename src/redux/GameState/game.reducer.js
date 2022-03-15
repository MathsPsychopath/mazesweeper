import {
  SET_IN_GAME,
  SET_POST_GAME,
  SET_PRE_GAME,
  SET_POST_ANSWER,
  SET_PRE_ANSWER,
  CHANGE_POINT_AMOUNT,
} from "./game.types";
import * as states from "./gamestates";

const INITIAL_STATE = {
  gameState: states.PRE_GAME,
  gridState: states.PRE_ANSWER,
  points: 0,
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
    case SET_POST_ANSWER:
      return {
        ...state,
        gridState: states.POST_ANSWER,
      };
    case SET_PRE_ANSWER:
      return {
        ...state,
        gridState: states.PRE_ANSWER,
      };
    case CHANGE_POINT_AMOUNT:
      return {
        ...state,
        points:
          action.newPoints + state.points <= 0
            ? 0
            : action.newPoints + state.points,
      };
    default:
      return state;
  }
};

export default reducer;
