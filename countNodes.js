// ------- Code to generate our binary tree -------
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values) {
    const queue = [this];
    let i = 0;
    while (queue.length > 0) {
      let current = queue.shift();
      for (let side of ["left", "right"]) {
        if (!current[side]) {
          if (values[i] !== null) {
            current[side] = new TreeNode(values[i]);
          }
          i++;
          if (i >= values.length) return this;
        }
        if (current[side]) queue.push(current[side]);
      }
    }
    return this;
  }
}

const tree = new TreeNode();
tree.insert([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null, null]);
//              UNDIF
//        1                1
//    1       1         1    1
//  1   1   1   1     1
//
//
// ------- Code to generate our binary tree -------

// -------------- Optimal Code O(logN) -----------------

/* 
1. Find tree hight
2. since this is a complete binary tree then number of node = 2^h where h is tree height
3. Since this is a binary tree the nodes are sorted means left is less than the right
4. binary search will help optmize the solution to logN since we can divide the tree into two half
*/

const checkLevel = (node, currentLevel) => {
  if (!node) {
    return currentLevel;
  }

  let res = currentLevel;

  if (node.left) {
    let temp = checkLevel(node.left, currentLevel + 1);
    res = temp > res ? temp : res;
  }

  return res;
};

const nodeCount = (node) => {
  let level = checkLevel(node, 0);
  let topLevelNodeCount = Math.pow(2, level) - 1;

  // console.log(topLevelNodeCount);
  let left = 0,
    right = Math.pow(2, level),
    indexTofind = Math.round((left + right) / 2);

  let moves = [];

  while (true) {
    if (left > right) {
      break;
    }

    let mid = Math.round((left + right) / 2);
    if (mid >= indexTofind) {
      moves.push("L");
      right--;
      left = mid;
    } else {
      moves.push("R");
      left = mid;
      right--;
    }
  }
  console.log(moves);
};

// -------------- Nomal Code O(N) -----------------
const DFS = (node, result) => {
  if (!node) {
    return;
  }

  result.push(node.value);
  DFS(node.left, result);
  DFS(node.right, result);
};

const countNode = (root) => {
  let result = [];
  DFS(root, result);

  return result;
};

//console.log(countNode(tree));
nodeCount(tree);
