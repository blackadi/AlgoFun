const INF = 2147483647;
const WALL = -1;
const GATE = 0;

const direction = [
  [-1, 0], // UP
  [0, 1], // RIGHT
  [1, 0], // DOWN
  [0, -1], //LEFT
];

const walls_gates_count = (grid) => {
  if (grid.length === 0) {
    return [];
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === GATE) {
        //grid = bfs(grid, [[row, col]]);
        gird = dfs(grid, [row, col], 0);
      }
    }
  }

  return grid;
};

const bfs = (grid, queue) => {
  let queueLevel = queue.length;

  while (queue.length > 0) {
    if (queueLevel === 0) {
      queueLevel = queue.length;
    }

    let currentPos = queue.shift();
    queueLevel--;
    let row = currentPos[0];
    let col = currentPos[1];

    for (let i = 0; i < direction.length; i++) {
      const currentDir = direction[i];
      const newRow = currentDir[0] + row;
      const newCol = currentDir[1] + col;

      if (
        newRow < 0 ||
        newRow >= grid.length ||
        newCol < 0 ||
        newCol >= grid[0].length ||
        grid[newRow][newCol] === WALL ||
        grid[newRow][newCol] === GATE
      ) {
        continue;
      }

      if (grid[newRow][newCol] === INF) {
        grid[newRow][newCol] = grid[row][col] === INF ? 1 : grid[row][col] + 1; //previus value + 1
        queue.push([newRow, newCol]);
      } else {
        if (grid[row][col] < grid[newRow][newCol]) {
          grid[newRow][newCol] = grid[row][col] + 1;
          queue.push([newRow, newCol]);
        }
      }
    }
  }

  return grid;
};

//DFS way
const dfs = (grid, startPoint, counter) => {
  let row = startPoint[0];
  let col = startPoint[1];
  counter++;
  for (let i = 0; i < direction.length; i++) {
    const currentDir = direction[i];
    const newRow = row + currentDir[0];
    const newCol = col + currentDir[1];

    if (
      newRow < 0 ||
      newRow >= grid.length ||
      newCol < 0 ||
      newCol >= grid[0].length ||
      grid[newRow][newCol] === WALL ||
      grid[newRow][newCol] === GATE
    ) {
      continue;
    }

    if (grid[newRow][newCol] === INF) {
      grid[newRow][newCol] = counter;
      dfs(grid, [newRow, newCol], counter);
    } else if (grid[newRow][newCol] > counter) {
      grid[newRow][newCol] = counter;
      dfs(grid, [newRow, newCol], counter);
    }
  }
  return grid;
};

/***
 * Test Cases
 */

const grid = [
  [INF, WALL, GATE, INF],
  [INF, INF, INF, WALL],
  [INF, WALL, INF, WALL],
  [GATE, WALL, INF, INF],
];

// const grid = [
//   [INF, WALL, GATE, INF],
//   [WALL, INF, INF, WALL],
//   [INF, WALL, INF, WALL],
//   [GATE, WALL, INF, INF],
// ];

// const grid = [
//   [GATE, WALL, GATE, INF],
//   [WALL, INF, INF, WALL],
//   [INF, INF, INF, INF],
//   [GATE, INF, INF, GATE],
// ];

// const grid = [
//   [INF, WALL, WALL, INF, WALL, GATE],
//   [WALL, GATE, WALL, GATE, INF, WALL],
//   [WALL, INF, INF, INF, WALL, INF],
//   [INF, WALL, INF, INF, GATE, WALL],
//   [INF, INF, WALL, INF, INF, WALL],
//   [WALL, GATE, INF, WALL, INF, INF],
// ];

console.log(walls_gates_count(grid));
