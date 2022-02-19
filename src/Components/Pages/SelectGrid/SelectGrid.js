import HeaderFooter from "../../Common/HeaderFooter";
import grids from "./grids.json";
import GridTypes from "./GridTypes";
import React from "react";
import Button from "./Button";

const SIZES = ["10x10", "16x16", "16x30"];
const MODES = ["QuickMode", "Normal", "Chill & Casual"];

export default function SelectGrid(props) {
  const { gridSize, mode } = props;
  console.log(mode);
  return (
    <HeaderFooter>
      <div className="flex justify-around">
        <GridTypes
          info={grids.types[gridSize]}
          size={gridSize}
          isDisplay={true}
        />
        <div>
          <h1 className="text-2xl">Select a grid size...</h1>
          <div className="flex flex-col">
            {SIZES.map((size) => (
              <Button
                currentSelected={gridSize}
                key={size}
                onClickEvent={props.changeGrid}
              >
                {size}
              </Button>
            ))}
          </div>
          <h1 className="text-2xl">Select a mode...</h1>
          <div className="flex flex-col">
            {MODES.map((modeInMap) => (
              <Button
                currentSelected={mode}
                key={modeInMap}
                onClickEvent={props.changeMode}
              >
                {modeInMap}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </HeaderFooter>
  );
}
