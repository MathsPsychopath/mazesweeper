import { CHANGE_DIFFICULTY, CHANGE_GRID_SIZE } from "./menu.types";

const INITIAL_STATE = {
  difficulty: "QuickMode",
  gridSize: "10x10",
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_DIFFICULTY:
      return {
        ...state,
        difficulty: action.newDiff,
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
