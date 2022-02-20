import HeaderFooter from "../../Common/HeaderFooter";
import grids from "./grids.json";
import GridTypes from "./GridTypes";
import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { IoPlay } from "react-icons/io5";

const SIZES = ["10x10", "16x16", "16x30"];
const MODES = ["QuickMode", "Normal", "Chill & Casual"];

export default function SelectGrid(props) {
  const { gridSize, mode } = props;
  return (
    <HeaderFooter>
      <div className="flex justify-around my-12">
        <div className={gridSize !== "16x30" ? "hidden lg:block" : "hidden"}>
          <GridTypes
            info={grids.types[gridSize]}
            size={gridSize}
            isDisplay={true}
          />
        </div>
        <div className="grid content-between">
          <div className="grid grid-rows-4">
            <h1 className="text-xl">Select a grid size...</h1>
            <div className="flex justify-around">
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
            <h1 className="text-xl">Select a mode...</h1>
            <div className="flex justify-around">
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
          <div>
            <Link to="/play">
              <button className="flex mx-auto py-2 px-20 border-black border-2 rounded-md items-center">
                <IoPlay />
                Play Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </HeaderFooter>
  );
}
