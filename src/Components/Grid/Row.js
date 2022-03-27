import React from "react";
import Square from "./Square";

const COLUMN_SIZES = [10, 16, 30];

/**
 *
 * @param {Number} columns
 * @returns {10|16|30} 10 is default
 */
function getColumns(columns) {
  const index = COLUMN_SIZES.indexOf(columns);
  return COLUMN_SIZES[index === -1 ? 0 : index];
}

/**
 *
 * @param {Number} props.columns
 * @param {Boolean} props.isDisplay
 * @param {Array<Number>} props.numbers
 * @param {Number} props.rowNo
 */
export default function Row(props) {
  return (
    <div data-testid="row" className="flex">
      {[...Array(getColumns(props.columns)).keys()].map((e, i) => (
        <Square
          key={"col-" + i}
          isDisplay={props.isDisplay}
          number={props.numbers ? props.numbers[i] : undefined}
          rowNo={props.rowNo}
          colNo={i}
          isWall={!props.isDisplay && props.row[i] === 0}
          reveal={props.reveal ? props.reveal[i] : false}
        />
      ))}
    </div>
  );
}
