import React from "react";
import { useEffect } from "react";

const TIMES = [0, 150, 600];

function formatTime(time, infinite = false) {
  if (infinite || time < 0 || time > TIMES[TIMES.length - 1]) return `∞:∞`;
  const mins = Math.floor(time / 60);
  const secs = time % 60;

  return `${mins < 10 ? "0" + mins : mins}:${secs < 10 ? "0" + secs : secs}`;
}

export default function Timer(props) {
  if (props.hasCallback) props.setTimer(props.newTime);
  useEffect(() => {
    const timerID = !props.paused
      ? setInterval(() => {
          props.decrementTimer();
          if (props.time === 0) clearInterval(timerID);
        }, 1000)
      : undefined;

    return () => {
      if (timerID) clearInterval(timerID);
    };
  }, [props]);
  return (
    <div data-testid="timer">{formatTime(props.time, props.isInfinite)}</div>
  );
}
