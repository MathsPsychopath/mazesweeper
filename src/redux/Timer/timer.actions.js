import { SET_TIMER, DECREMENT, SET_INFINITE, PAUSE } from "./timer.types";

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

export const setInfinite = () => {
  return {
    type: SET_INFINITE,
  };
};

export const pauseTimer = () => {
  return {
    type: PAUSE,
  };
};
