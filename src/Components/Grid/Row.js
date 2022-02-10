import React from "react";
import Square from "./Square";

const COLUMN_SIZES = [10, 16, 30];

function getColumns(columns) {
  const index = COLUMN_SIZES.indexOf(columns);
  return COLUMN_SIZES[index === -1 ? 0 : index];
}

export default function Row(props) {
  return (
    <div data-testid="row" className="flex">
      {[...Array(getColumns(props.columns)).keys()].map((e, i) => (
        <Square key={"col-" + i} />
      ))}
    </div>
  );
}
