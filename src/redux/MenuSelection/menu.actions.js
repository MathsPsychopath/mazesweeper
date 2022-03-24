import {
  CHANGE_MODE,
  CHANGE_GRID_SIZE,
  SET_PUBLISHED,
  SET_PUBLISHING,
  SET_UNPUBLISHED,
} from "./menu.types";

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

export const setPublished = () => {
  return {
    type: SET_PUBLISHED,
  };
};

export const setPublishing = () => {
  return {
    type: SET_PUBLISHING,
  };
};

export const setUnpublished = () => {
  return {
    type: SET_UNPUBLISHED,
  };
};
