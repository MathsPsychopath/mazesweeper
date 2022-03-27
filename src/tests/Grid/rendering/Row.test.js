import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Row from "../../../Components/Grid/Row";

const INITIAL_COLOR = "bg-white";

export const testIfOnlySquares = (row) => {
  let count = 0;
  [...row.childNodes].forEach((node) => {
    expect([...node.classList]).toEqual(
      expect.arrayContaining([INITIAL_COLOR])
    );

    userEvent.click(node);
    expect([...node.classList]).not.toEqual(
      expect.arrayContaining([INITIAL_COLOR])
    );
    count++;
  });
  return count;
};

describe("Row should be a react component that contains a number of Square Components", () => {
  test("It should have a default of 10 columns", () => {
    render(<Row isDisplay />);
    const row = screen.getByTestId("row");
    expect(row.childElementCount).toEqual(10);
  });

  test("It should have only Square Components", () => {
    render(
      <Row
        reveal={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
        row={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
      />
    );
    const row = screen.getByTestId("row");
    testIfOnlySquares(row);
  });

  test("It should also accept 16 column length", () => {
    render(
      <Row
        columns={16}
        reveal={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
        row={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
      />
    );
    const row = screen.getByTestId("row");
    expect(testIfOnlySquares(row)).toEqual(16);
  });

  test("It should accept a 30 column length", () => {
    render(
      <Row
        columns={30}
        reveal={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
        row={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
      />
    );
    const row = screen.getByTestId("row");
    expect(testIfOnlySquares(row)).toEqual(30);
  });

  test("It should have 10 columns for every other column length argument: 0", () => {
    render(
      <Row
        columns={0}
        reveal={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
        row={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
      />
    );
    const row = screen.getByTestId("row");
    expect(testIfOnlySquares(row)).toEqual(10);
  });

  test("It should have 10 columns for every other column length argument: -1", () => {
    render(
      <Row
        columns={-1}
        reveal={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
        row={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
      />
    );
    const row = screen.getByTestId("row");
    expect(testIfOnlySquares(row)).toEqual(10);
  });

  test("It should have 10 columns for every other column length argument: 9999", () => {
    render(
      <Row
        columns={9999}
        reveal={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
        row={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
      />
    );
    const row = screen.getByTestId("row");
    expect(testIfOnlySquares(row)).toEqual(10);
  });
});
