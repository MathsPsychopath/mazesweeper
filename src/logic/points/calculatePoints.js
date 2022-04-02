import isValidDist from "./isValidDist";
import getInitialPoints from "./getInitialPoints";
import getDeduction from "./getDeduction";

const calculatePoints = (distance, input, gridSize, mode) => {
  const offset = distance - parseInt(input, 10);
  const valid = isValidDist(offset, mode);
  let points = valid ? getInitialPoints(gridSize) : getDeduction(offset, mode);
  return [points, valid];
};

export default calculatePoints;
