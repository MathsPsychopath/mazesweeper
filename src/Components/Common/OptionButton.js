import React from "react";

export default function OptionButton({
  currentState,
  updateState,
  updateValue,
  children,
}) {
  return (
    <button
      className={`p-4 text-white font-bold rounded-lg ${
        currentState ? "bg-purple-400 border-white border-2" : "bg-blue-400"
      }`}
      onClick={() => updateState(updateValue)}
    >
      {children}
    </button>
  );
}
