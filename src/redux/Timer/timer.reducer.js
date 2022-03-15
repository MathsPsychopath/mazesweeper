import {
  SET_TIMER,
  DECREMENT,
  PAUSE,
  ELAPSE,
  ZERO_ELAPSED,
} from "./timer.types";

const INITIAL_STATE = {
  time: 150,
  paused: true,
  elapsed: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TIMER:
      return {
        ...state,
        time: action.newTime,
      };
    case DECREMENT:
      return {
        ...state,
        time: state.time - 1,
      };
    case PAUSE:
      return {
        ...state,
        paused: !state.paused,
      };
    case ELAPSE:
      return {
        ...state,
        elapsed: state.elapsed + 1,
      };
    case ZERO_ELAPSED:
      return {
        ...state,
        elapsed: 0,
      };
    default:
      return state;
  }
};

export default reducer;
