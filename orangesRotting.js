const direction = [
  [-1, 0], //UP
  [0, 1], //Right
  [1, 0], //Down
  [0, -1], //Left
];

const orangesRotting = (grid) => {
  let counter = 0;
  let startPoints = [];
  let freshOrangesCount = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 2) {
        startPoints.push([row, col]);
      }

      if (grid[row][col] === 1) {
        freshOrangesCount++;
      }
    }
  }

  let rottingOranges = bfs(grid, startPoints, freshOrangesCount);

  return rottingOranges;
};

const bfs = (grid, queue, freshOrangesCount) => {
  let queueLevel = queue.length;
  let minutes = 0;
  //let queue = startPoints;

  while (queue.length > 0) {
    if (queueLevel === 0) {
      queueLevel = queue.length;
      minutes++;
    }

    const currentPos = queue.shift();
    queueLevel--;
    let row = currentPos[0];
    let col = currentPos[1];

    //Check adjacent oranges
    for (let i = 0; i < direction.length; i++) {
      const currentDir = direction[i];
      const newRow = row + currentDir[0];
      const newCol = col + currentDir[1];

      if (
        newRow < 0 ||
        newRow >= grid.length ||
        newCol < 0 ||
        newCol >= grid[0].length
      ) {
        continue;
      }

      if (grid[newRow][newCol] === 1) {
        queue.push([newRow, newCol]);
        grid[newRow][newCol] = 2;
        freshOrangesCount--;
      }
    }
  }

  if (freshOrangesCount !== 0) {
    return -1;
  } else return minutes;
};

// const grid = [
//   [2, 1, 1],
//   [1, 1, 0],
//   [0, 1, 1],
// ];

// const grid = [
//   [2, 1, 1, 0, 0],
//   [1, 1, 1, 0, 0],
//   [0, 1, 1, 1, 1],
//   [0, 1, 0, 0, 1],
// ];

// const grid = [
//   [2, 0, 1, 0, 0],
//   [1, 1, 1, 0, 2],
//   [0, 1, 1, 1, 1],
//   [0, 1, 0, 0, 1],
// ];

const grid = [
  [1, 1, 0, 0, 0],
  [2, 1, 0, 0, 0],
  [0, 0, 0, 1, 2],
  [0, 1, 0, 0, 1],
];
console.log(orangesRotting(grid));
