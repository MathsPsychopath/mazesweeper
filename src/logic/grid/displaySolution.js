import { dijkstra, backtrack } from "./dijkstra";
import changeSquareColor from "./changeSquareColor";
import { getSize } from "../../Components/Grid/Grid";

/**
 *
 * @param {Array<Array<Number>>} grid binary grid of walls and paths
 * @param {String} gridSize 10x10, 16x16, 16x30
 * @param {Boolean} noSearch
 * @returns {Promise<Number>} the length of the shortest path
 */
export default function getSolutionWithAnimation(
  grid,
  gridSize,
  noSearch = false
) {
  let backStep = 0;
  const animationFrames = [];
  const [rows, columns] = getSize(gridSize);
  //show walls
  const initialFrame = [];
  grid.forEach((row, i) =>
    row.forEach(
      (s, j) =>
        grid[i][j] === 0 &&
        initialFrame.push({ node: [i, j], colour: "bg-slate-700" })
    )
  );
  animationFrames.push(initialFrame);
  //get dijkstra searching algorithm
  const states = [...dijkstra(grid, [0, 0], [rows - 1, columns - 1])];
  if (!noSearch) getDijkstraFrames(states, animationFrames);
  if (!states[states.length - 1].found) return [backStep, animationFrames];

  //get backtrack animation
  const map = states[states.length - 1].previous;
  const trace = backtrack(map, [0, 0], [rows - 1, columns - 1]);
  for (const node of trace) {
    backStep++;
    animationFrames.push([{ node, colour: "bg-green-500" }]);
  }

  return [backStep, animationFrames];
}

/**
 * gets animation frames for each state of the grid
 * @param {Array<Object>} states array of the algorithm progression
 * @param {Array<Array<{Node:Array<Number>, Colour:String}>>} frames array to add frames to
 */
function getDijkstraFrames(states, frames) {
  for (const currentState of states) {
    const colourChanges = [];
    for (const neighbour of currentState.neighbours) {
      colourChanges.push({ node: neighbour, colour: "bg-lime-400" });
    }
    colourChanges.push({ node: currentState.current, colour: "bg-blue-500" });
    frames.push(colourChanges);
  }
}
