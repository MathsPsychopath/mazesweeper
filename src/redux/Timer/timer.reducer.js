import { SET_TIMER, DECREMENT, PAUSE } from "./timer.types";

const INITIAL_STATE = {
  time: 0,
  paused: true,
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
    default:
      return state;
  }
};

export default reducer;
