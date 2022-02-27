import { CYCLE_GAME_STATE, SET_GAME_STATE } from "./game.types";

export const cycleGameState = () => {
  return {
    type: CYCLE_GAME_STATE,
  };
};

export const setGameState = (gameState) => {
  return {
    type: SET_GAME_STATE,
    gameState,
  };
};
