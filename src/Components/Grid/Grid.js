import React from "react";
import Row from "./Row";

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
  return (
    <div data-testid="grid" className="mx-auto">
      {rowIndices.map((e, i) => {
        if (isDisplay)
          return (
            <Row isDisplay columns={columns} key={"row-" + i} rowIndex={i} />
          );
        return (
          <Row
            columns={columns}
            key={"row-" + i}
            rowNumbers={numbers[i]}
            rowIndex={i}
            rowReveals={gridReveals[i]}
            colours={colours[i]}
            setColourAtCoordinate={setColourAtCoordinate}
          />
        );
      })}
    </div>
  );
}
