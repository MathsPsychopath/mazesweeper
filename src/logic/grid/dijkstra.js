/**
 *
 * @param {Array<Number>} node 2D tuple of the node's position in grid
 * @param {Array<Array<Number>>} grid the grid the node is inside of
 * @returns {Boolean} if the node is out of bounds from grid
 */
function checkOutOfBounds(node, grid) {
  const rows = grid.length;
  const columns = grid[0].length;
  const [rowPos, colPos] = node;
  return rowPos < 0 || rowPos >= rows || colPos < 0 || colPos >= columns;
}

/**
 *
 * @param {Array<Number>} node 2D tuple representing a location
 * @param {Array<Array<Number>>} grid the grid to look inside
 * @returns {Boolean} true if square is path in grid
 */
function isValidPath(node, grid) {
  return grid[node[0]][node[1]] > 0;
}

/**
 *
 * @param {Array<Number>} node 2D tuple of the node's position in grid
 * @param {Array<Array<Number>>} grid the grid the node is inside of
 * @param {Map<Array<Number>, Number>} visited key-value of previously visited nodes
 * @returns {Boolean} if node is considered valid
 */
function checkInvalidNode(node, grid, visited) {
  return (
    checkOutOfBounds(node, grid) ||
    visited.has(node.toString()) ||
    !isValidPath(node, grid)
  );
}

/**
 *
 * @param {Array<Number>} t1 2D tuple
 * @param {Array<Number>} t2 2D tuple
 * @returns {Array<Number>} sum of both tuples
 */
function addTuple(t1, t2) {
  return [t1[0] + t2[0], t1[1] + t2[1]];
}

/**
 *
 * @param {Array<Number>} startNode 2D tuple of the start node
 * @param {Array<Number>} endNode 2D tuple of the end node
 * @returns {Number} sum of x and y difference coordinates
 */
function distanceFromNode(startNode, endNode) {
  return endNode[0] - startNode[0] + endNode[1] - startNode[1];
}

/**
 *
 * @param {Array<Number>} array list of numbers to insert into
 * @param {Number} element item to insert
 * @returns {Number} index to insert
 */
function getSortedInsertPos(array, element) {
  let low = 0;
  let high = array.length;
  while (low < high) {
    const mid = (low + high) >>> 1;
    if (array[mid] < element) low = mid + 1;
    else high = mid;
  }
  return low;
}

function insertNeighbour(neighbours, node, start) {
  const neighboursDistances = neighbours.map((e) => distanceFromNode(e, start));
  const index = getSortedInsertPos(
    neighboursDistances,
    distanceFromNode(node, start)
  );
  neighbours.splice(index + 1, 0, node);
}

/**
 * adds adjacent valid paths to neighbours, and sets its backreference to the current node.
 * @param {Array<Number>} node 2D tuple of the node's position in grid
 * @param {Array<Array<Number>>} grid the grid the node is inside of
 * @param {Array<Array<Number>>} neighbours list of adjacent unvisited nodes
 * @param {Map<Array<Number>, Array<Number>>} previous reference to nearest previous
 * @param {Map<Array<Number>, Number>} visited key-value of visited nodes
 * @param {Array<Number>} start 2D tuple of the start
 */
function getPerimeter(node, grid, neighbours, visited, previous, start) {
  const offsets = [
    [1, 1],
    [1, 0],
    [1, -1],
    [0, 1],
    [0, -1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
  ];
  offsets.forEach((offset) => {
    const newNode = addTuple(offset, node);
    if (!checkInvalidNode(newNode, grid, visited)) {
      const stringNeighbours = neighbours.map((e) => e.toString());
      if (!stringNeighbours.includes(newNode.toString())) {
        insertNeighbour(neighbours, newNode, start);
        previous.set(newNode.toString(), node);
      }
    }
  });
}

function isValidEnd(end, grid) {
  if (!grid[end[0]]) return false;
  return grid[end[0]][end[1]] !== undefined && isValidPath(end, grid);
}

/**
 * @typedef {Object} Dijkstra
 * @property {Array<Array<Number>>} neighbours - nodes to consider next
 * @property {Map<Array<Number>, Array<Number>>} visited - nodes previously considered
 * @property {Map<Array<Number>, Array<Number>>} previous - distance from end
 * @property {Boolean} found - if the end node has been found in visited map
 */

/**
 * does the algorithm, considers nodes from bottom-right to top-left
 * @param {Array<Array<Number>>} grid - the grid of paths and walls
 * @param {Array<Number>} start - 2D tuple of coordinates of start
 * @param {Array<Number>} end - 2D tuple of coordinates of end
 * @returns {Array<Dijkstra>} array of objects with Array neighbours, Map visited, Map previous
 * @throws {Error} in case of invalid start/end square
 *
 */
export function dijkstra(grid, start, end) {
  if (!isValidPath(start, grid)) throw new Error("invalid starting square");
  if (!isValidEnd(end, grid)) throw new Error("invalid end square");
  const neighbours = [start]; //color yellow
  const visited = new Map();
  const previous = new Map([[start.toString(), null]]);
  const states = [];
  let i = 1;

  while (neighbours.length > 0) {
    const current = neighbours.shift();
    getPerimeter(current, grid, neighbours, visited, previous, start);
    visited.set(current.toString(), i++);
    states.push({
      //requires new references
      neighbours: neighbours.slice(),
      visited: new Map(visited),
      previous: new Map(previous),
      found: visited.has(end.toString()),
    });
    if (end[0] === current[0] && end[1] === current[1]) break;
  }

  return states;
}

/**
 * @typedef {Object} Backtrack
 * @property {Array<Array<Number>>} nodes - current node being considered
 * @property {Number} distance - distance from end
 */

/**
 * @requires dijkstra(grid, start, end) to be called
 * @param {Map<String, Array<Number>>} previous reference to nearest previous
 * @param {Array<Number>} start 2D tuple representing start
 * @param {Array<Number>} end 2D tuple representing end
 * @returns {Backtrack} object containing partial backtrack info
 */
export function backtrack(previous, start, end) {
  const values = [...previous.values()];
  if (!values.includes(null)) throw new Error("backtrack has no null value");
  if (previous.get(start.toString()) !== null)
    throw new Error("the start node does not have null value");
  if (previous.get(end.toString()) === undefined)
    throw new Error("the end node is not in backtrack map");
  if (values.length === 1) return { nodes: [start], distance: 0 };

  let distance = 1;
  const states = { nodes: [end] };
  let current = previous.get(end.toString());
  while (current !== null) {
    if (current === undefined) throw new Error("invalid backtrack map");
    distance++;
    states.nodes.unshift(current);
    current = previous.get(current.toString());
  }
  states.distance = distance;
  return states;
}
