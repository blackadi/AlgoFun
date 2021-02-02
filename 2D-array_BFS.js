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
  const queue = [[0, 0]];

  while (queue.length) {
    const currentIndex = queue.shift();
    const row = currentIndex[0];
    const col = currentIndex[1];
    if (
      row < 0 ||
      row >= items.length ||
      col < 0 ||
      col >= items[0].length ||
      seen[row][col]
    ) {
      continue;
    }

    result.push(items[row][col]);
    seen[row][col] = true;

    for (let i = 0; i < direction.length; i++) {
      const currentDir = direction[i];
      const newRow = row + currentDir[0];
      const newCol = col + currentDir[1];

      queue.push([newRow, newCol]);
    }
  }
  return result;
};

const items = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];
console.log(traversalBFS(items));
