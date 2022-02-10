/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Square from "../../Components/Grid/Square";

describe("Square should be a react component that represents a single unit in the grid/board", () => {
  test("It should change colour when clicked on from white to any other colour", () => {
    render(<Square />);
    const square = screen.getByTestId("square");
    expect([...square.classList]).toEqual(expect.arrayContaining(["bg-white"]));
    userEvent.click(square);
    expect([...square.classList]).not.toEqual(
      expect.arrayContaining(["bg-white"])
    );
  });
  test("It should change colour when clicked from any colour to white", () => {
    //styles cannot be computed outside of className, so ensure that square has border black 1px
    render(<Square />);
    const square = screen.getByTestId("square");
    userEvent.click(square);
    expect([...square.classList]).not.toEqual(
      expect.arrayContaining(["bg-white"])
    );
    userEvent.click(square);
    expect([...square.classList]).toEqual(expect.arrayContaining(["bg-white"]));
  });
});
