const numOfMinutes = (n, headID, manager, informTime) => {
  let maxNumberOfMinutes = 0;

  if (n === 1) {
    return 0; //if company has only one employee the time needed is zero
  }

  let result = [];
  let seen = new Array(manager.length).fill(false);
  let adjacencyList = new Array(manager.length).fill(0).map(() => new Array(0));

  for (let i = 0; i < manager.length; i++) {
    if (manager[i] !== -1) {
      adjacencyList[manager[i]].push(i);
      //adjacencyList[i].push(manager[i]); //Since its directed graph no need for this line otherwise add it
    }
  }

  result = dfs(
    adjacencyList,
    result,
    seen,
    headID,
    maxNumberOfMinutes,
    informTime
  );

  return result;
};

const dfs = (graph, result, seen, currentNode, prevTimeValue, informTime) => {
  result.push(currentNode);
  seen[currentNode] = true;

  let timeCost = 0,
    currentMax = 0;
  const nextNode = graph[currentNode];
  for (let i = 0; i < nextNode.length; i++) {
    const connection = nextNode[i];
    if (!seen[connection]) {
      timeCost = informTime[currentNode] + prevTimeValue;
      timeCost = Math.max(
        dfs(graph, result, seen, connection, timeCost, informTime),
        timeCost
      );
    }
    currentMax = Math.max(timeCost, currentMax);
  }

  return currentMax;
};

// const n = 6,
//   headID = 2,
//   manager = [2, 2, -1, 2, 2, 2],
//   informTime = [0, 0, 1, 0, 0, 0];

// const n = 1,
//   headID = 0,
//   manager = [-1],
//   informTime = [0];

// const n = 7,
//   headID = 6,
//   manager = [1, 2, 3, 4, 5, 6, -1],
//   informTime = [0, 6, 5, 4, 3, 2, 1];

// const n = 15,
//   headID = 0,
//   manager = [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
//   informTime = [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];

// const n = 4,
//   headID = 2,
//   manager = [3, 3, -1, 2],
//   informTime = [0, 0, 162, 914];

// const n = 8,
//   headID = 4,
//   manager = [2, 2, 4, 6, -1, 4, 4, 5],
//   informTime = [0, 0, 4, 0, 7, 3, 6, 0];

const n = 8;
headID = 0;
manager = [-1, 5, 0, 6, 7, 0, 0, 0];
informTime = [89, 0, 0, 0, 0, 523, 241, 519];

console.log(numOfMinutes(n, headID, manager, informTime));
