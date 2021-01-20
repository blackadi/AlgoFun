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

const getTreeHieght = (node) => {
  let counter = 0;
  while (node.left !== null) {
    counter++;
    node = node.left;
  }

  return counter;
};

const nodeCount = (root) => {
  if (!root) {
    return 0;
  }

  let hieght = getTreeHieght(root);
  if (hieght === 0) return 1;
  const upperTreeNodeCount = Math.pow(2, hieght) - 1;
  let left = 0,
    right = upperTreeNodeCount;

  while (left < right) {
    let indexToFind = Math.ceil((left + right) / 2);
    if (nodeExists(root, hieght, indexToFind)) {
      left = indexToFind;
    } else {
      right = indexToFind - 1;
    }
  }

  return left + upperTreeNodeCount;
};

const nodeExists = (node, hieght, indexToFind) => {
  let counter = 0;
  let left = 0,
    right = Math.pow(2, hieght) - 1;

  while (counter < hieght) {
    const midOfNode = Math.ceil((left + right) / 2);
    if (midOfNode >= indexToFind) {
      node = node.left;
      right = midOfNode - 1;
    } else {
      node = node.right;
      left = midOfNode;
    }
    counter++;
  }

  return node !== null;
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
console.log(nodeCount(tree));
