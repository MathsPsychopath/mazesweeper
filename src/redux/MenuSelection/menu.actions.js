import { CHANGE_DIFFICULTY, CHANGE_GRID_SIZE } from "./menu.types";

export const changeGrid = (newGrid) => {
  return {
    type: CHANGE_GRID_SIZE,
    newGrid,
  };
};

export const changeDifficulty = (newDiff) => {
  return {
    type: CHANGE_DIFFICULTY,
    newDiff,
  };
};
