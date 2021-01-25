class heaps {
  constructor() {
    this.tree = [];
  }

  inseart(value) {
    this.tree.push(value); // add value at the end
    let newIndex = this.tree.length - 1;
    if (newIndex > 0) {
      //get parent parent = floor((index - 1)/2) index here is the length - 1
      let parent = Math.floor((newIndex - 1) / 2);

      while (newIndex > 0) {
        if (this.tree[parent] < this.tree[newIndex]) {
          //swap
          let temp = this.tree[parent];
          this.tree[parent] = this.tree[newIndex];
          this.tree[newIndex] = temp;
        } else {
          break;
        }
        newIndex = parent;
        parent = Math.floor((newIndex - 1) / 2);
      }
    }

    return this.tree[0];
  }

  remove() {
    //retrive the first value from the stack
    const root = this.tree[0];
    const lastVal = this.tree.pop();
    this.tree[0] = lastVal; //add the last value to the root and check if it the max
    let parentIndex = 0;

    let left = parentIndex * 2 + 1;
    let right = parentIndex * 2 + 2;

    while (left < this.tree.length && right < this.tree.length) {
      let maxIndex = 0;
      if (this.tree[left] > this.tree[right]) {
        maxIndex = left;
      } else {
        maxIndex = right;
      }

      if (this.tree[maxIndex] > this.tree[parentIndex]) {
        //swap
        const temp = this.tree[parentIndex];
        this.tree[parentIndex] = this.tree[maxIndex];
        this.tree[maxIndex] = temp;
        parentIndex = maxIndex;
        left = parentIndex * 2 + 1;
        right = parentIndex * 2 + 2;
      }
    }
    return root;
  }
}

let test = new heaps();
test.inseart(75);
test.inseart(50);
test.inseart(25);
test.inseart(45);
test.inseart(35);
test.inseart(10);
test.inseart(15);
test.inseart(20);
test.inseart(40);
test.inseart(100);

console.log(test.tree);

console.log(test.remove());
console.log(test.tree);
