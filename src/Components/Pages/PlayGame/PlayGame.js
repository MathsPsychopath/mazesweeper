import React, { useState } from "react";
import Grid from "../../Grid/Grid";
import Timer from "../../Timer/Timer";
import Entry from "./Entry";
import {
  generateGrid,
  generateAdjacency,
} from "../../../logic/grid/generateGrid";
import SolutionLabel from "./SolutionLabel";
import { useSelector } from "react-redux";
import GameButton from "./GameButton";

/**
 *
 * @returns PlayGame page
 */
export default function PlayGame() {
  const { gridSize } = useSelector((state) => state.menu);
  const { gridState, points } = useSelector((state) => state.game);
  const [input, setInput] = useState("");
  const [submitClicked, setClicked] = useState(false);
  const [inputDisabled, setInputState] = useState(false);
  const [solution, changeSolution] = useState(0);
  const [grid, newGrid] = useState(generateGrid(gridSize));

  return (
    <div className="mx-auto flex gap-x-10">
      <Grid gridSize={gridSize} numbers={generateAdjacency(grid)} />
      <div className="flex flex-col justify-around items-center w-80">
        <Timer />
        <div className="mx-auto">
          <Entry input={input} setInput={setInput} isDisabled={inputDisabled} />
        </div>
        <div>
          <h1>Points: {points}</h1>
        </div>
        <div className="flex justify-around">
          <GameButton
            changeSolution={changeSolution}
            grid={grid}
            isDisabled={gridState === "POST_ANSWER" || submitClicked}
            setInputState={setInputState}
            input={input}
            submitClicked={submitClicked}
            setClicked={setClicked}
          >
            Submit
          </GameButton>
          <GameButton
            changeSolution={changeSolution}
            grid={grid}
            isDisabled={gridState === "POST_ANSWER" || submitClicked}
            setInputState={setInputState}
            noSearch
            input={input}
            submitClicked={submitClicked}
            setClicked={setClicked}
          >
            Submit without searching
          </GameButton>
          <GameButton
            isDisabled={gridState === "PRE_ANSWER"}
            newGrid={newGrid}
            setInput={setInput}
            setInputState={setInputState}
            setClicked={setClicked}
          >
            Next
          </GameButton>
        </div>
        <SolutionLabel
          isHidden={gridState === "PRE_ANSWER"}
          answer={input}
          solution={solution}
        />
      </div>
    </div>
  );
}
