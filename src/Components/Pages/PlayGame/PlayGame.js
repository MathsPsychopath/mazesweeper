import React, { useEffect, useState } from "react";
import Grid, { getSize } from "../../Grid/Grid";
import Timer from "../../Timer/Timer";
import Entry from "../../Common/Entry";
import {
  generateGrid,
  generateAdjacency,
} from "../../../logic/grid/generateGrid";
import SolutionLabel from "./SolutionLabel";
import { useSelector } from "react-redux";
import GameButton from "./GameButton";

const WALL_COLOUR = "bg-slate-700";
const DEFAULT_COLOUR = "bg-white";

function initialiseColours(rows, columns, gridReveals, grid) {
  const gridColours = [...Array(rows)].map(() =>
    [...Array(columns)].map(() => DEFAULT_COLOUR)
  );
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      if (gridReveals[row][column] === 1 && grid[row][column] === 0) {
        gridColours[row][column] = WALL_COLOUR;
      }
    }
  }
  return gridColours;
}

function use2DColours(rows, columns, gridReveals, grid) {
  const [colours, setColours] = useState(
    initialiseColours(rows, columns, gridReveals, grid)
  );
  useEffect(
    () => setColours(initialiseColours(rows, columns, gridReveals, grid)),
    [columns, grid, gridReveals, rows]
  );

  function setAtCoordinate(row, column, newValue) {
    setColours((oldColours) => {
      const newColours = [...oldColours];
      newColours[row] = [...newColours[row]];
      newColours[row][column] = newValue;
      return newColours;
    });
  }
  return [colours, setAtCoordinate, setColours];
}

/**
 *
 * @returns PlayGame page
 */
export default function PlayGame() {
  const { gridSize } = useSelector((state) => state.menu);
  const [rows, columns] = getSize(gridSize);
  const game = useSelector((state) => state.game);
  const [input, setInput] = useState("");
  const [submitClicked, setClicked] = useState(false);
  const [inputDisabled, setInputState] = useState(false);
  const [solution, changeSolution] = useState(0);
  const [grid, newGrid] = useState(generateGrid(gridSize));
  const [gridReveals, newGridReveals] = useState(generateGrid(gridSize, true));

  const [colours, setColourAtCoordinate, setColours] = use2DColours(
    rows,
    columns,
    gridReveals,
    grid
  );
  return (
    <div className="mx-auto flex gap-x-10 flex-col lg:flex-row py-20">
      <Grid
        gridSize={gridSize}
        numbers={generateAdjacency(grid)}
        gridReveals={gridReveals}
        colours={colours}
        setColourAtCoordinate={setColourAtCoordinate}
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
            setColours={setColours}
            setColourAtCoordinate={setColourAtCoordinate}
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
            setColours={setColours}
            setColourAtCoordinate={setColourAtCoordinate}
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
            setColours={setColours}
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
