const direction = [
  [-1, 0], //Up
  [0, 1], //Right
  [1, 0], //Down
  [0, -1], //Left
];

const traversalDFS = (items) => {
  //Create identical arry sizr of the items array and fill it with false as seen value
  let seen = new Array(items.length)
    .fill(0)
    .map(() => new Array(items[0].length).fill(false));

  const result = [];

  dfs(items, seen, result, 0, 0);

  return result;
};

const dfs = (items, seen, result, row, col) => {
  if (
    row >= items.length ||
    row < 0 ||
    col < 0 ||
    col >= items[row].length ||
    seen[row][col]
  ) {
    return;
  }

  result.push(items[row][col]);
  seen[row][col] = true;
  //Move up, right, down, left
  for (let i = 0; i < direction.length; i++) {
    const currentDir = direction[i];
    dfs(items, seen, result, row + currentDir[0], col + currentDir[1]);
  }
};

const items = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

console.log(traversalDFS(items));
