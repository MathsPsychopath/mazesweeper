import React from "react";

const TIMES = [0, 150, 600];

function formatTime(time, infinite = false) {
  if (infinite || time < 0 || time > TIMES[TIMES.length - 1]) return `∞:∞`;
  const mins = Math.floor(time / 60);
  const secs = time % 60;

  return `${mins < 10 ? "0" + mins : mins}:${secs < 10 ? "0" + secs : secs}`;
}

/**
 * @param {Object} ...props - redux dispatch functions and states
 * @returns Timer component
 */
export default function Timer(props) {
  /*
  timer should be set by some logic when selecting the boards
  timer should be started by some logic when the board is played/play is pressed
  timer should be cleaned up/stopped when time = 0 or when paused
  */
  //if (props.time === 0 && !props.paused) {
  //  props.pauseTimer();
  //  return formatTime(props.time);
  //}
  return <div>{formatTime(props.time, props.isInfinite)}</div>;
}
