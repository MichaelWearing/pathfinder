const FindShortestPath = require("./Pathfinder");

const grid = [
  [".", "P", ".", ".", "."],
  [".", "#", "#", "#", "."],
  [".", ".", ".", ".", "."],
  [".", ".", "Q", ".", "."],
  [".", ".", ".", ".", "."],
];

test("Is able to get from the Start point to the Finish point", () => {
  expect(FindShortestPath(grid, [0, 1], [3, 2])).toBe(6);
});

const blockedGrid = [
  [".", "P", ".", ".", "."],
  ["#", "#", "#", "#", "#"],
  [".", ".", ".", ".", "."],
  [".", ".", "Q", ".", "."],
  [".", ".", ".", ".", "."],
];

test("Fails correctly if you cannot get from the Start point to the End point", () => {
  expect(FindShortestPath(blockedGrid, [0, 1], [3, 2])).toBe(
    "Unable to find a path :("
  );
});

const startNodeOutsideOfGrid = [
  [".", ".", ".", ".", "."],
  [".", "#", "#", "#", "."],
  [".", ".", ".", ".", "."],
  [".", ".", "Q", ".", "."],
  [".", ".", ".", ".", "."],
];

test("If start noode is outside of grid, expect to fail correctly", () => {
  expect(FindShortestPath(startNodeOutsideOfGrid, [0, 5], [3, 2])).toBe(
    "Start node is out of bounds"
  );
});

const finishNodeOutsideOfGrid = [
  [".", "P", ".", ".", "."],
  [".", "#", "#", "#", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
];

test("If finish noode is outside of grid, expect to fail correctly", () => {
  expect(FindShortestPath(finishNodeOutsideOfGrid, [0, 1], [5, 5])).toBe(
    "Finish node is out of bounds"
  );
});

const emptyGrid = [];

test("Fail correctly if an empty grid is provided", () => {
  expect(FindShortestPath(emptyGrid, [0, 1], [5, 5])).toBe(
    "Please make sure to pass a valid grid"
  );
});
