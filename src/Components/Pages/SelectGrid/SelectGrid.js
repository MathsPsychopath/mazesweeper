import grids from "./grids.json";
import GridTypes from "./GridTypes";
import React from "react";
import { Link } from "react-router-dom";
import { IoPlay } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  changeGrid,
  changeMode,
} from "../../../redux/MenuSelection/menu.actions";
import OptionsList from "../../Common/OptionsList";

const SIZES = ["10x10", "16x16", "16x30"];
const MODES = ["QuickMode", "Normal", "Chill & Casual"];

export default function SelectGrid() {
  const { gridSize, mode } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col lg:flex-row justify-around my-12">
      <div className="hidden md:block">
        <GridTypes
          info={grids.types[gridSize]}
          gridSize={gridSize}
          isDisplay={true}
        />
      </div>
      <div className="grid content-between h-120">
        <div className="grid grid-rows-4 justify-items-center">
          <h1 className="text-xl">Select a grid size...</h1>
          <OptionsList
            setState={(updateValue) => dispatch(changeGrid(updateValue))}
            state={gridSize}
            updateValues={SIZES}
          />
          <h1 className="text-xl text-center">Select a mode...</h1>
          <OptionsList
            setState={(updateValue) => dispatch(changeMode(updateValue))}
            state={mode}
            updateValues={MODES}
          />
        </div>
        <div className="p-4 lg:p-0">
          <Link to="/playgame">
            <button className="flex mx-auto py-2 px-20 bg-blue-400 hover:bg-purple-200 active:bg-purple-400 text-white rounded-lg items-center">
              <IoPlay />
              Play Now!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
