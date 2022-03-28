import React from "react";
import OptionButton from "../../Common/OptionButton";

export default function OptionsList({ setState, state, updateValues, title }) {
  return (
    <div className="flex gap-x-2">
      <h1 className="text-xl align-bottom">{title}</h1>
      {updateValues.map((value) => (
        <OptionButton
          currentState={state === value}
          updateState={setState}
          updateValue={value}
          key={value}
        >
          {value}
        </OptionButton>
      ))}
    </div>
  );
}
