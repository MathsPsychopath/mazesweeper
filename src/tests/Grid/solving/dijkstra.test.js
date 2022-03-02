import { dijkstra } from "../../../logic/grid/dijkstra";

describe("function dijkstra should be able to perform dijkstra's algorithm on a given matrix", () => {
  test("It should throw error if start is valid, but end is invalid", () => {
    const mat = [
      [1, 0],
      [0, 0],
    ];
    expect(() => dijkstra(mat, [0, 0], [1, 1])).toThrow();
  });

  test("It should throw an error for a 2x2 zero matrix", () => {
    const mat = [
      [0, 0],
      [0, 0],
    ];
    expect(() => {
      dijkstra(mat, [0, 0], [1, 1]);
    }).toThrow();
  });

  test("It should throw an error for a 1x1 zero matrix", () => {
    const mat = [[0]];
    expect(() => {
      dijkstra(mat, [0, 0], [1, 1]);
    }).toThrow();
  });

  test("It should throw an error for a 1x1 matrix with out of bounds end square 1", () => {
    const mat = [[1]];
    expect(() => {
      dijkstra(mat, [0, 0], [1, 1]);
    }).toThrow();
  });

  test("It should throw an error for a 1x1 matrix with out of bounds end square 2", () => {
    const mat = [[1]];
    expect(() => {
      dijkstra(mat, [0, 0], [0, 1]);
    }).toThrow();
  });

  test("It should throw an error for a 1x1 matrix with out of bounds end square 3", () => {
    const mat = [[1]];
    expect(() => {
      dijkstra(mat, [0, 0], [1, 0]);
    }).toThrow();
  });

  test("It should throw an error for a 16x30 zero matrix", () => {
    const mat = [];
    for (let i = 0; i < 16; i++) {
      mat.push(new Array(30).fill(0));
    }
    expect(() => {
      dijkstra(mat, [0, 0], [1, 1]);
    }).toThrow();
  });

  test("It should return 1 state with no neighbours, 1 visited, initial previous for 1x1 full matrix", () => {
    const mat = [[1]];

    const state = dijkstra(mat, [0, 0], [0, 0]);
    expect(state).toHaveLength(1);
    expect([...state[0].visited.keys()]).toHaveLength(1);
    expect(state[0].visited.get("0,0")).toBe(1);
    expect([...state[0].previous.keys()]).toHaveLength(1);
    expect(state[0].previous.get("0,0")).toBe(null);
    expect(state[0].neighbours).toHaveLength(0);
    expect(state[0].found).toBeTruthy();
  });

  test("It should return 2 states and data for a 2x2 matrix of ones", () => {
    const mat = [
      [1, 1],
      [1, 1],
    ];

    const states = dijkstra(mat, [0, 0], [1, 1]);
    expect(states).toHaveLength(2);
    expect(states[0].found).toBeFalsy();
    expect(states[0].neighbours).toEqual(
      expect.arrayContaining([
        [1, 0],
        [1, 1],
        [0, 1],
      ])
    );
    expect([...states[0].previous.keys()]).toHaveLength(4);
    expect([...states[0].visited.keys()]).toHaveLength(1);
    expect(states[1].found).toBeTruthy();
    expect(states[1].neighbours).toEqual(
      expect.arrayContaining([
        [1, 0],
        [0, 1],
      ])
    );
    expect([...states[1].previous.keys()]).toHaveLength(4);
    expect([...states[1].visited.keys()]).toHaveLength(2);

    expect(states[1].previous.get("1,1")).toEqual(
      expect.arrayContaining([0, 0])
    );
  });

  test("It should provide correct path 1", () => {
    const mat = [
      [1, 0, 0],
      [1, 0, 0],
      [1, 1, 1],
    ];
    const states = dijkstra(mat, [0, 0], [2, 2]);
    expect(states).toHaveLength(5);
    expect(states[4].found).toBeTruthy();
    const thirdNode = states[4].previous.get("2,2");
    expect(thirdNode).toEqual(expect.arrayContaining([2, 1]));

    const secondNode = states[4].previous.get(thirdNode.toString());
    expect(secondNode).toEqual(expect.arrayContaining([1, 0]));

    const firstNode = states[4].previous.get(secondNode.toString());
    expect(firstNode).toEqual(expect.arrayContaining([0, 0]));
  });

  test("It should provide correct path 2", () => {
    const mat = [
      [1, 1, 1, 0],
      [0, 1, 0, 1],
      [1, 0, 0, 1],
    ];
    const states = dijkstra(mat, [0, 0], [2, 3]);
    expect(states).toHaveLength(7);
    expect(states[6].found).toBeTruthy();

    const fourth = states[6].previous.get([2, 3].toString());
    expect(fourth).toEqual(expect.arrayContaining([1, 3]));

    const third = states[6].previous.get(fourth.toString());
    expect(third).toEqual(expect.arrayContaining([0, 2]));

    const second = states[6].previous.get(third.toString());
    expect(second).toEqual(expect.arrayContaining([1, 1]));
    //since all distances are 1, program chooses any equivalent path of same length

    const first = states[6].previous.get(second.toString());
    expect(first).toEqual(expect.arrayContaining([0, 0]));
  });

  test("It should provide valid states even when no path to exit exist 1", () => {
    const mat = [
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ];
    const states = dijkstra(mat, [0, 0], [4, 3]);
    expect(states).toHaveLength(3);
    expect(states[2].found).toBeFalsy();

    expect(states[2].previous.get("0,1")).toEqual(
      expect.arrayContaining([0, 0])
    );
    expect(states[2].previous.get("1,1")).toEqual(
      expect.arrayContaining([0, 0])
    );
  });

  test("It should provide valid states even when no path to exit exist 2", () => {
    const mat = [
      [1, 0, 0],
      [0, 0, 1],
    ];
    const states = dijkstra(mat, [0, 0], [1, 2]);
    expect(states).toHaveLength(1);
    expect(states[0].found).toBeFalsy();
  });

  test("It should be able to find exit when start is not at [0,0] 1", () => {
    const mat = [
      [0, 1],
      [1, 1],
    ];
    const states = dijkstra(mat, [0, 1], [1, 0]);
    expect(states).toHaveLength(3);
    expect(states[2].found).toBeTruthy();
  });

  test("It should be able to find exit when start is not at [0,0] 2", () => {
    const mat = [
      [1, 0, 0, 1],
      [1, 1, 0, 1],
      [1, 0, 1, 1],
      [1, 0, 0, 1],
    ];
    const states = dijkstra(mat, [0, 3], [3, 0]);
    expect(states).toHaveLength(9);
    expect(states[8].found).toBeTruthy();
  });

  test("It should not be able to find exit when start is not at [0,0], but end is valid 3", () => {
    const mat = [
      [1, 0, 0, 0, 1],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [1, 0, 0, 0, 1],
    ];
    const states = dijkstra(mat, [3, 2], [0, 0]);
    expect(states).toHaveLength(4);
    expect(states[3].found).toBeFalsy();
  });
});
