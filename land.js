const direction = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const bfs = (grid, startRow, startCol) => {
  let seen = new Array(grid.length)
    .fill(0)
    .map(() => new Array(grid[0].length).fill(false));

  let res = false;
  const queue = [[startRow, startCol]];

  while (queue.length) {
    const currentNode = queue.shift();
    let row = currentNode[0];
    let col = currentNode[1];

    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      seen[row][col] ||
      grid[row][col] === "0"
    ) {
      continue;
    }

    //add to seen
    res = true;
    grid[row][col] = "0"; //Change land to water so we do not count it again (already seen so no need to keep it so we do not need to use another scallign data structure)
    seen[row][col] = true;

    //Move
    for (let i = 0; i < direction.length; i++) {
      const currentDir = direction[i];
      const newRow = row + currentDir[0];
      const newCol = col + currentDir[1];

      queue.push([newRow, newCol]);
    }
  }
  return res;
};

//Solving the same problem with DFS
const traversalDFS = (grid) => {
  let seen = new Array(grid.length)
    .fill(0)
    .map(() => new Array(grid[0].length).fill(false));

  let counter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] !== "0") {
        dfs(grid, seen, i, j);
        counter++;
      }
    }
  }

  return counter;
};
const dfs = (grid, seen, row, col) => {
  if (
    row < 0 ||
    col < 0 ||
    row >= grid.length ||
    col >= grid[0].length ||
    seen[row][col] ||
    grid[row][col] === "0"
  ) {
    return;
  }

  seen[row][col] = true;
  grid[row][col] = "0";

  for (let i = 0; i < direction.length; i++) {
    const currentDir = direction[i];
    dfs(grid, seen, row + currentDir[0], col + currentDir[1]);
  }
};

const numIslands = (grid) => {
  if (grid.length === 0) return 0;
  //find start point
  //   let seenLand = new Array(grid.length)
  //       .fill(0)
  //       .map(() => new Array(grid[0].length).fill(false));
  let counter = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; j < grid[row].length; j++) {
      if (grid[row][col] !== "0") {
        let res = bfs(grid, row, col);
        if (res) {
          counter++;
        }
      }
    }
  }
  return counter;
};

// const items = [
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "0", "1", "0"],
//   ["1", "1", "0", "0", "1"],
//   ["0", "0", "0", "1", "1"],
// ];

// const items = [
//   ["0", "1", "0", "1", "0"],
//   ["1", "0", "1", "0", "1"],
//   ["0", "1", "1", "1", "0"],
//   ["1", "0", "1", "0", "1"],
// ];

const items = [["1", "1"]];

// const items = [
//   ["1", "1", "0", "0", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"],
// ];

//console.log(numIslands(items));
console.log(traversalDFS(items));
