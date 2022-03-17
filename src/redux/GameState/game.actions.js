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

export const setInGame = () => {
  return {
    type: SET_IN_GAME,
  };
};

export const setPreGame = () => {
  return {
    type: SET_PRE_GAME,
  };
};

export const setPostGame = () => {
  return {
    type: SET_POST_GAME,
  };
};

export const setPreAnswer = () => {
  return {
    type: SET_PRE_ANSWER,
  };
};

export const setPostAnswer = () => {
  return {
    type: SET_POST_ANSWER,
  };
};

export const changePointAmount = (points) => {
  return {
    type: CHANGE_POINT_AMOUNT,
    newPoints: points,
  };
};

export const zeroPoints = () => {
  return {
    type: ZERO_POINTS,
  };
};

export const appendSolveTime = (time) => {
  return {
    type: APPEND_SOLVE_TIME,
    time,
  };
};

export const resetSolveTime = () => {
  return {
    type: RESET_SOLVE_TIMES,
  };
};

export const changeGridsSolved = (grids) => {
  return {
    type: CHANGE_GRIDS_SOLVED,
    grids,
  };
};

export const updateBaseScore = (baseScore) => {
  return {
    type: UPDATE_BASE_SCORE,
    baseScore,
  };
};

export const updatePenalties = (penalty) => {
  return {
    type: UPDATE_PENALTIES,
    penalty,
  };
};

export const updateTimeBonus = (timeBonus) => {
  return {
    type: UPDATE_TIME_BONUS,
    timeBonus,
  };
};
