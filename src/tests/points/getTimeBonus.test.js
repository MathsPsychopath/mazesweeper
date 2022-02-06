import getTimeBonus from "../../logic/points/getTimeBonus";

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