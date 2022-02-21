import React from "react";
import { useState } from "react";
import "./square.css";

const COLOR_1 = "bg-white";
const COLOR_2 = "bg-orange-500";

export default function Square(props) {
  const [color, setColor] = useState(COLOR_1);
  const classes = [
    color,
    props.isDisplay ? "square-small" : "square",
    "hover:border-2",
    "hover:border-red-500",
    "border",
    "border-black",
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
    >
      {props.show ? props.number : " "}
    </button>
  );
}
