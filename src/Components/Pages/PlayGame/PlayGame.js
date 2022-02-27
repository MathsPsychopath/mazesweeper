import React, { useState, useEffect } from "react";
import Grid from "../../Grid/Grid";
import Timer from "../../Timer/Timer";
import { useNavigate } from "react-router-dom";

export default function PlayGame(props) {
  const { time, paused, gameState, mode, gridSize } = props;
  const { changeMode, changeGrid, setInfinite, cycleGameState } = props;
  const navigate = useNavigate();
  if (time === 0) navigate("/results");
  return (
    <div className="mx-auto">
      <Grid />
      <Timer {...props} />
    </div>
  );
}
