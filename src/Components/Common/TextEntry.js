import React from "react";

export default function TextEntry({
  input,
  setInput,
  isDisabled,
  placeholder = "",
}) {
  function handleChange(event) {
    return event.target.validity.valid ? event.target.value : input;
  }

  return (
    <div className="border-2 border-black rounded-sm w-60">
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(handleChange(event))}
        className="w-full"
        disabled={isDisabled}
        placeholder={placeholder}
      />
    </div>
  );
}
