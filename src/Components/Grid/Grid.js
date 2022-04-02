import React from "react";
import Square from "./Square";

const SIZES = ["10x10", "16x16", "16x30"];
const DIMENSIONS = [
  [10, 10],
  [16, 16],
  [16, 30],
];

/**
 *
 * @param {String} size 10x10, 16x16, 16x30
 * @returns {Array<Number>} dimensions of grid
 */
export function getSize(size) {
  const index = SIZES.indexOf(size);
  return DIMENSIONS[index === -1 ? 0 : index];
}

/**
 *
 * @param {String} props.gridSize
 * @param {Boolean} props.isDisplay
 * @param {Array<Array<Number>>} props.numbers
 */
export default function Grid({
  gridSize,
  gridReveals,
  numbers,
  grid,
  isDisplay,
}) {
  const [rows, columns] = getSize(gridSize);
  const rowIndices = [...Array(rows).keys()];
  const colIndices = [...Array(columns).keys()];
  return (
    <div className="mx-auto">
      {rowIndices.map((e, i) => (
        <div className="flex" key={`row-${i}`}>
          {colIndices.map((f, j) => {
            if (isDisplay) return <Square isDisplay key={`col-${j}`} />;
            return (
              <Square
                reveal={gridReveals[i][j]}
                number={numbers[i][j]}
                gridValue={grid[i][j]}
                key={`col-${j}`}
                id={`row-${i}-col-${j}`}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
