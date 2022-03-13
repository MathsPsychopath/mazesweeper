import { useWindowWidth } from "@react-hook/window-size";
import React from "react";
import { useState } from "react";

const COLOR_1 = "bg-white";
const COLOR_2 = "bg-orange-500";

export default function Square(props) {
  const [color, setColor] = useState(COLOR_1);
  const width = useWindowWidth();
  const squareDim = props.isDisplay && width < 1536 ? "1.5em" : "2em";
  const classes = [
    color,
    "hover:border-2",
    `[min-width:${squareDim}] [max-width:${squareDim}] [min-height:${squareDim}] [max-height:${squareDim}] `,
    "hover:border-red-500",
    "border",
    "border-black",
    "duration-50",
    "cursor-pointer",
    "grid-square",
  ];

  if (props.isDisplay)
    return (
      <div
        data-testid="square"
        className={classes.join(" ")}
        onClick={() => undefined}
      >
        {" "}
      </div>
    );
  return (
    <button
      data-testid="square"
      className={classes.join(" ")}
      onClick={() => setColor(color === COLOR_1 ? COLOR_2 : COLOR_1)}
      id={"row-" + props.rowNo + "-col-" + props.colNo}
    >
      {props.isDisplay ? " " : props.number}
    </button>
  );
}
