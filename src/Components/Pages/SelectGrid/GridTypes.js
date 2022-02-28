import React from "react";
import Grid from "../../Grid/Grid";

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
