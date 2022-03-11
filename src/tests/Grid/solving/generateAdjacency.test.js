import { generateAdjacency } from "../../../logic/grid/generateGrid";

describe("generateAdjacency should return a matrix representing all adjacent paths to each element of a grid", () => {
  test("It should return a zero matrix with a zero grid matrix", () => {
    const grid = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    const adj = generateAdjacency(grid);
    expect(adj).toHaveLength(3);
    expect(adj[0]).toHaveLength(7);
    for (const row of grid) {
      for (const e of row) expect(e).toBe(0);
    }
  });

  test("It should return a matrix of all 8s with a full matrix of 1s", () => {
    const grid = [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
    ];
    const exp = [
      [3, 5, 5, 5, 5, 5, 5, 3],
      [5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5, 5, 5, 5],
      [3, 5, 5, 5, 5, 5, 5, 3],
    ];
    const adj = generateAdjacency(grid);
    expect(adj).toHaveLength(8);
    expect(adj[0]).toHaveLength(8);
    for (let i = 0; i < 8; i++)
      expect(adj[i]).toEqual(expect.arrayContaining(exp[i]));
  });

  test("It should return the correct matrix 1", () => {
    const grid = [
      [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0],
      [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0],
      [1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0],
      [1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1],
    ];
    const correct = [
      [0, 3, 3, 3, 4, 3, 4, 3, 1, 2, 3, 2, 2],
      [2, 5, 4, 4, 4, 4, 6, 7, 4, 3, 3, 3, 3],
      [1, 4, 3, 5, 5, 5, 4, 4, 2, 4, 4, 4, 3],
      [1, 3, 2, 2, 2, 2, 3, 4, 2, 3, 1, 3, 1],
    ];
    const adj = generateAdjacency(grid);
    expect(adj).toHaveLength(4);
    expect(adj[0]).toHaveLength(13);
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 13; j++) {
        expect(adj[i][j]).toBe(correct[i][j]);
      }
    }
  });
});
