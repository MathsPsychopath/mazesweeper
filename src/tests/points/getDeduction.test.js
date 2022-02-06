import getDeduction from "../../logic/points/getDeduction";

describe("getDeduction should return correct deduction based on accuracy and mode", () => {
    test("it should return -5 for any incorrect QuickMode answer", () => {
        expect(getDeduction(2, "QuickMode")).toBe(-5);
        expect(getDeduction(-2, "QuickMode")).toBe(-5);
        expect(getDeduction(-5, "QuickMode")).toBe(-5);
        expect(getDeduction(5, "QuickMode")).toBe(-5);
        expect(getDeduction(99999, "QuickMode")).toBe(-5);
    });
    test("it should not return -5 for in answer in QuickMode error boundary", () => {
        expect(getDeduction(0, "QuickMode")).not.toBe(-5);
        expect(getDeduction(1, "QuickMode")).not.toBe(-5);
        expect(getDeduction(-1, "QuickMode")).not.toBe(-5);
    });
    test("it should return -2 for |distance| = 3 in Normal", () => {
        expect(getDeduction(3, "Normal")).toBe(-2);
        expect(getDeduction(-3, "Normal")).toBe(-2);
    });
    test("it should return -5 for 3 < |distance| <= 5 in Normal", () => {
        expect(getDeduction(4, "Normal")).toBe(-5);
        expect(getDeduction(-4, "Normal")).toBe(-5);
        expect(getDeduction(5, "Normal")).toBe(-5);
        expect(getDeduction(-5, "Normal")).toBe(-5);
    });
    test("it should return -7 for 5 < |distance| <= 7 in Normal", () => {
        expect(getDeduction(6, "Normal")).toBe(-7);
        expect(getDeduction(-6, "Normal")).toBe(-7);
        expect(getDeduction(7, "Normal")).toBe(-7);
        expect(getDeduction(-7, "Normal")).toBe(-7);
    });
    test("it should return -10 for |distance| > 7 in Normal", () => {
        expect(getDeduction(8, "Normal")).toBe(-10);
        expect(getDeduction(-8, "Normal")).toBe(-10);
        expect(getDeduction(9, "Normal")).toBe(-10);
        expect(getDeduction(-9, "Normal")).toBe(-10);
        expect(getDeduction(-999999, "Normal")).toBe(-10);
        expect(getDeduction(999999, "Normal")).toBe(-10);
    });
})