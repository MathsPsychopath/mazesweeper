import React from "react";
import OptionButton from "./OptionButton";

export default function OptionsList({
  setState,
  state,
  updateValues,
  title,
  center = false,
  multiselect = false,
}) {
  return (
    <div className="flex flex-col">
      {title && <h1 className="text-xl">{title}</h1>}
      <div className={"flex gap-2 flex-wrap " + (center && "justify-center")}>
        {updateValues.map((value) => (
          <OptionButton
            currentState={state === value || (multiselect && state[value])}
            updateState={setState}
            updateValue={value}
            key={value}
            multiselect={multiselect}
          >
            {value}
          </OptionButton>
        ))}
      </div>
    </div>
  );
}
