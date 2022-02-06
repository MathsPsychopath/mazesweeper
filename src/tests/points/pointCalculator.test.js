import pointCalculator from "../../logic/points/pointCalculator";

describe("pointCalculator should return the correct points based on README rules", () => {
    test("it should return 10 for 10x10 board and 20s time", () => {
        expect(pointCalculator("10x10", 20)).toBe(10);
    })
    test("it should return 8 for 10x10 board and 30s time", () => {
        expect(pointCalculator("10x10", 30)).toBe(8);
    })
    test("it should return 8 for 10x10 board and 45s time", () => {
        expect(pointCalculator("10x10", 45)).toBe(8);
    })
    test("it should return 6 for 10x10 board and 60s time", () => {
        expect(pointCalculator("10x10", 60)).toBe(6);
    })
    test("it should return 6 for 10x10 board and 100s time", () => {
        expect(pointCalculator("10x10", 100)).toBe(6);
    })
    test("it should return 15 for 16x16 board and 20s time", () => {
        expect(pointCalculator("16x16", 20)).toBe(15);
    })
    test("it should return 13 for 16x16 board and 30s time", () => {
        expect(pointCalculator("16x16", 30)).toBe(13);
    })
    test("it should return 13 for 16x16 board and 45s time", () => {
        expect(pointCalculator("16x16", 45)).toBe(13);
    })
    test("it should return 11 for 16x16 board and 60s time", () => {
        expect(pointCalculator("16x16", 60)).toBe(11);
    })
    test("it should return 11 for 16x16 board and 100s time", () => {
        expect(pointCalculator("16x16", 100)).toBe(11);
    })
    test("it should return 20 for 16x30 board and 20s time", () => {
        expect(pointCalculator("16x30", 20)).toBe(20);
    })
    test("it should return 18 for 16x30 board and 30s time", () => {
        expect(pointCalculator("16x30", 30)).toBe(18);
    })
    test("it should return 18 for 16x30 board and 45s time", () => {
        expect(pointCalculator("16x30", 45)).toBe(18);
    })
    test("it should return 16 for 16x30 board and 60s time", () => {
        expect(pointCalculator("16x30", 60)).toBe(16);
    })
    test("it should return 16 for 16x30 board and 100s time", () => {
        expect(pointCalculator("16x30", 100)).toBe(16);
    })
})