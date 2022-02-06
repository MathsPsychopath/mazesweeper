import isValidDist from "../../logic/points/isValidDist";
import getTimeBonus from "../../logic/points/getTimeBonus";
import getDeduction from "../../logic/points/getDeduction";
import getInitialPoints from "../../logic/points/getInitialPoints";
import pointCalculator from "../../logic/points/pointCalculator";

describe("isValidDist should return T/F based on distance from correct answer", () => {
    test("it should return true when |distance| <= 1 if on QuickMode", () => {
        const input = [
            [0,"QuickMode"],     [1,"QuickMode"], 
            [2,"QuickMode"],     [3,"QuickMode"], 
            [9999, "QuickMode"], [-1, "QuickMode"],
            [-5, "QuickMode"],   [-9999999, "QuickMode"]
        ];
        const output = [true, true, false, false, false, true, false, false];
        for (let i = 0; i < 8; i++){
            expect(isValidDist.apply(null, input[i])).toBe(output[i]);
        }
    });
    test("it should return true when |distance| <= 2 if on Normal", () => {
        const input = [
            [0, "Normal"],   [1, "Normal"],
            [2, "Normal"],   [3, "Normal"],
            [999, "Normal"], [-1, "Normal"],
            [-2, "Normal"],  [-3, "Normal"],
        ];
        const output = [true, true, true, false, false, true, true, false];
        for (let i = 0; i < 8; i++){
            expect(isValidDist.apply(null, input[i])).toBe(output[i]);
        }
    });
    test("it should return true when |distance| <= 3 if on Chill and Casual - boundary", () => {
        const input = [
            [-3, "Chill and Casual"],
            [-2, "Chill and Casual"],
            [-1, "Chill and Casual"],
            [0 , "Chill and Casual"],
            [1 , "Chill and Casual"],
            [2 , "Chill and Casual"],
            [3 , "Chill and Casual"]
        ];
        for (let i = 0; i < 7; i++) expect(isValidDist.apply(null, input[i])).toBe(true);
    });
    test("it should return true when |distance| <= 3 if on Chill and Casual - erroneous", () => {
        const input = [
            [-4 , "Chill and Casual"],
            [4  , "Chill and Casual"],
            [50 , "Chill and Casual"],
            [-50, "Chill and Casual"]
        ];
        input.forEach(args => expect(isValidDist.apply(null, args)).toBe(false));
    });
})

describe("getTimeBonus should return correct points based on time taken to solve", () => {
    test("it should return +5 if time < 30s", () => {
        for (let i = 0; i < 30; i+=5){
            expect(getTimeBonus(i)).toBe(5);
        }
        for (let i = 30; i < 120; i+=15){
            expect(getTimeBonus(i)).not.toBe(5);
        }
    });
    test("it should return +3 if 30s <= time < 60s", () => {
        for(let i = 0; i < 30; i+=5){
            expect(getTimeBonus(i)).not.toBe(3);
        }
        for(let i = 30; i < 60; i+=5){
            expect(getTimeBonus(i)).toBe(3);
        }
        for(let i = 60; i < 120; i+=15){
            expect(getTimeBonus(i)).not.toBe(3);
        }
    });
    test("it should return +1 if time >= 60s", () => {
        for(let i = 0; i < 60; i+=5){
            expect(getTimeBonus(i)).not.toBe(1);
        }
        for(let i = 60; i < 120; i+=5){
            expect(getTimeBonus(i)).toBe(1);
        }
    });
})

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

describe("pointCalculator should return the correct points based on README rules", () => {
    test("it should return 10 for 10x10 board and 20s time", () => {
        expect(pointCalculator("10x10", 20)).toBe(10);
    })
    test("it should return 8 for 10x10 board and 30s time", () => {
        expect(pointCalculator("10x10", 30)).toBe(8);
    })
    test("it should return 8 for 10x10 board and 45s time", () => {
        expect(pointCalculator("10x10", 45)).toBe(10);
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