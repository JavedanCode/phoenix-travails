import { knightTravails } from "../src/knight";
test("returns single node when start equals end", () => {
  const result = knightTravails([3, 3], [3, 3]);
  expect(result).toEqual([[3, 3]]);
});

test("finds shortest path in one move", () => {
  const result = knightTravails([0, 0], [1, 2]);

  expect(result).toEqual([
    [0, 0],
    [1, 2],
  ]);
});

test("every step in path is a valid knight move", () => {
  const result = knightTravails([0, 0], [3, 3]);

  for (let i = 0; i < result.length - 1; i++) {
    const [x1, y1] = result[i];
    const [x2, y2] = result[i + 1];

    const dx = Math.abs(x1 - x2);
    const dy = Math.abs(y1 - y2);

    const isValidMove = (dx === 2 && dy === 1) || (dx === 1 && dy === 2);

    expect(isValidMove).toBe(true);
  }
});

test("path starts at start and ends at target", () => {
  const start = [0, 0];
  const end = [7, 7];

  const result = knightTravails(start, end);

  expect(result[0]).toEqual(start);
  expect(result[result.length - 1]).toEqual(end);
});

test("returns shortest path length", () => {
  const result = knightTravails([0, 0], [7, 7]);

  expect(result.length).toBe(7);
});
