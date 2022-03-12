import { backtrack, dijkstra } from "../../../logic/grid/dijkstra";

describe("generator backtrack should yield the nodes in path & distance in reverse given valid map", () => {
  test("it should throw if the backtrack map has no null value", () => {
    const prev = new Map([["1,1", [1, 1]]]);
    expect(() => {
      for (const t of backtrack(prev, null, null)) continue;
    }).toThrow();
  });

  test("it should check that the backtrack map has at least 1 null value", () => {
    const prev = new Map([["1,1", null]]);
    expect(() => backtrack(prev, [1, 1], [1, 1])).not.toThrow();
  });

  test("it should check that the start is one of the null values", () => {
    const prev = new Map([
      ["1,1", null],
      ["1,0", [1, 1]],
    ]);
    expect(() => backtrack(prev, [1, 1], [1, 0])).not.toThrow();
  });

  test("it should throw if start is not a null value", () => {
    const prev = new Map([
      ["1,1", null],
      ["1,0", [1, 1]],
    ]);
    expect(() => {
      for (const k of backtrack(prev, [1, 0], [1, 1])) continue;
    }).toThrow();
  });

  test("it should yield the correct path and distance for given map 1", () => {
    const prev = new Map([
      ["0,0", null],
      ["1,0", [0, 0]],
      ["0,1", [0, 0]],
      ["1,1", [0, 1]],
    ]);
    let result = backtrack(prev, [0, 0], [1, 1]);
    expect(result.distance).toBe(3);
    expect(result.nodes).toHaveLength(3);
    expect(result.nodes[0]).toEqual(expect.arrayContaining([0, 0]));
    expect(result.nodes[1]).toEqual(expect.arrayContaining([0, 1]));
    expect(result.nodes[2]).toEqual(expect.arrayContaining([1, 1]));
  });

  test("it should yield the correct path and distance for given map 2", () => {
    const map = [
      [1, 1, 0, 1],
      [0, 0, 1, 0],
      [1, 0, 0, 1],
      [0, 1, 1, 0],
    ];
    const states = [];
    for (const state of dijkstra(map, [0, 0], [2, 0])) {
      states.push(state);
    }
    const { previous } = states[states.length - 1];
    const result = backtrack(previous, [0, 0], [2, 0]);
    expect(result.distance).toBe(7);
    expect(result.nodes).toEqual(
      expect.arrayContaining([
        [0, 0],
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 2],
        [3, 1],
        [2, 0],
      ])
    );
  });

  test("it should throw an error if the start is not in the previous map", () => {
    const prev = new Map([["1,1", null]]);
    expect(() => backtrack(prev, [0, 0], [1, 1])).toThrow();
  });

  test("it should throw an error if the end is not in the previous map 1", () => {
    const prev = new Map([["0,0", null]]);
    expect(() => {
      for (const k of backtrack(prev, [0, 0], [1, 1])) continue;
    }).toThrow();
  });

  test("It should throw an error if the end is not in the previous map 2", () => {
    const mat = [
      [0, 1, 0, 1, 1],
      [0, 1, 0, 1, 1],
      [0, 1, 0, 1, 1],
      [0, 1, 0, 1, 1],
      [0, 1, 0, 1, 1],
      [0, 1, 0, 1, 1],
      [0, 1, 0, 1, 1],
    ];
    const states = [];
    for (const state of dijkstra(mat, [4, 3], [0, 1])) {
      states.push(state);
    }
    const previous = states[states.length - 1].previous;
    expect(() => {
      for (const k of backtrack(previous, [4, 3], [0, 1])) continue;
    }).toThrow();
  });
});
