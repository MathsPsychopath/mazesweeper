import React, { useState } from "react";
import Grid from "../../Grid/Grid";
import Timer from "../../Timer/Timer";
import Entry from "../../Common/Entry";
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
  const game = useSelector((state) => state.game);
  const [input, setInput] = useState("");
  const [submitClicked, setClicked] = useState(false);
  const [inputDisabled, setInputState] = useState(false);
  const [solution, changeSolution] = useState(0);
  const [grid, newGrid] = useState(generateGrid(gridSize));
  const [gridReveals, newGridReveals] = useState(generateGrid(gridSize, true));

  return (
    <div className="mx-auto flex gap-x-10 flex-col lg:flex-row py-20">
      <Grid
        gridSize={gridSize}
        numbers={generateAdjacency(grid)}
        gridReveals={gridReveals}
        grid={grid}
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
          <GameButton
            changeSolution={changeSolution}
            grid={grid}
            isDisabled={game.gridState === "POST_ANSWER" || submitClicked}
            setInputState={setInputState}
            input={input}
            submitClicked={submitClicked}
            setClicked={setClicked}
            game={game}
          >
            Submit
          </GameButton>
          <GameButton
            changeSolution={changeSolution}
            grid={grid}
            isDisabled={game.gridState === "POST_ANSWER" || submitClicked}
            setInputState={setInputState}
            noSearch
            input={input}
            submitClicked={submitClicked}
            setClicked={setClicked}
            game={game}
          >
            Submit without searching
          </GameButton>
          <GameButton
            isDisabled={game.gridState === "PRE_ANSWER"}
            newGrid={newGrid}
            newGridReveals={newGridReveals}
            setInput={setInput}
            setInputState={setInputState}
            setClicked={setClicked}
          >
            Next
          </GameButton>
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
