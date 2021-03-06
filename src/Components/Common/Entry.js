import React from "react";

/**
 *
 * @param {String} props.input previous input value
 * @param {Function} props.setInput setState for input
 * @param {Boolean} props.isDisabled
 * @returns Entry field for numbers
 */
export default function Entry(props) {
  function handleChange(event) {
    return event.target.validity.valid ? event.target.value : props.input;
  }

  return (
    <div className="border-2 border-black rounded-sm w-24">
      <input
        type="text"
        pattern="[0-9]*"
        value={props.input}
        onChange={(event) => props.setInput(handleChange(event))}
        className="w-full"
        disabled={props.isDisabled}
      />
    </div>
  );
}
