import React, { useState, useEffect } from "react";
import Grid from "../../Grid/Grid";
import Timer from "../../Timer/Timer";
import { useNavigate } from "react-router-dom";

export default function PlayGame(props) {
  const { time } = props;
  const navigate = useNavigate();
  const timerDone = time === 0;
  useEffect(() => {
    timerDone && navigate("/results");
  }, [timerDone, navigate]);
  console.log(props.gridSize);
  return (
    <div className="mx-auto">
      <Grid {...props} />
      <Timer {...props} />
    </div>
  );
}
