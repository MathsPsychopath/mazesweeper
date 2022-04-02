import React, { useState } from "react";
import Grid, { getSize } from "../../Grid/Grid";
import Timer from "../../Timer/Timer";
import Entry from "../../Common/Entry";
import {
  generateGrid,
  generateAdjacency,
} from "../../../logic/grid/generateGrid";
import SolutionLabel from "./SolutionLabel";
import { useDispatch, useSelector } from "react-redux";
import PlayGameButton from "./PlayGameButton";
import getSolutionWithAnimation from "../../../logic/grid/getSolutionWithAnimation";
import {
  setPostAnswer,
  setPreAnswer,
  changePointAmount,
  updatePenalties,
  updateBaseScore,
  changeGridsSolved,
  updateTimeBonus,
  appendSolveTime,
} from "../../../redux/GameState/game.actions";
import { zeroElapsed } from "../../../redux/Timer/timer.actions";
import calculatePoints from "../../../logic/points/calculatePoints";
import getTimeBonus from "../../../logic/points/getTimeBonus";
import { useNavigate } from "react-router-dom";
import Animation from "./Animation";

function updateGameData(dispatch, game, elapsed, points, wasDeduction, mode) {
  const { gridsSolved, baseScore, penalties, timeBonus } = game;
  if (wasDeduction) {
    dispatch(updatePenalties(penalties - points));
    return;
  }
  const currentTimeBonus = getTimeBonus(elapsed);
  dispatch(updateBaseScore(baseScore + points - currentTimeBonus));
  dispatch(changeGridsSolved(gridsSolved + 1));
  dispatch(appendSolveTime(elapsed));
  if (mode !== "Chill & Casual")
    dispatch(updateTimeBonus(currentTimeBonus + timeBonus));
}

/**
 *
 * @returns PlayGame page
 */
export default function PlayGame() {
  const { gridSize, mode } = useSelector((state) => state.menu);
  const game = useSelector((state) => state.game);
  const [input, setInput] = useState("");
  const [submitClicked, setClicked] = useState(false);
  const [inputDisabled, setInputState] = useState(false);
  const [solution, changeSolution] = useState(0);
  const [grid, newGrid] = useState(generateGrid(gridSize));
  const [gridReveals, newGridReveals] = useState(generateGrid(gridSize, true));
  const [animationFrames, setAnimationFrames] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const quit = () => {
    setTimeout(() => {
      dispatch(setPreAnswer());
      navigate("/results");
    }, 2000);
  };

  function handleSubmit({ noSearch, game }, elapsed) {
    setInputState(true);
    setClicked(true);
    const [distance, frames] = getSolutionWithAnimation(
      grid,
      gridSize,
      noSearch
    );
    setAnimationFrames(frames);
    dispatch(setPostAnswer());
    changeSolution(distance);
    const [points, valid] = calculatePoints(distance, input, gridSize, mode);
    if (!valid && mode === "Chill & Casual") {
      //animate(animationFrames)
      quit();
      return;
    }
    dispatch(
      changePointAmount(
        points + (mode !== "Chill & Casual" && getTimeBonus(elapsed))
      )
    );
    updateGameData(dispatch, game, elapsed, points, !valid, mode);
    dispatch(zeroElapsed());
    //animate(animationFrames)
  }

  function nextGrid() {
    const [rows, cols] = getSize(gridSize);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const node = document.getElementById(`row-${i}-col-${j}`);
        const newClass = node.className
          .split(" ")
          .filter((c) => !c.startsWith("bg"));
        node.className = newClass.join(" ").trim();
      }
    }
    newGrid(generateGrid(gridSize));
    newGridReveals(generateGrid(gridSize, true));
    setInput("");
    setClicked(false);
    setInputState(false);
    dispatch(setPreAnswer());
  }

  return (
    <div className="mx-auto flex gap-x-10 flex-col lg:flex-row py-20">
      {animationFrames.length > 0 && (
        <Animation
          setAnimationFrames={setAnimationFrames}
          animationFrames={animationFrames}
        />
      )}
      <Grid
        gridSize={gridSize}
        numbers={generateAdjacency(grid)}
        gridReveals={gridReveals}
        grid={grid}
        reset={game.gridState === "PRE_ANSWER"}
      />
      <div className="flex flex-col justify-around items-center w-80 gap-y-4 mt-4 mx-auto">
        <Timer />
        <div className="mx-auto">
          <Entry input={input} setInput={setInput} isDisabled={inputDisabled} />
        </div>
        <div>
          <h1>Points: {game.points}</h1>
        </div>
        <div className="flex justify-around">
          <PlayGameButton
            handler={handleSubmit}
            isDisabled={game.gridState === "POST_ANSWER" || submitClicked}
            game={game}
          >
            Submit
          </PlayGameButton>
          <PlayGameButton
            noSearch
            handler={handleSubmit}
            isDisabled={game.gridState === "POST_ANSWER" || submitClicked}
            game={game}
          >
            Submit without searching
          </PlayGameButton>
          <PlayGameButton
            handler={nextGrid}
            isDisabled={game.gridState === "PRE_ANSWER"}
          >
            Next
          </PlayGameButton>
        </div>
        <SolutionLabel
          isHidden={game.gridState === "PRE_ANSWER"}
          answer={input}
          solution={solution}
        />
      </div>
    </div>
  );
}
