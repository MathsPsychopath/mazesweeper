import { useWindowWidth } from "@react-hook/window-size";
import React from "react";
import { useState } from "react";

const COLOR_1 = "bg-white";
const COLOR_2 = "bg-orange-500";
const COLOR_3 = "bg-teal-400";

/**
 *
 * @param {Boolean} props.isDisplay
 * @param {Number} props.rowNo
 * @param {Number} props.colNo
 * @param {Number} props.number
 */
export default function Square(props) {
  const [color, setColor] = useState(COLOR_1);
  const width = useWindowWidth();
  const squareDim = width < 1536 ? "1.5em" : "2em";
  const classes = [
    color,
    "hover:border-2",
    `[min-width:${squareDim}] [max-width:${squareDim}] [min-height:${squareDim}] [max-height:${squareDim}] `,
    "hover:border-red-500",
    "border",
    "border-black",
    "duration-50",
    "cursor-pointer",
    "transition-colors",
    "grid-square",
  ];

  if (props.isDisplay || props.reveal)
    return (
      <div
        data-testid="square"
        className={classes.join(" ") + (props.isWall ? " bg-slate-700" : "")}
        id={"row-" + props.rowNo + "-col-" + props.colNo}
      >
        {" "}
      </div>
    );
  return (
    <button
      data-testid="square"
      className={classes.join(" ")}
      onClick={() =>
        setColor(
          color === COLOR_1 ? COLOR_2 : color === COLOR_2 ? COLOR_3 : COLOR_1
        )
      }
      id={"row-" + props.rowNo + "-col-" + props.colNo}
    >
      {props.isDisplay ? " " : props.number}
    </button>
  );
}
