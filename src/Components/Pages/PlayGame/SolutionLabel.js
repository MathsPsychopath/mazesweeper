import React from "react";
import { ImCross, ImCheckmark } from "react-icons/im";

/**
 * @param {Number} props.answer - the answer given by player
 * @param {Number} props.solution - the answer given by algorithm
 * @param {Boolean} props.isDisabled
 * @returns Correct or Incorrect Answer
 */
export default function SolutionLabel(props) {
  const correct = parseInt(props.answer, 10) === parseInt(props.solution, 10);
  return (
    <div
      className={`${props.isHidden ? "hidden" : "flex"} flex-col items-center`}
    >
      {props.solution >= 0 ? (
        correct ? (
          <ImCheckmark />
        ) : (
          <ImCross />
        )
      ) : (
        "something"
      )}
      <h1>
        {correct
          ? "Good job!"
          : `That was not the correct answer: ${props.solution} was the correct answer`}
      </h1>
    </div>
  );
}
