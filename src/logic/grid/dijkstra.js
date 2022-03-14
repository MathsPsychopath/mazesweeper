/**
 * A 2 element array representing position in grid
 * @typedef {(Array<Number>|String)} Node
 */
/**
 * A 2D array of binary (0|1)
 * @typedef {Array<Array<(1|0)>>} Grid
 */
/**
 * A Map stating whether a node has been visited or not
 * @typedef {Map<Node, Boolean>} VisitedMap
 */
/**
 * A Map showing the tentative distance the start and any node
 * @typedef {Map<Node, Number>} DistanceMap
 */
/**
 * A Map showing the predecessor of a given node
 * @typedef {Map<Node, Node>} PreviousMap
 */
/**
 * An Array of nodes adjacent to some current node
 * @typedef {Array<Node>} NeighboursArray
 */
/**
 * An Object representing a Dijkstra's Algorithm step
 * @typedef {Object} UnfoundState
 * @property {NeighboursArray} neighbours
 * @property {Node} currentNode
 * @property {false} found
 */
/**
 * An Object containing the final step in Dijkstra's Algorithm
 * @typedef {Object} FoundState
 * @property {NeighboursArray} neighbours
 * @property {Node} currentNode
 * @property {true} found
 * @property {PreviousMap} previous
 */

/**
 *
 * @param {Node} t1
 * @param {Node} t2
 * @returns {Boolean} is same node?
 */
function isSameNode(t1, t2) {
  return t1[0] === t2[0] && t1[1] === t2[1];
}

/**
 *
 * @param {Node} t1
 * @param {Node} t2
 * @returns {Node} sum of provided nodes
 */
function addTuple(t1, t2) {
  return [t1[0] + t2[0], t1[1] + t2[1]];
}

/**
 *
 * @param {Node} node
 * @param {Grid} grid
 * @returns {Boolean} is out of bounds?
 */
function isOutOfBounds(node, grid) {
  return grid[node[0]] === undefined || grid[node[0]][node[1]] === undefined;
}

/**
 *
 * @param {Node} node
 * @param {Grid} grid
 * @returns {Boolean} is valid path?
 */
function isValidPath(node, grid) {
  return !isOutOfBounds(node, grid) && grid[node[0]][node[1]] > 0;
}

/**
 *
 * @param {Node} node
 * @param {VisitedMap} visited
 * @returns {Boolean} was visited?
 */
function wasVisited(node, visited) {
  return visited.get(node.toString()) === true;
}

/**
 *
 * @param {VisitedMap} visited
 * @param {DistanceMap} distances
 * @returns {(null|Node)} null if there are no valid unvisited nodes, or the next node
 */
function getSmallestUnvisitedNode(visited, distances) {
  const unvisitedNodes = [...distances.entries()]
    .filter(
      (entry) => !visited.get(entry[0]) && distances.get(entry[0]) < Infinity
    )
    .sort((a, b) => a[1] - b[1]);
  if (!unvisitedNodes.length) return null;
  return unvisitedNodes[0][0].split(",").map((point) => Number(point));
}

/**
 *
 * @param {VisitedMap} visited
 * @param {DistanceMap} distances
 * @param {PreviousMap} previous
 * @param {Node} currentNode
 * @param {Grid} grid
 * @param {NeighboursArray} neighbours
 */
function considerNeighbours(
  visited,
  distances,
  currentNode,
  grid,
  previous,
  neighbours
) {
  const offsets = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];
  const distance = distances.get(currentNode.toString()) + 1;
  for (const offset of offsets) {
    const potentialNode = addTuple(offset, currentNode);
    if (
      !isValidPath(potentialNode, grid) ||
      wasVisited(potentialNode, visited) ||
      distances.get(potentialNode.toString()) < distance
    )
      continue;
    distances.set(potentialNode.toString(), distance);
    previous.set(potentialNode.toString(), currentNode);
    neighbours.push(potentialNode);
  }
  visited.set(currentNode.toString(), true);
}

/**
 *
 * @param {Array<Array<Number>>} grid random binary grid
 * @param {Array<Number>} start tuples representing position in grid
 * @param {Array<Number>} end tuples representing position in grid
 * @yields {UnfoundState|FoundState}
 * @returns {PreviousMap}
 */
export function* dijkstra(grid, start, end) {
  if (!isValidPath(start, grid)) throw new Error("invalid starting square");
  if (!isValidPath(end, grid)) throw new Error("invalid end square");
  //initialise all nodes as unvisited
  const visited = new Map();
  const distances = new Map();
  const previous = new Map([[start.toString(), null]]);
  grid.forEach((row, i) => {
    row.forEach((square, j) => {
      square === 1 &&
        (() => {
          visited.set(`${i},${j}`, false);
          distances.set(`${i},${j}`, Infinity);
        })();
    });
  });
  //set initial node
  distances.set(start.toString(), 0);
  let current = start;
  while (current) {
    const neighbours = []; //just for display
    if (isSameNode(current, end)) {
      yield {
        neighbours: [...neighbours],
        current,
        found: true,
        previous,
      };
      return previous; //supports non-for...of
    }
    considerNeighbours(visited, distances, current, grid, previous, neighbours);
    yield {
      neighbours: [...neighbours],
      current,
      found: false,
    };
    //console.log(current);
    current = getSmallestUnvisitedNode(visited, distances);
  }
}

/**
 *
 * @param {PreviousMap} previous
 * @param {Node} start
 * @param {Node} end
 * @returns {Array<Node>}
 */
export function backtrack(previous, start, end) {
  const values = [...previous.values()];
  if (!values.includes(null)) throw new Error("backtrack has no null value");
  if (previous.get(start.toString()) !== null)
    throw new Error("the start node does not have null value");
  if (previous.get(end.toString()) === undefined)
    throw new Error("the end node is not in backtrack map");
  if (values.length === 1) return { nodes: [start], distance: 0 };

  const states = [end];
  let current = previous.get(end.toString());
  while (current !== null) {
    if (current === undefined) throw new Error("invalid backtrack map");
    states.push(current);
    current = previous.get(current.toString());
  }
  return states;
}
