import { useWindowWidth } from "@react-hook/window-size";
import React from "react";

export default function Square({
  isDisplay,
  rowNo,
  colNo,
  number,
  reveal,
  colour,
  setColourAtCoordinate,
}) {
  const width = useWindowWidth();
  const squareDim = width < 1920 ? "1.5em" : "2em";
  const classes =
    "hover:border-2 hover:border-red-500 border border-black duration-50" +
    "cursor-pointer transition-colors grid-square " +
    `min-w-[${squareDim}] max-w-[${squareDim}] min-h-[${squareDim}] max-h-[${squareDim}] `;

  if (isDisplay) {
    return (
      <div
        data-testid="square"
        className={classes}
        id={"row-" + rowNo + "-col-" + colNo}
      >
        {" "}
      </div>
    );
  }
  if (reveal)
    return (
      <button data-testid="square" className={classes + `${colour}`} disabled>
        {" "}
      </button>
    );
  return (
    <button
      data-testid="square"
      className={classes + `${colour}`}
      onClick={() =>
        setColourAtCoordinate(
          rowNo,
          colNo,
          colour === "bg-white"
            ? "bg-orange-500"
            : colour === "bg-orange-500"
            ? "bg-teal-400"
            : "bg-white"
        )
      }
    >
      {number}
    </button>
  );
}
