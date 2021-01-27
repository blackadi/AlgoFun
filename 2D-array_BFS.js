const direction = [
  [-1, 0], //UP
  [0, 1], //RIGHT
  [1, 0], //DOWN
  [0, -1], //LEFT
];

const traversalBFS = (items) => {
  let seen = new Array(items.length)
    .fill(0)
    .map(() => new Array(items[0].length).fill(false));

  const result = [];
  const queue = [];
  bfs(items, seen, result, 2, 2, queue); //start as a ring shap from the middle
  return result;
};

bfs = (items, seen, result, col, row, queue) => {
  if (
    row > items.length ||
    row < 0 ||
    col >= items[row].length ||
    col < 0 ||
    seen[row][col]
  ) {
    return;
  }
};

const items = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];
