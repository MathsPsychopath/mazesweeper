import React, { useState } from "react";
import Grid from "../../Grid/Grid";
import Timer from "../../Timer/Timer";
import Entry from "./Entry";
import {
  generateGrid,
  generateAdjacency,
} from "../../../logic/grid/generateGrid";
import SolutionLabel from "./SolutionLabel";
import { useDispatch, useSelector } from "react-redux";
import GameButton from "./GameButton";

export default function PlayGame() {
  //TODO #3
  const { gridSize } = useSelector((state) => state.menu.gridSize);
  const game = useSelector((state) => state.game);
  const [input, setInput] = useState("");
  const [inputDisabled, setInputState] = useState(false);
  const [solution, changeSolution] = useState(0);
  const [grid, newGrid] = useState(generateGrid(gridSize));

  const dispatch = useDispatch();
  return (
    <div className="mx-auto">
      <Grid gridSize={gridSize} numbers={generateAdjacency(grid)} />
      <Timer />
      <Entry input={input} setInput={setInput} isDisabled={inputDisabled} />
      <GameButton
        changeSolution={changeSolution}
        grid={grid}
        gridSize={gridSize}
        dispatch={dispatch}
        isDisabled={game.gridState === "POST_ANSWER"}
        setInputState={setInputState}
      >
        Submit
      </GameButton>
      <GameButton
        isDisabled={game.gridState === "PRE_ANSWER"}
        gridSize={gridSize}
        newGrid={newGrid}
        dispatch={dispatch}
        setInput={setInput}
        setInputState={setInputState}
      >
        Next
      </GameButton>
      <SolutionLabel
        isHidden={game.gridState === "PRE_ANSWER"}
        answer={input}
        solution={solution}
      />
    </div>
  );
}
