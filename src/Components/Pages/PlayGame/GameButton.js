import React from "react";
import displaySolution from "../../../logic/grid/displaySolution";
import { generateGrid } from "../../../logic/grid/generateGrid";
import {
  appendSolveTime,
  changeGridsSolved,
  changePointAmount,
  setPostAnswer,
  setPreAnswer,
  updateBaseScore,
  updatePenalties,
  updateTimeBonus,
} from "../../../redux/GameState/game.actions";
import isValidDist from "../../../logic/points/isValidDist";
import pointCalculator from "../../../logic/points/pointCalculator";
import getDeduction from "../../../logic/points/getDeduction";
import { zeroElapsed } from "../../../redux/Timer/timer.actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import getTimeBonus from "../../../logic/points/getTimeBonus";

function updateGameData(dispatch, game, elapsed, points, wasDeduction) {
  const { gridsSolved, baseScore, penalties, timeBonus } = game;
  if (wasDeduction) {
    dispatch(updatePenalties(penalties - points));
    return;
  }
  const currentTimeBonus = getTimeBonus(elapsed);
  dispatch(updateBaseScore(baseScore + points - currentTimeBonus));
  dispatch(changeGridsSolved(gridsSolved + 1));
  dispatch(appendSolveTime(elapsed));
  dispatch(updateTimeBonus(currentTimeBonus + timeBonus));
}

function handleSubmit(dispatch, elapsed, gridSize, mode, navigate) {
  return async function (props) {
    const {
      changeSolution,
      grid,
      setInputState,
      noSearch,
      input,
      setClicked,
      game,
    } = props;
    setInputState(true);
    setClicked(true);
    const distance = await displaySolution(grid, gridSize, noSearch);
    dispatch(setPostAnswer());
    changeSolution(distance);
    const offset = distance - parseInt(input, 10);
    const valid = isValidDist(offset, mode);
    let points = valid
      ? pointCalculator(gridSize, elapsed)
      : getDeduction(offset, mode);
    dispatch(changePointAmount(points));
    updateGameData(dispatch, game, elapsed, points, !valid);
    dispatch(zeroElapsed());

    if (mode === "Chill & Casual" && !valid) {
      setTimeout(() => {
        dispatch(setPreAnswer());
        navigate("/results");
      }, 2000);
    }
  };
}
//if one button is clicked, disable the other
function nextGrid(dispatch, gridSize) {
  return function (props) {
    const { newGrid, setInput, setInputState, setClicked } = props;
    console.log("here");
    newGrid(generateGrid(gridSize));
    document.querySelectorAll(".grid-square").forEach((e) => {
      e.classList.remove(
        "bg-orange-500",
        "bg-blue-500",
        "bg-slate-700",
        "bg-lime-400",
        "bg-green-500"
      );
      e.classList.add("bg-white");
    });
    setInput("");
    setClicked(false);
    setInputState(false);
    dispatch(setPreAnswer());
  };
}

/**
 *
 * @param {Object} props
 * @property {React.Dispatch<React.SetStateAction<number>>} changeSolution
 * @property {React.Dispatch<React.SetStateAction<boolean>>} changeShow
 * @property {Array<Array<Number>>} grid
 * @property {String} gridSize
 * @returns {JSX.Element} Submit
 */
export default function GameButton(props) {
  const elapsed = useSelector((state) => state.timer.elapsed);
  const { gridSize, mode } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let handler;
  switch (props.children) {
    case "Submit":
    case "Submit without searching":
      handler = handleSubmit(dispatch, elapsed, gridSize, mode, navigate);
      break;
    case "Next":
      handler = nextGrid(dispatch, gridSize);
      break;
    default:
      handler = props.handleClick;
  }
  return (
    <button
      onClick={() => handler(props)}
      disabled={props.isDisabled}
      className={`rounded-md border-2 border-black p-1 m-1 ${
        props.isDisabled && "bg-slate-400"
      }`}
    >
      <h1>{props.children}</h1>
    </button>
  );
}
