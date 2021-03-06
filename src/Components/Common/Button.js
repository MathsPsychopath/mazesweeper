import React from "react";

export default function Button({
  handleClick,
  handleClickParams,
  children,
  isDisabled,
}) {
  return (
    <button
      className={
        "flex items-center justify-center text-lg p-4 w-1/3 m-2 text-white " +
        "rounded-lg border " +
        (isDisabled
          ? "bg-gray-400"
          : "bg-blue-400 hover:bg-purple-200 active:bg-purple-400")
      }
      onClick={() => handleClick(...handleClickParams)}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
