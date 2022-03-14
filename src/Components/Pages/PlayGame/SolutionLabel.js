import React from "react";
import { ImCross, ImCheckmark } from "react-icons/im";

/**
 * @param {object} props
 * @property {number} props.answer - the answer given by player
 * @property {number} props.solution - the answer given by algorithm
 */
export default function SolutionLabel(props) {
  const correct = parseInt(props.answer, 10) === parseInt(props.solution, 10);
  return (
    <div className={`${props.isHidden ? "hidden" : "block"}`}>
      <h1>{props.answer}</h1>
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
