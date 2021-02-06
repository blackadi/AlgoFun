const adjacancyList = [
  [1, 3],
  [0],
  [3, 8],
  [0, 4, 5, 2],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2],
];
const adjacancyMatrix = [
  [0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0],
];

const bfs = (adjacancyList, startPoint) => {
  let queue = [];
  let result = [];
  let visited = new Array(adjacancyList.length).fill(false);

  queue.push(startPoint);
  while (queue.length > 0) {
    const currentNode = queue.shift();
    result.push(currentNode);
    visited[currentNode] = true;

    for (let i = 0; i < adjacancyList[currentNode].length; i++) {
      const nextNode = adjacancyList[currentNode][i];
      if (!visited[nextNode]) {
        queue.push(nextNode);
      }
    }
  }

  return result;
};

const bfs_matrix = (adjacancyMatrix, startPoint) => {
  let queue = [],
    result = [],
    visited = new Array(adjacancyMatrix.length)
      .fill(0)
      .map(() => new Array(adjacancyMatrix[0].length).fill(false));
  queue.push(startPoint);

  while (queue.length > 0) {
    const currentNode = queue.shift();
    result.push(currentNode);
    for (let i = 0; i < adjacancyMatrix[currentNode].length; i++) {
      if (adjacancyMatrix[currentNode][i] === 1 && !visited[currentNode][i]) {
        queue.push(i);
        visited[currentNode][i] = true;
        visited[i][currentNode] = true;
      }
    }
  }
  return result;
};

//Test cases for Adjacancy List
console.log(bfs(adjacancyList, 0));

//Test cases for Adjacancy Matrix
console.log(bfs_matrix(adjacancyMatrix, 0));
