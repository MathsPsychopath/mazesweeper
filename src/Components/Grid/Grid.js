import React from "react";
import Row from "./Row";

const SIZES = ["10x10", "16x16", "16x30"];
const DIMENSIONS = [
  [10, 10],
  [16, 16],
  [16, 30],
];

export function getSize(size) {
  const index = SIZES.indexOf(size);
  return DIMENSIONS[index === -1 ? 0 : index];
}

export default function Grid(props) {
  const [rows, columns] = getSize(props.gridSize);
  const rowIndices = [...Array(rows).keys()];
  return (
    <div data-testid="grid">
      {rowIndices.map((e, i) => {
        return (
          <Row
            columns={columns}
            key={"row-" + i}
            isDisplay={props.isDisplay}
            shows={props.shows ? props.shows[i] : false}
            numbers={props.numbers ? props.numbers[i] : undefined}
            rowNo={i}
          />
        );
      })}
    </div>
  );
}
