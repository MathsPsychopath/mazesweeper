import React, { useEffect } from "react";

const initialTimes = {
  QuickMode: 150,
  Normal: 600,
  "Chill and Casual": Infinity,
};

function formatTime(time, infinite = false) {
  if (infinite) return `∞:∞`;
  if (time < 0) return "00:00";
  const mins = Math.floor(time / 60);
  const secs = time % 60;

  return `${mins < 10 ? "0" + mins : mins}:${secs < 10 ? "0" + secs : secs}`;
}

/**
 * @param {Number} props.time - time in redux store
 * @param {Boolean} props.isInfinite
 * @returns Timer component
 */
export default function Timer(props) {
  /*
  timer should be set by some redux logic when selecting the boards
  timer should be started by some logic when the board is played/play is pressed
  timer should be cleaned up/stopped when time = 0 or when paused
  */
  const { setInfinite, setTimer, mode, time, isInfinite, decrementTimer } =
    props;
  useEffect(() => {
    //initialise timer at start
    const initTime = initialTimes[mode];
    if (initTime === Infinity) {
      setInfinite();
    }
    setTimer(initTime);
  }, [mode, setTimer, setInfinite]);

  useEffect(() => {
    const timer = setInterval(() => {
      decrementTimer();
    }, 1000);
    return () => clearInterval(timer);
  });
  return (
    <div className="w-32 p-4 text-4xl text-center border-2 border-black rounded-lg">
      {formatTime(time, isInfinite)}
    </div>
  );
}
