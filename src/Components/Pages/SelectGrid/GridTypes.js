import React from "react";
import Grid from "../../Grid/Grid";

/**
 *
 * @param {String} props.gridSize 10x10, 16x16, 16x30
 * @param {Object} info information to display
 * @param {isDisplay}
 */
export default function GridTypes(props) {
  const { gridSize, info, isDisplay } = props;
  return (
    <div className="flex flex-col m-4 place-items-center">
      <Grid gridSize={gridSize} isDisplay={isDisplay} />
      <div>
        <ul className="p-4 pl-auto list-disc list-inside text-left break-normal">
          <li>{info.head}</li>
          {info.body.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
