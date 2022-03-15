import { SET_TIMER, DECREMENT, PAUSE, ELAPSE } from "./timer.types";

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

export const pauseTimer = () => {
  return {
    type: PAUSE,
  };
};

export const elapsed = () => {
  return {
    type: ELAPSE,
  };
};
