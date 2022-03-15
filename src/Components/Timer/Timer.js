import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPreAnswer } from "../../redux/GameState/game.actions";
import { elapsed, setTimer } from "../../redux/Timer/timer.actions";
import { decrementTimer } from "../../redux/Timer/timer.actions";

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
 * @returns Timer component
 */
export default function Timer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //TODO #2
  const { time, paused } = useSelector((state) => state.timer);
  const { mode } = useSelector((state) => state.menu);

  useEffect(() => {
    //initialise timer value at start
    const initTime = initialTimes[mode];
    dispatch(setTimer(initTime));
  }, [mode, dispatch]);

  useEffect(() => {
    //initialise timer countdown function
    const timer = setInterval(() => {
      dispatch(decrementTimer());
      dispatch(elapsed());
    }, 1000);
    return () => clearInterval(timer);
  }, [paused, dispatch]);

  useEffect(() => {
    //on timer runout
    if (time <= 0) dispatch(setPreAnswer()) && navigate("/results");
  }, [navigate, dispatch, time]);

  return (
    <div
      className="w-32 p-4 text-4xl text-center border-2 border-black rounded-lg"
      id="timer"
    >
      {formatTime(time)}
    </div>
  );
}
