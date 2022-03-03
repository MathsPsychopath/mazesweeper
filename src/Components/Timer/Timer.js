import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const initialTimes = {
  QuickMode: 150,
  Normal: 600,
  "Chill & Casual": Infinity,
};

function formatTime(time) {
  if (time === Infinity) return `∞:∞`;
  if (time < 0) return "00:00";
  const mins = Math.floor(time / 60);
  const secs = time % 60;

  return `${mins < 10 ? "0" + mins : mins}:${secs < 10 ? "0" + secs : secs}`;
}

/**
 * @param {Number} props.time - time in redux store
 * @returns Timer component
 */
export default function Timer(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //TODO #2
  const { time, paused } = useSelector((state) => state.timer);
  const setTimer = useCallback(
    (time) => dispatch({ type: "SET_TIMER", newTime: time }),
    [dispatch]
  );
  const decrementTimer = useCallback(
    () => dispatch({ type: "DECREMENT" }),
    [dispatch]
  );

  useEffect(() => {
    //initialise timer value at start
    const initTime = initialTimes[props.mode];
    setTimer(initTime);
  }, [props.mode, setTimer]);

  useEffect(() => {
    //initialise timer countdown function
    const timer = setInterval(() => {
      decrementTimer();
    }, 1000);
    return () => clearInterval(timer);
  }, [paused, decrementTimer]);

  useEffect(() => {
    //on timer runout
    if (time <= 0) dispatch({ type: "SET_PRE_ANSWER" }) && navigate("/results");
  }, [navigate, dispatch, time]);

  return (
    <div className="w-32 p-4 text-4xl text-center border-2 border-black rounded-lg">
      {formatTime(time)}
    </div>
  );
}
