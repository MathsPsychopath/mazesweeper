import { dijkstra, backtrack } from "./dijkstra";
import changeSquareColor from "./changeSquareColor";
import { getSize } from "../../Components/Grid/Grid";

/**
 *
 * @param {Array<Array<Number>>} grid binary grid of walls and paths
 * @param {String} gridSize 10x10, 16x16, 16x30
 * @returns {Promise<Number>} the length of the shortest path
 */
export default async function displaySolution(grid, gridSize) {
  const [rows, columns] = getSize(gridSize);
  //show walls
  grid.forEach((row, i) =>
    row.forEach(
      (s, j) =>
        grid[i][j] === 0 &&
        changeSquareColor([i, j], ["bg-white", "bg-orange-500"], "bg-slate-700")
    )
  );
  //show initial exploration
  const states = [...dijkstra(grid, [0, 0], [rows - 1, columns - 1])];
  let forwardStep = 0;
  await new Promise((resolve) => {
    window.requestAnimationFrame(() => {
      nextDijkstraFrame(states, forwardStep, resolve);
    });
  });
  //show backtrack
  let backStep = 0;
  await new Promise((resolve) => {
    const map = states[states.length - 1].previous;
    if (!map) return 0;
    const trace = backtrack(map, [0, 0], [rows - 1, columns - 1]);
    window.requestAnimationFrame(() => {
      nextBacktrackFrame(trace, backStep, resolve);
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
async function nextDijkstraFrame(states, step, resolve) {
  setTimeout(() => {
    const currentState = states[step];
    if (states.length === step - 1 || !currentState) {
      resolve();
      return;
    }
    for (const neighbour of currentState.neighbours) {
      changeSquareColor(
        neighbour,
        ["bg-white", "bg-orange-500"],
        "bg-lime-400"
      );
    }
    changeSquareColor(currentState.current, "bg-lime-400", "bg-blue-500");

    window.requestAnimationFrame(() => {
      nextDijkstraFrame(states, ++step, resolve);
    });
  }, 50);
}

/**
 *
 * @param {Array<Array<Number>>} trace the nodes on the final path
 * @param {Number} step current index in trace
 * @param {Resolve} resolve promise.resolve to indicate done
 * @returns
 */
function nextBacktrackFrame(trace, step, resolve) {
  changeSquareColor(trace[step++], "bg-blue-500", "bg-green-500");
  if (trace.length === step) {
    resolve(step);
    return;
  }
  window.requestAnimationFrame(() => nextBacktrackFrame(trace, step, resolve));
}
