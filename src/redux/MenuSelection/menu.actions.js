import { CHANGE_MODE, CHANGE_GRID_SIZE } from "./menu.types";

export const changeGrid = (newGrid) => {
  return {
    type: CHANGE_GRID_SIZE,
    newGrid,
  };
};

export const changeMode = (newMode) => {
  return {
    type: CHANGE_MODE,
    newMode,
  };
};
