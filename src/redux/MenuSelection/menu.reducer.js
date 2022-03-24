import {
  CHANGE_MODE,
  CHANGE_GRID_SIZE,
  SET_PUBLISHED,
  SET_PUBLISHING,
  SET_UNPUBLISHED,
  PUBLISHED,
  PUBLISHING,
  UNPUBLISHED,
} from "./menu.types";

const INITIAL_STATE = {
  mode: "QuickMode",
  gridSize: "10x10",
  publishState: UNPUBLISHED,
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
    case SET_PUBLISHED:
      return {
        ...state,
        publishState: PUBLISHED,
      };
    case SET_PUBLISHING:
      return {
        ...state,
        publishState: PUBLISHING,
      };
    case SET_UNPUBLISHED:
      return {
        ...state,
        publishState: UNPUBLISHED,
      };
    default:
      return state;
  }
}
