import React from "react";

export default function OptionButton({
  currentState,
  updateState,
  updateValue,
  children,
  multiselect = false,
}) {
  return (
    <button
      className={`p-2 lg:p-4 text-white font-bold rounded-lg flex-1 ${
        currentState ? "bg-purple-400 border-white border-2" : "bg-blue-400"
      }`}
      onClick={() =>
        updateState(
          multiselect
            ? (prevState) => ({
                ...prevState,
                [updateValue]: !prevState[updateValue],
              })
            : updateValue
        )
      }
    >
      {children}
    </button>
  );
}
