import React from "react";
import OptionButton from "./OptionButton";

export default function OptionsList({ setState, state, updateValues, title }) {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl">{title}</h1>
      <div className="flex gap-x-2">
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
    </div>
  );
}
