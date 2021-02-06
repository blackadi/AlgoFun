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

const dfs_adfacancyList = (graph) => {
  let result = [];
  let seen = new Array(graph.length).fill(false);

  dfs(graph, 7, seen, result);

  return result;
};

const dfs = (graph, currentNode, seen, result) => {
  result.push(currentNode);
  seen[currentNode] = true;
  let nextNode = graph[currentNode];

  for (let i = 0; i < nextNode.length; i++) {
    const connection = nextNode[i];
    if (!seen[connection]) {
      dfs(graph, connection, seen, result);
    }
  }

  return result;
};

const dfs_adfacancyMatrix = (graph) => {
  let result = [];
  let seen = new Array(graph.length).fill(false);

  dfsMatrix(graph, 7, seen, result);

  return result;
};

const dfsMatrix = (graph, currentNode, seen, result) => {
  result.push(currentNode);
  seen[currentNode] = true;

  const nextNode = graph[currentNode];

  for (let i = 0; i < nextNode.length; i++) {
    if (nextNode[i] === 1 && !seen[i]) {
      dfsMatrix(graph, i, seen, result);
    }
  }

  return result;
};

console.log(dfs_adfacancyList(adjacancyList));
console.log(dfs_adfacancyMatrix(adjacancyMatrix));
