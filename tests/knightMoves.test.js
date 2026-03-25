import { knightMoves } from "../src/knight.js";

test("Possible moves", () => {
  expect(knightMoves([2, 2])).toEqual([
    [3, 4],
    [3, 0],
    [1, 4],
    [1, 0],
    [4, 3],
    [4, 1],
    [0, 3],
    [0, 1],
  ]);
});

test("filters out invalid moves at board edges", () => {
  const result = knightMoves([0, 0]);

  expect(result.length).toBe(2);

  result.forEach(([x, y]) => {
    expect(x).toBeGreaterThanOrEqual(0);
    expect(x).toBeLessThanOrEqual(7);
    expect(y).toBeGreaterThanOrEqual(0);
    expect(y).toBeLessThanOrEqual(7);
  });
});
