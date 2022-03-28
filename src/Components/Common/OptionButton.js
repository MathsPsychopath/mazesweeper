import React from "react";

export default function OptionButton({
  currentState,
  updateState,
  updateValue,
  children,
}) {
  return (
    <button
      className={`p-2 border border-black rounded-lg ${
        currentState ? "bg-blue-100" : "bg-white"
      }`}
      onClick={() => updateState(updateValue)}
    >
      {children}
    </button>
  );
}
