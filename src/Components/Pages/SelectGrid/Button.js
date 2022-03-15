import React from "react";

/**
 *
 * @param {String} props.children label for button
 * @param {String} props.currentSelected currently selected value
 * @param {Function} props.onClickEvent onclick handler taking props.children
 */
export default function Button(props) {
  const { children, currentSelected, onClickEvent } = props;
  return (
    <button
      onClick={() => onClickEvent(children)}
      className={`m-4 p-2 border-2 border-black rounded-md ${
        children === currentSelected ? "bg-blue-100" : "bg-white"
      }`}
    >
      {children}
    </button>
  );
}
