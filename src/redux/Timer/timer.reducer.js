import { SET_TIMER, DECREMENT, SET_INFINITE, PAUSE } from "./timer.types";

const INITIAL_STATE = {
  time: 0,
  paused: true,
  isInfinite: false,
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
    case SET_INFINITE:
      return {
        ...state,
        isInfinite: !state.isInfinite,
      };
    case PAUSE:
      return {
        ...state,
        paused: !state.paused,
      };
    default:
      return state;
  }
};

export default reducer;
