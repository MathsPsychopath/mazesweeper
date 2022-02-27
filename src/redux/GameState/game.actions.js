import { SET_IN_GAME, SET_POST_GAME, SET_PRE_GAME } from "./game.types";

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
