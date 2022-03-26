import isValidDist from "../../logic/points/isValidDist";

describe("isValidDist should return T/F based on distance from correct answer", () => {
  test("it should return true when |distance| <= 1 if on QuickMode", () => {
    const input = [
      [0, "QuickMode"],
      [1, "QuickMode"],
      [2, "QuickMode"],
      [3, "QuickMode"],
      [9999, "QuickMode"],
      [-1, "QuickMode"],
      [-5, "QuickMode"],
      [-9999999, "QuickMode"],
    ];
    const output = [true, true, false, false, false, true, false, false];
    for (let i = 0; i < 8; i++) {
      expect(isValidDist.apply(null, input[i])).toBe(output[i]);
    }
  });
  test("it should return true when |distance| <= 2 if on Normal", () => {
    const input = [
      [0, "Normal"],
      [1, "Normal"],
      [2, "Normal"],
      [3, "Normal"],
      [999, "Normal"],
      [-1, "Normal"],
      [-2, "Normal"],
      [-3, "Normal"],
    ];
    const output = [true, true, true, false, false, true, true, false];
    for (let i = 0; i < 8; i++) {
      expect(isValidDist.apply(null, input[i])).toBe(output[i]);
    }
  });
  test("it should return true when |distance| <= 3 if on Chill and Casual - boundary", () => {
    const input = [
      [-3, "Chill & Casual"],
      [-2, "Chill & Casual"],
      [-1, "Chill & Casual"],
      [0, "Chill & Casual"],
      [1, "Chill & Casual"],
      [2, "Chill & Casual"],
      [3, "Chill & Casual"],
    ];
    for (let i = 0; i < 7; i++)
      expect(isValidDist.apply(null, input[i])).toBe(true);
  });
  test("it should return true when |distance| <= 3 if on Chill and Casual - erroneous", () => {
    const input = [
      [-4, "Chill & Casual"],
      [4, "Chill & Casual"],
      [50, "Chill & Casual"],
      [-50, "Chill & Casual"],
    ];
    input.forEach((args) => expect(isValidDist.apply(null, args)).toBe(false));
  });
});
