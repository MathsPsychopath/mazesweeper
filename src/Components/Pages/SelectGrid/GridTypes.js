import React from "react";
import Grid from "../../Grid/Grid";

export default function GridTypes(props) {
  const { size, info, isDisplay } = props;
  return (
    <div>
      <Grid size={size} isDisplay={isDisplay} />
      <div>
        <h1>{info.size}</h1>
        <ul>
          <li>{info.head}</li>
          {info.body.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
