import { getSize } from "../../Components/Grid/Grid";

/**
 *
 * @param {String} gridSize 10x10, 16x16, or 16x30
 * @returns matrix of the given grid size of random binary
 */
export default function generateGrid(gridSize) {
  const [rows, columns] = getSize(gridSize);
  console.log(gridSize);
  const grid = [...new Array(rows)].map((row) =>
    [...new Array(columns)].map((square) => (Math.random() > 0.5 ? 1 : 0))
  );
  grid[0][0] = 1;
  grid[rows - 1][columns - 1] = 1;
  return grid;
}
