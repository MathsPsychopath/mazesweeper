import getInitialPoints from "../../logic/points/getInitialPoints";

describe("getInitialPoints should return point value for board", () => {
    test("it should return 5 for a 10x10 board", () => {
        expect(getInitialPoints("10x10")).toBe(5);
    });
    test("it should return 10 for a 16x16 board", () => {
        expect(getInitialPoints("16x16")).toBe(10);
    });
    test("it should return 15 for a 16x30 board", () => {
        expect(getInitialPoints("16x30")).toBe(15);
    });
})