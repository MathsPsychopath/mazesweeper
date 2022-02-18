import HeaderFooter from "../../Common/HeaderFooter";
import grids from "./grids.json";
import GridTypes from "./GridTypes";
import React from "react";

const SIZES = ["10x10", "16x16", "16x30"];

export default function SelectGrid() {
  return (
    <HeaderFooter>
      <div>
        <div>
          <h1>Select a grid size...</h1>
          {SIZES.map((size) => (
            <button key={size}>
              <GridTypes
                info={grids.types[size]}
                size={size}
                isDisplay={true}
              />
            </button>
          ))}
        </div>
        <div>selection info</div>
      </div>
    </HeaderFooter>
  );
}
