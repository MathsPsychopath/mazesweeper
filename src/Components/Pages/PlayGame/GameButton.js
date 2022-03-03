import React from "react";

/**
 *
 * @param {Object} props
 * @property {React.Dispatch<React.SetStateAction<number>>} changeSolution
 * @property {React.Dispatch<React.SetStateAction<boolean>>} changeShow
 * @property {Array<Array<Number>>} grid
 * @property {String} gridSize
 * @returns {JSX.Element} Submit
 */
export default function GameButton(props) {
  return (
    <button
      onClick={() => props.handleClick(props)}
      disabled={props.isDisabled}
    >
      <h1>{props.children}</h1>
    </button>
  );
}
