import React from "react";
import displaySolution from "../../../logic/grid/displaySolution";
import { generateGrid } from "../../../logic/grid/generateGrid";

async function handleSubmit(props) {
  const { dispatch, changeSolution, grid, gridSize, setInputState } = props;
  setInputState(true);
  const distance = await displaySolution(grid, gridSize);
  dispatch({ type: "SET_POST_ANSWER" });
  changeSolution(distance);
}

function nextGrid(props) {
  const { gridSize, newGrid, dispatch, setInput, setInputState } = props;
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
  setInputState(false);
  dispatch({ type: "SET_PRE_ANSWER" });
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
  let handler;
  switch (props.children) {
    case "Submit":
      handler = handleSubmit;
      break;
    case "Next":
      handler = nextGrid;
      break;
    default:
      handler = props.handleClick;
  }
  return (
    <button onClick={() => handler(props)} disabled={props.isDisabled}>
      <h1>{props.children}</h1>
    </button>
  );
}
