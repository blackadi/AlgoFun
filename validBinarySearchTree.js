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

const tree = new TreeNode(10);
tree.insert([
  5,
  20,
  3,
  7,
  15,
  30,
  2,
  4,
  6,
  8,
  14,
  16,
  22,
  40,
  1,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  33,
  50,
  null,
  null,
  null,
  null,
  null,
  60,
  null,
  70,
]);
//                      10
//         5                              20
//    3          7                15               30
//  2   4      6    8          14     16       22      40
//1                                                  33   50
//                                                            60
//                                                               70
const isValidBST = (root) => {
  if (!root) return true;

  return dfs(root, -Infinity, Infinity);
};

const dfs = (node, min, max) => {
  if (node.value <= min || node.value >= max) {
    return false;
  }

  if (node.left) {
    if (!dfs(node.left, min, node.value)) {
      return false;
    }
  }

  if (node.right) {
    if (!dfs(node.right, node.value, max)) {
      return false;
    }
  }

  return true;
};

console.log(isValidBST(tree));
