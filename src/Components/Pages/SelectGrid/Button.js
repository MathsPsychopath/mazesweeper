import React from "react";

export default function Button(props) {
  const { children, currentSelected, onClickEvent } = props;
  return (
    <button
      onClick={() => onClickEvent(children)}
      className={`m-4 border-2 border-black rounded-md ${
        children === currentSelected ? "bg-blue-100" : "bg-white"
      }`}
    >
      {children}
    </button>
  );
}
