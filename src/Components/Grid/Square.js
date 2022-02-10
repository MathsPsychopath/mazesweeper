import React from "react";
import { useState } from "react";
import "./square.css";

const COLOR_1 = "bg-white";
const COLOR_2 = "bg-orange-500";

export default function Square() {
  const [color, setColor] = useState(COLOR_1);
  const classes = [color, "square", "border", "border-black"];
  return (
    <div
      data-testid="square"
      className={classes.join(" ")}
      onClick={() => setColor(color === COLOR_1 ? COLOR_2 : COLOR_1)}
    >
      {" "}
    </div>
  );
}
