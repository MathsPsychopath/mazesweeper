import { GAME_STATE } from "./game.types";

export const switchGameState = (gameState) => {
  return {
    type: GAME_STATE,
    gameState,
  };
};
