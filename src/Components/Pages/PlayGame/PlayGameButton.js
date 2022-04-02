import React from "react";
import { useSelector } from "react-redux";

export default function PlayGameButton({
  handler,
  isDisabled,
  children,
  ...props
}) {
  const elapsed = useSelector((state) => state.timer.elapsed);
  return (
    <button
      onClick={() => handler(props, elapsed)}
      disabled={isDisabled}
      className={`rounded-md border-2 border-black p-1 m-1 ${
        isDisabled && "bg-slate-400"
      }`}
    >
      <h1>{children}</h1>
    </button>
  );
}
