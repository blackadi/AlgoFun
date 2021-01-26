//Sample API desgin for heap and priority queue
/***
 * Sequence of methods exposed from this data structure
 * 1. size --> return integer value of the current size of the heap
 * 2. isEmpty --> return boolean value to check if heap has data or not
 * 3. peek --> return integer, get the root element but do not remove it from the heap
 * 4. push --> return void, add item to the heap
 * 5. pop --> return integer, get and remove the root value of the heap and send it back
 ***/
class heaps {
  //make it interchangable between max and min heap
  //by default make it max heap
  constructor(comparator = (parent, child) => parent < child) {
    this._heap = []; //make it a private propertie inside the class
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this._heap[0];
  }

  print() {
    console.log(this._heap);
  }

  //helper funcation to get the index of the parent, left and right
  //another one to swap two values based on there index
  _parent(index) {
    return Math.floor((index - 1) / 2);
  }

  _leftChild(index) {
    return index * 2 + 1;
  }

  _rightChild(index) {
    return index * 2 + 2;
  }

  _swap(index1, index2) {
    let temp = this._heap[index1];
    this._heap[index1] = this._heap[index2];
    this._heap[index2] = temp;
  }

  //helper method to compare two vaules inside the heap based on there index
  _compare(parent, child) {
    return this._comparator(this._heap[parent], this._heap[child]);
  }

  _siftUp() {
    let nodeIndex = this.siz - 1;

    //get parent index
    let parent = this._parent(nodeIndex);

    //loop if node index is bigger than 0 (did not reach the top of the tree yet) and if the parent value is smaller than its child
    while (nodeIndex > 0 && this._compare(parent, nodeIndex)) {
      this._swap(parent, nodeIndex);
      nodeIndex = parent;
      parent = this._parent(nodeIndex);
    }
  }

  push(value) {
    this._heap.push(value); // add value at the end
    this._siftUp();
    return this.peek(); //return the root value
  }

  _siftDown() {
    let parentIndex = 0;

    let left = this._leftChild(parentIndex);
    let right = this._rightChild(parentIndex);

    while (left < this.size() && right < this.size()) {
      let maxIndex = 0;
      if (this._heap[left] > this._heap[right]) {
        maxIndex = left;
      } else {
        maxIndex = right;
      }

      if (this._compare(parentIndex, maxIndex)) {
        //swap
        this._swap(parentIndex, maxIndex);

        parentIndex = maxIndex;
        left = this._leftChild(parentIndex);
        right = this._rightChild(parentIndex);
      }
    }
  }

  pop() {
    //retrive the first value from the stack
    const root = this._heap[0];
    const lastVal = this._heap.pop();
    this._heap[0] = lastVal; //add the last value to the root and check if it the max

    this._siftDown();

    return root;
  }
}

let test = new heaps();
test.push(75);
test.push(50);
test.push(25);
test.push(45);
test.push(35);
test.push(10);
test.push(15);
test.push(20);
test.push(40);
test.push(100);

test.print();

console.log(test.pop());
test.print();
