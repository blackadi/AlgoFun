public class TreeNode {

    int value;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.value = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.value = val;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    TreeNode root;

    BinarySearchTree() {
        this.root = null;
    }

    void insert(int value) {
        TreeNode newNode = new TreeNode(value);

        //If no root create a new root
        if (this.root == null) {
            this.root = newNode;
        } else {
            //check if the current value is less or greater than the root
            TreeNode currentNode = this.root; //start from the root
            //starting of the root keep looping the entire tree
            while (true) {
                if (value > currentNode.value) {
                    //the new node must be at the right of the tree
                    if (currentNode.right == null) {
                        currentNode.right = newNode;
                        return; //to break the loop
                    }
                    //Move to right
                    currentNode = currentNode.right;
                } else {
                    //the node must be at the left of the tree
                    if (currentNode.left == null) {
                        currentNode.left = newNode;
                        return ; //to break the loop
                    }
                    //Move to left
                    currentNode = currentNode.left;
                }
            }
        }
    }

    TreeNode lookup(int value) {
        if (this.root == null) {
            return null;
        }
        TreeNode currentNode = this.root;
        //loop untill no more node can be found
        while (currentNode != null) {
            if (value > currentNode.value) {
                //go right
                currentNode = currentNode.right;
            } else if (value < currentNode.value) {
                //go left
                currentNode = currentNode.left;
            } else if (value == currentNode.value) {
                //value has been found
                return currentNode;
            }
        }
        return null; //the value is not found
    }

    boolean remove(int value) {
        if (this.root == null) {
            return false;
        }

        TreeNode currentNode = this.root;
        TreeNode parentNode = null;
        while (currentNode != null) {
            if (value > currentNode.value) {
                //move right
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (value < currentNode.value) {
                //move left
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value == currentNode.value) {
                //We found the value to remove.

                //First option
                //No right child, move left to the right position
                if (currentNode.right == null) {
                    if (parentNode == null) {
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
                } else if (currentNode.right.left == null) {
                    currentNode.right.left = currentNode.left;
                    if (parentNode == null) {
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
                    TreeNode leftmost = currentNode.right.left;
                    TreeNode leftmostParent = currentNode.right;
                    while (leftmost.left != null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode == null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }

            }
        }
        return true;
    }
}
