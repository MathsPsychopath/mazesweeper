// import { useWindowWidth } from "@react-hook/window-size";
import React, { useEffect } from "react";
import { useState } from "react";

const COLOR_1 = "bg-white";
const COLOR_2 = "bg-orange-500";
const COLOR_3 = "bg-teal-400";

export default function Square({
  isDisplay,
  reveal,
  number,
  gridValue,
  row,
  col,
  reset,
}) {
  // const width = useWindowWidth();
  // const squareDim = width < 1920 ? "1.5em" : "2em";
  const classes =
    "hover:border-2 hover:border-red-500 border border-black " +
    "duration-50 cursor-pointer transition-colors grid-square grid-square ";
  const [color, setColor] = useState(COLOR_1);

  useEffect(() => {
    setColor(COLOR_1);
  }, [reset]);

  if (isDisplay)
    return (
      <div className={classes} id={`row-${row}-col-${col}`}>
        {" "}
      </div>
    );
  if (reveal)
    return (
      <button
        className={classes + (gridValue === 0 ? "bg-slate-700" : "bg-white")}
        id={`row-${row}-col-${col}`}
        disabled
      >
        {" "}
      </button>
    );
  return (
    <button
      className={classes + color}
      onClick={() =>
        setColor(
          color === COLOR_1 ? COLOR_2 : color === COLOR_2 ? COLOR_3 : COLOR_1
        )
      }
      id={`row-${row}-col-${col}`}
    >
      {number}
    </button>
  );
}
