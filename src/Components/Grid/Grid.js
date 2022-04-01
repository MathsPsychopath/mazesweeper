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

export default function Grid({
  isDisplay,
  gridSize,
  numbers,
  gridReveals,
  colours,
  setColourAtCoordinate,
}) {
  const [rows, columns] = getSize(gridSize);
  const rowIndices = [...Array(rows).keys()];
  const colIndices = [...Array(columns).keys()];
  return (
    <div data-testid="grid" className="mx-auto">
      {rowIndices.map((r, i) => (
        <div className="flex" key={`row-${i}`}>
          {colIndices.map((c, j) => {
            if (isDisplay)
              return <Square rowNo={i} colNo={j} key={`col-${j}`} />;
            return (
              <Square
                rowNo={i}
                colNo={j}
                number={numbers[i][j]}
                reveal={gridReveals[i][j]}
                colour={colours[i][j]}
                setColourAtCoordinate={setColourAtCoordinate}
                key={`col-${j}`}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
