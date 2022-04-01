import { dijkstra, backtrack } from "./dijkstra";
import { getSize } from "../../Components/Grid/Grid";

/**
 *
 * @param {Array<Array<Number>>} grid binary grid of walls and paths
 * @param {String} gridSize 10x10, 16x16, 16x30
 * @param {Boolean} noSearch
 * @returns {Promise<Number>} the length of the shortest path
 */
export default async function displaySolution(
  grid,
  gridSize,
  noSearch = false,
  setColours,
  setColourAtCoordinate
) {
  const [rows, columns] = getSize(gridSize);
  //show walls
  const walledGrid = grid.map((row) =>
    row.map((square) => (square === 0 ? "bg-slate-700" : "bg-white"))
  );
  setColours(walledGrid);
  //show initial exploration
  const states = [...dijkstra(grid, [0, 0], [rows - 1, columns - 1])];
  if (!noSearch) {
    let forwardStep = 0;
    await new Promise((resolve) => {
      requestAnimationFrame(() => {
        nextDijkstraFrame(states, forwardStep, resolve, setColourAtCoordinate);
      });
    });
  }
  //show backtrack
  let backStep = 0;
  if (!states[states.length - 1].found) return backStep;
  await new Promise((resolve) => {
    const map = states[states.length - 1].previous;
    if (!map) return 0;
    const trace = backtrack(map, [0, 0], [rows - 1, columns - 1]);
    requestAnimationFrame(() => {
      nextBacktrackFrame(trace, backStep, resolve, setColourAtCoordinate);
    });
  }).then((step) => (backStep = step));

  return backStep;
}

/**
 * wrapper around Dijksta's algorithm. changes square component colour
 * @param {Array<Object>} states array of the algorithm progression
 * @param {Number} step the current index in states array
 * @param {Resolve} resolve resolution to indicate done
 */
function nextDijkstraFrame(states, step, resolve, setColourAtCoordinate) {
  const currentState = states[step];
  if (states.length === step - 1 || !currentState) {
    resolve();
    return;
  }
  setColourAtCoordinate(
    currentState.current[0],
    currentState.current[1],
    "bg-blue-500"
  );

  requestAnimationFrame(() => {
    nextDijkstraFrame(states, ++step, resolve, setColourAtCoordinate);
  });
}

/**
 *
 * @param {Array<Array<Number>>} trace the nodes on the final path
 * @param {Number} step current index in trace
 * @param {Resolve} resolve promise.resolve to indicate done
 * @returns
 */
function nextBacktrackFrame(trace, step, resolve, setColourAtCoordinate) {
  setColourAtCoordinate(...trace[step++], "bg-green-500");
  if (trace.length === step) {
    resolve(step);
    return;
  }
  requestAnimationFrame(() =>
    nextBacktrackFrame(trace, step, resolve, setColourAtCoordinate)
  );
}
