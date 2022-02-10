import { render, screen } from "@testing-library/react";
import Grid from "./../../Components/Grid/Grid";

describe("Grid should be a react component that is a container to many Square components", () => {
  //size is the number of Square components, in dimension form or raw value
  test("It should have a default size of 10x10", () => {
    render(<Grid />);
    const grid = screen.getByTestId("grid");
    expect(grid.childElementCount).toEqual(10);
    grid.childNodes.forEach((row) => {
      expect(row.childElementCount).toEqual(10);
    });
  });

  test("It should accept 16x16 grid", () => {
    render(<Grid size="16x16" />);
    const grid = screen.getByTestId("grid");
    expect(grid.childElementCount).toEqual(16);
    grid.childNodes.forEach((row) => {
      expect(row.childElementCount).toEqual(16);
    });
  });

  test("It should accept 16x30 grid", () => {
    render(<Grid size="16x30" />);
    const grid = screen.getByTestId("grid");
    expect(grid.childElementCount).toEqual(16);
    grid.childNodes.forEach((row) => {
      expect(row.childElementCount).toEqual(30);
    });
  });

  test("It should replace a 0x0 grid with 10x10", () => {
    render(<Grid size="0x0" />);
    const grid = screen.getByTestId("grid");
    expect(grid.childElementCount).toEqual(10);
    grid.childNodes.forEach((row) => {
      expect(row.childElementCount).toEqual(10);
    });
  });

  test("It should replace a 11x11 grid with 10x10", () => {
    render(<Grid size="11x11" />);
    const grid = screen.getByTestId("grid");
    expect(grid.childElementCount).toEqual(10);
    grid.childNodes.forEach((row) => {
      expect(row.childElementCount).toEqual(10);
    });
  });

  test("It should replace a 9999999x9999999 grid with 10x10", () => {
    render(<Grid size="9999999x9999999" />);
    const grid = screen.getByTestId("grid");
    expect(grid.childElementCount).toEqual(10);
    grid.childNodes.forEach((row) => {
      expect(row.childElementCount).toEqual(10);
    });
  });

  test("It should replace a -1x-1 grid with 10x10", () => {
    render(<Grid size="-1x-1" />);
    const grid = screen.getByTestId("grid");
    expect(grid.childElementCount).toEqual(10);
    grid.childNodes.forEach((row) => {
      expect(row.childElementCount).toEqual(10);
    });
  });
});
