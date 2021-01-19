class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    //If no root create a new root
    if (this.root === null) {
      this.root = newNode;
    } else {
      //check if the current value is less or greater than the root
      let currentNode = this.root; //start from the root
      //starting of the root keep looping the entire tree
      while (true) {
        if (value > currentNode.value) {
          //the new node must be at the right of the tree
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this; //to break the loop
          }
          //Move to right
          currentNode = currentNode.right;
        } else {
          //the node must be at the left of the tree
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this; //to break the loop
          }
          //Move to left
          currentNode = currentNode.left;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    //loop untill no more node can be found
    while (currentNode) {
      if (value > currentNode.value) {
        //go right
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        //go left
        currentNode = currentNode.left;
      } else if (value === currentNode.value) {
        //value has been found
        return currentNode;
      }
    }
    return null; //the value is not found
  }

  remove(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value > currentNode.value) {
        //move right
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        //move left
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value === currentNode.value) {
        //We found the value to remove.

        //First option
        //No right child, move left to the right position
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            } else if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            }
          }

          //Second option
          //Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            } else if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            }
          }

          //Option three
          //Right child has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

const levelOrder = (node, foundNodes) => {
  if (node === null) {
    return;
  }
  let currentFoundNodes = [];
  foundNodes.push(node.value);

  if (node.left) {
    currentFoundNodes.push(node.left.value);
  }

  if (node.right) {
    currentFoundNodes.push(node.right.value);
  }

  foundNodes.push(currentFoundNodes);
};

const tree = new BinarySearchTree();
tree.insert(60);
tree.insert(40);
tree.insert(90);
tree.insert(30);
tree.insert(50);
tree.insert(45);
tree.insert(55);
tree.insert(80);
tree.insert(170);
tree.insert(51);
//             60
//      40            90
//  30      50     80      170
//       45    55
//           51

//rightSideView
const rightSideView = (root) => {
  if (root === null) {
    return [];
  }
  let res = []; // store values
  let q = [root]; //store tree children in order queue

  let counter = 0,
    length = q.length,
    resultWithLevels = [];

  while (q.length) {
    let node = q.shift(); //retreive the first element from the queue
    res.push(node.value); // push val to stack
    counter++;

    if (node.left) {
      q.push(node.left);
    }
    if (node.right) {
      q.push(node.right);
    }

    if (counter === length) {
      counter = 0;
      resultWithLevels.push(res[length - 1]);
      length = q.length;
      res = [];
    }
  }

  return resultWithLevels;
};

//DFS
const DFS = (node, currentLevel, result) => {
  if (!node) {
    return;
  }

  if (currentLevel >= result.length) {
    result.push(node.value);
  }

  if (node.right) {
    DFS(node.right, currentLevel + 1, result);
  }
  if (node.left) {
    DFS(node.left, currentLevel + 1, result);
  }
};

//right side DFS
const rightSideViewDFS = (root) => {
  let result = [];
  DFS(root, 0, result);
  return result;
};

//console.log(rightSideView(tree.root));
console.log(rightSideViewDFS(tree.root));
