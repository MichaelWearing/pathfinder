const FindShortestPath = (grid, start, finish) => {
  if (grid[(start[0], start[1])] === undefined) {
    return "Start node is out of bounds";
  }
  if (grid[(finish[0], finish[1])] === undefined) {
    return "Finish node is out of bounds";
  }

  const queue = [[start[0], start[1], 0]];
  const visited = [];

  const moves = [
    [-1, 0], // Up
    [1, 0], // Down
    [0, -1], // Left
    [0, 1], // Right
];

  while (queue.length > 0) {
    const [x, y, distance] = queue.shift();

    if (x === finish[0] && y === finish[1]) {
      return distance;
    }

    visited.push(`${x},${y}`);

    moves.forEach((move) => {
      const newX = x + move[0];
      const newY = y + move[1];
      if (
        newX < grid.length &&
        newY < grid.length &&
        newX >= 0 &&
        newY >= 0 &&
        grid[newX][newY] !== "#" &&
        !visited.includes(`${newX},${newY}`)
      ) {
        queue.push([newX, newY, distance + 1]);
      }
    });
  }

  return "Unable to find a path :(";
};

const grid = [
  [".", "P", ".", ".", "."],
  [".", "#", "#", "#", "."],
  [".", ".", ".", ".", "."],
  [".", ".", "Q", ".", "."],
  [".", ".", ".", ".", "."],
];

const grid2 = [
  [".", "P", ".", ".", "."],
  ["#", "#", "#", "#", "."],
  [".", ".", ".", ".", "."],
  [".", ".", "Q", ".", "."],
  [".", ".", ".", ".", "."],
];

console.log(FindShortestPath(grid, [0, 1], [3, 2]), "- Answer");

module.exports = FindShortestPath;
