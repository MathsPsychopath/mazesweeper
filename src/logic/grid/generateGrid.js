import { getSize } from "../../Components/Grid/Grid";

/**
 *
 * @param {String} gridSize 10x10, 16x16, or 16x30
 * @returns matrix of the given grid size of random numbers
 */
export function generateGrid(gridSize, forReveals = false) {
  const [rows, columns] = getSize(gridSize);
  const grid = [...new Array(rows)].map((row) =>
    [...new Array(columns)].map((square) => {
      if (forReveals) return Math.random() > 0.75 ? 1 : 0;
      return Math.random() > 0.4 ? 1 : 0;
    })
  );
  grid[0][0] = forReveals ? 0 : 1;
  grid[rows - 1][columns - 1] = forReveals ? 0 : 1;
  return grid;
}

/**
 * call after generateGrid
 * @param {Array<Array<Number>>} grid
 * @returns matrix of numbers representing adjacent paths to element
 */
export function generateAdjacency(grid) {
  const [rows, columns] = [grid.length, grid[0].length];
  const adjacency = [];
  for (let row = 0; row < rows; row++) {
    const adjRow = [];
    for (let col = 0; col < columns; col++) {
      let paths = 0;
      if (grid[row + 1]) {
        if (grid[row + 1][col + 1] === 1) paths++;
        if (grid[row + 1][col] === 1) paths++;
        if (grid[row + 1][col - 1] === 1) paths++;
      }
      if (grid[row][col + 1] === 1) paths++;
      if (grid[row][col - 1] === 1) paths++;
      if (grid[row - 1]) {
        if (grid[row - 1][col + 1] === 1) paths++;
        if (grid[row - 1][col] === 1) paths++;
        if (grid[row - 1][col - 1] === 1) paths++;
      }
      adjRow.push(paths);
    }
    adjacency.push(adjRow);
  }
  return adjacency;
}
