import HeaderFooter from "../../Common/HeaderFooter";
import grids from "./grids.json";
import GridTypes from "./GridTypes";
import React from "react";

const SIZES = ["10x10", "16x16", "16x30"];

export default function SelectGrid(props) {
  const { gridSize } = props;
  return (
    <HeaderFooter>
      <div>
        <div>
          <GridTypes
            info={grids.types[gridSize]}
            size={gridSize}
            isDisplay={true}
          />
          <h1>Select a grid size...</h1>
        </div>
        <div>selection info</div>
      </div>
    </HeaderFooter>
  );
}
