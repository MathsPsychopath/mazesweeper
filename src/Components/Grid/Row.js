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

export default function Row({
  isDisplay,
  columns,
  rowNumbers,
  rowIndex,
  rowReveals,
  colours,
  setColourAtCoordinate,
}) {
  return (
    <div data-testid="row" className="flex">
      {[...Array(getColumns(columns)).keys()].map((e, i) => {
        if (isDisplay)
          return (
            <Square isDisplay key={"col-" + i} rowNo={rowIndex} colNo={i} />
          );
        return (
          <Square
            key={"col-" + i}
            rowNo={rowIndex}
            colNo={i}
            number={rowNumbers[i]}
            reveal={rowReveals[i]}
            colour={colours[i]}
            setColourAtCoordinate={setColourAtCoordinate}
          />
        );
      })}
    </div> //reveal -> ensure background is correct colour??
  );
}
