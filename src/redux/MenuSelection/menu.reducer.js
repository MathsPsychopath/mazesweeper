import { CHANGE_MODE, CHANGE_GRID_SIZE } from "./menu.types";

const INITIAL_STATE = {
  mode: "QuickMode",
  gridSize: "10x10",
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_MODE:
      return {
        ...state,
        mode: action.newMode,
      };
    case CHANGE_GRID_SIZE:
      return {
        ...state,
        gridSize: action.newGrid,
      };
    default:
      return state;
  }
}
