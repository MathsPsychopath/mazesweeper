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

/**
 *
 * @param {String} props.gridSize
 * @param {Boolean} props.isDisplay
 * @param {Array<Array<Number>>} props.numbers
 */
export default function Grid(props) {
  const [rows, columns] = getSize(props.gridSize);
  const rowIndices = [...Array(rows).keys()];
  return (
    <div data-testid="grid" className="mx-auto">
      {rowIndices.map((e, i) => {
        return (
          <Row
            columns={columns}
            key={"row-" + i}
            isDisplay={props.isDisplay}
            numbers={props.numbers ? props.numbers[i] : undefined}
            rowNo={i}
          />
        );
      })}
    </div>
  );
}
