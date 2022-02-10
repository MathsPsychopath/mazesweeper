import { SET_TIMER, DECREMENT } from "./timer.types";

const INITIAL_STATE = {
  time: 0,
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
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default reducer;
