import {
  SET_IN_GAME,
  SET_POST_GAME,
  SET_PRE_GAME,
  SET_POST_ANSWER,
  SET_PRE_ANSWER,
  CHANGE_POINT_AMOUNT,
  ZERO_POINTS,
  APPEND_SOLVE_TIME,
  RESET_SOLVE_TIMES,
  CHANGE_GRIDS_SOLVED,
  UPDATE_BASE_SCORE,
  UPDATE_PENALTIES,
  UPDATE_TIME_BONUS,
} from "./game.types";
import * as states from "./gamestates";

const INITIAL_STATE = {
  gameState: states.PRE_GAME,
  gridState: states.PRE_ANSWER,
  points: 0,
  solveTimes: [],
  gridsSolved: 0,
  baseScore: 0,
  penalties: 0,
  timeBonus: 0,
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
    case ZERO_POINTS:
      return {
        ...state,
        points: 0,
      };
    case APPEND_SOLVE_TIME:
      const solveTimes = state.solveTimes;
      return {
        ...state,
        solveTimes: [
          ...solveTimes,
          action.time - solveTimes[solveTimes.length - 1],
        ],
      };
    case RESET_SOLVE_TIMES:
      return {
        ...state,
        solveTimes: [],
      };
    case CHANGE_GRIDS_SOLVED:
      return {
        ...state,
        gridsSolved: action.grids,
      };
    case UPDATE_BASE_SCORE:
      return {
        ...state,
        baseScore: action.baseScore,
      };
    case UPDATE_PENALTIES:
      return {
        ...state,
        penalties: action.penalty,
      };
    case UPDATE_TIME_BONUS:
      return {
        ...state,
        timeBonus: action.timeBonus,
      };
    default:
      return state;
  }
};

export default reducer;
