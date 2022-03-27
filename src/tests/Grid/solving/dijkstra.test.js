import { dijkstra } from "../../../logic/grid/dijkstra";

describe("function dijkstra should be able to perform dijkstra's algorithm on a given matrix", () => {
  test("It should throw error if start is valid, but end is invalid", () => {
    const mat = [
      [1, 0],
      [0, 0],
    ];
    expect(() => {
      const steps = dijkstra(mat, [0, 0], [1, 1]).next();
    }).toThrow();
  });

  test("It should throw an error for a 2x2 zero matrix", () => {
    const mat = [
      [0, 0],
      [0, 0],
    ];
    expect(() => {
      const steps = dijkstra(mat, [0, 0], [1, 1]).next();
    }).toThrow();
  });

  test("It should throw an error for a 1x1 zero matrix", () => {
    const mat = [[0]];
    expect(() => {
      const steps = dijkstra(mat, [0, 0], [1, 1]).next();
    }).toThrow();
  });

  test("It should throw an error for a 1x1 matrix with out of bounds end square 1", () => {
    const mat = [[1]];
    expect(() => {
      const steps = dijkstra(mat, [0, 0], [1, 1]).next();
    }).toThrow();
  });

  test("It should throw an error for a 1x1 matrix with out of bounds end square 2", () => {
    const mat = [[1]];
    expect(() => {
      const steps = dijkstra(mat, [0, 0], [0, 1]).next();
    }).toThrow();
  });

  test("It should throw an error for a 1x1 matrix with out of bounds end square 3", () => {
    const mat = [[1]];
    expect(() => {
      const steps = dijkstra(mat, [0, 0], [1, 0]).next();
    }).toThrow();
  });

  test("It should throw an error for a 16x30 zero matrix", () => {
    const mat = [];
    for (let i = 0; i < 16; i++) {
      mat.push(new Array(30).fill(0));
    }
    expect(() => {
      const steps = dijkstra(mat, [0, 0], [1, 1]).next();
    }).toThrow();
  });

  test("It should return 1 state with no neighbours, 1 visited, initial previous for 1x1 full matrix", () => {
    const mat = [[1]];
    const states = [];
    for (const state of dijkstra(mat, [0, 0], [0, 0])) {
      states.push(state);
    }
    expect(states).toHaveLength(1);
    expect(states[0].neighbours).toHaveLength(0);
    expect(states[0].found).toBeTruthy();
    expect(states[0].current).toEqual(expect.arrayContaining([0, 0]));
    expect(states[0].current).toHaveLength(2);

    expect(states[0].previous.size).toBe(1);
    expect(states[0].previous.get("0,0")).toBe(null);
  });

  test("It should return 4 states and data for a 2x2 matrix of ones", () => {
    const mat = [
      [1, 1],
      [1, 1],
    ];
    const states = [];
    for (const state of dijkstra(mat, [0, 0], [1, 1])) {
      states.push(state);
    }
    expect(states).toHaveLength(4);
    expect(states[0].found).toBeFalsy();
    expect(states[0].neighbours).toEqual(
      expect.arrayContaining([
        [1, 0],
        [0, 1],
        [1, 1],
      ])
    );
    expect(states[1].found).toBeFalsy();
    expect(states[1].current.toString()).toBe("0,1");

    expect(states[2].found).toBeFalsy();
    expect(states[2].current.toString()).toBe("1,0");

    expect(states[3].found).toBeTruthy();
    expect(states[3].current.toString()).toBe("1,1");

    expect(states[3].previous.get("1,0").toString()).toBe("0,0");
    expect(states[3].previous.get("1,0").toString()).toBe("0,0");
    expect(states[3].previous.get("1,1").toString()).toBe("0,0");
  });

  test("It should provide correct path 1", () => {
    const mat = [
      [1, 0, 0],
      [1, 0, 0],
      [1, 1, 1],
    ];
    const states = [];
    for (const state of dijkstra(mat, [0, 0], [2, 2])) {
      states.push(state);
    }
    expect(states).toHaveLength(5);
    expect(states[4].found).toBeTruthy();

    expect(states[0].current.toString()).toBe("0,0");
    expect(states[1].current.toString()).toBe("1,0");
    expect(states[2].current.toString()).toBe("2,0");
    expect(states[3].current.toString()).toBe("2,1");
    expect(states[4].current.toString()).toBe("2,2");

    expect(states[4].previous.get("0,0")).toBe(null);
    expect(states[4].previous.get("1,0").toString()).toBe("0,0");
    expect(states[4].previous.get("2,1").toString()).toBe("1,0");
    expect(states[4].previous.get("2,0").toString()).toBe("1,0");
    expect(states[4].previous.get("2,2").toString()).toBe("2,1");
  });

  test("It should provide correct path 2", () => {
    const mat = [
      [1, 1, 1, 0],
      [0, 1, 0, 1],
      [1, 0, 0, 1],
    ];
    const states = [];
    for (const state of dijkstra(mat, [0, 0], [2, 3])) {
      states.push(state);
    }
    expect(states).toHaveLength(7);
    expect(states[6].found).toBeTruthy();

    expect(states[0].current.toString()).toBe("0,0");
    expect(states[1].current.toString()).toBe("0,1");
    expect(states[2].current.toString()).toBe("1,1");
    expect(states[3].current.toString()).toBe("0,2");
    expect(states[4].current.toString()).toBe("2,0");
    expect(states[5].current.toString()).toBe("1,3");
    expect(states[6].current.toString()).toBe("2,3");

    expect(states[6].previous.get("0,0")).toBe(null);
    expect(states[6].previous.get("1,1").toString()).toBe("0,0");
    expect(states[6].previous.get("0,1").toString()).toBe("0,0");
    expect(states[6].previous.get("2,0").toString()).toBe("1,1");
    expect(states[6].previous.get("0,2").toString()).toBe("1,1");
    expect(states[6].previous.get("1,3").toString()).toBe("0,2");
    expect(states[6].previous.get("2,3").toString()).toBe("1,3");
  });

  test("It should provide valid states even when no path to exit exist 1", () => {
    const mat = [
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ];
    const states = [];
    for (const state of dijkstra(mat, [0, 0], [4, 3])) {
      states.push(state);
    }
    expect(states).toHaveLength(3);
    expect(states[2].found).toBeFalsy();

    expect(states[0].current.toString()).toBe("0,0");
    expect(states[1].current.toString()).toBe("0,1");
    expect(states[2].current.toString()).toBe("1,1");
  });

  test("It should provide valid states even when no path to exit exist 2", () => {
    const mat = [
      [1, 0, 0],
      [0, 0, 1],
    ];
    const states = [];
    for (const state of dijkstra(mat, [0, 0], [1, 2])) {
      states.push(state);
    }
    expect(states).toHaveLength(1);
    expect(states[0].found).toBeFalsy();
    expect(states[0].current.toString()).toBe("0,0");
  });

  test("It should be able to find exit when start is not at [0,0] 1", () => {
    const mat = [
      [0, 1],
      [1, 1],
    ];
    const states = [];
    for (const state of dijkstra(mat, [0, 1], [1, 0])) {
      states.push(state);
    }
    expect(states).toHaveLength(2);
    expect(states[1].found).toBeTruthy();
    expect(states[0].current.toString()).toBe("0,1");
    expect(states[1].current.toString()).toBe("1,0");

    expect(states[1].previous.get("0,1")).toBe(null);
    expect(states[1].previous.get("0,0")).toBe(undefined);
    expect(states[1].previous.get("1,1").toString()).toBe("0,1");
    expect(states[1].previous.get("1,0").toString()).toBe("0,1");
  });

  test("It should be able to find exit when start is not at [0,0] 2", () => {
    const mat = [
      [1, 0, 0, 1],
      [1, 1, 0, 1],
      [1, 0, 1, 1],
      [1, 0, 0, 1],
    ];
    const states = [];
    for (const state of dijkstra(mat, [0, 3], [3, 0])) {
      states.push(state);
    }
    expect(states).toHaveLength(10);
    expect(states[9].found).toBeTruthy();
    expect(states[0].current.toString()).toBe("0,3");
    expect(states[1].current.toString()).toBe("1,3");
    expect(states[2].current.toString()).toBe("2,2");
    expect(states[3].current.toString()).toBe("2,3");
    expect(states[4].current.toString()).toBe("1,1");
    expect(states[5].current.toString()).toBe("3,3");
    expect(states[6].current.toString()).toBe("0,0");
    expect(states[7].current.toString()).toBe("1,0");
    expect(states[8].current.toString()).toBe("2,0");
    expect(states[9].current.toString()).toBe("3,0");

    expect(states[9].previous.get("0,3")).toBe(null);
    expect(states[9].previous.get("1,3").toString()).toBe("0,3");
    expect(states[9].previous.get("2,3").toString()).toBe("1,3");
    expect(states[9].previous.get("2,2").toString()).toBe("1,3");
    expect(states[9].previous.get("3,3").toString()).toBe("2,3");
    expect(states[9].previous.get("1,1").toString()).toBe("2,2");
    expect(states[9].previous.get("0,0").toString()).toBe("1,1");
    expect(states[9].previous.get("1,0").toString()).toBe("1,1");
    expect(states[9].previous.get("2,0").toString()).toBe("1,1");
    expect(states[9].previous.get("3,0").toString()).toBe("2,0");
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
    const states = [];
    for (const state of dijkstra(mat, [3, 2], [0, 0])) {
      states.push(state);
    }
    expect(states).toHaveLength(4);
    expect(states[3].found).toBeFalsy();
  });
});
