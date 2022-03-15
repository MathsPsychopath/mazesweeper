import {
  SET_IN_GAME,
  SET_POST_GAME,
  SET_PRE_GAME,
  SET_POST_ANSWER,
  SET_PRE_ANSWER,
  CHANGE_POINT_AMOUNT,
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
