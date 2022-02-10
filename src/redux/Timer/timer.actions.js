import { SET_TIMER, DECREMENT } from "./timer.types";

export const setTimer = (newTime) => {
  return {
    type: SET_TIMER,
    newTime,
  };
};

export const decrementTimer = () => {
  return {
    type: DECREMENT,
  };
};
