import { dijkstra, backtrack } from "./dijkstra";
import changeSquareColor from "./changeSquareColor";
import { getSize } from "../../Components/Grid/Grid";

/**
 * wrapper around Dijksta's algorithm. changes square component colour
 * @param {Array<Array<Number>>} grid matrix of walls and paths
 * @param {String} gridSize 10x10, 16x16 or 16x30
 * @returns {Number} distance from [0,0] to the bottom right corner of grid
 */
export default function displaySolution(grid, gridSize) {
  const [rows, columns] = getSize(gridSize);
  let states = dijkstra(grid, [0, 0], [rows - 1, columns - 1]);
  grid.forEach((row, i) =>
    row.forEach(
      (s, j) =>
        grid[i][j] === 0 &&
        changeSquareColor([i, j], "bg-white", "bg-slate-700")
    )
  );
  for (const state of states) {
    const visited = [...state.visited.keys()].map((point) => point.split(","));
    const neighbours = state.neighbours;
    document
      .querySelectorAll(
        neighbours.map((point) => `#row-${point[0]}-col-${point[1]}`)
      )
      .forEach((node) => {
        setTimeout(() => {
          changeSquareColor(node, ["bg-white", "bg-orange-500"], "bg-lime-400");
        }, 100);
      });
    document
      .querySelectorAll(
        visited.map((point) => `#row-${point[0]}-col-${point[1]}`)
      )
      .forEach((node) => {
        setTimeout(() => {
          changeSquareColor(node, "bg-lime-400", "bg-blue-500");
        }, 100);
      });
  }
  let trace;
  try {
    trace = backtrack(
      states[states.length - 1].previous,
      [0, 0],
      [rows - 1, columns - 1]
    );
  } catch (error) {
    return 0;
  }
  setTimeout(() => {
    trace.nodes.forEach((point) => {
      const node = document.getElementById(`#row-${point[0]}-col-${point[1]}`);
      node.remove("bg-blue-500");
      node.add("bg-green-500");
    });
  }, 500);
  return trace.distance;
}
