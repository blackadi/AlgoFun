class ListNode {
    constructor(val, next = null, child = null) {
      this.val = val;
      this.next = next;
      this.child = child;
    }
  }
  
  // ---- Generate our linked list ----
//   const nodes = [1, [2, 7, [8, 10, 11], 9], 3, 4, [5, 12, 13], 6]
//   const nodes = [1, [2, [3]]]
  const nodes = [];
  
  const buildMultiLevel = function(nodes) {
    const head = new ListNode(nodes[0]);
    let currentNode = head;
  
    for(let i = 1; i < nodes.length; i++) {
      const val = nodes[i];
      let nextNode;
  
      if(Array.isArray(val)) {
        nextNode = buildMultiLevel(val);
        currentNode.child = nextNode;
        continue;
      }
  
      nextNode = new ListNode(val);
      currentNode.next = nextNode;
      currentNode = nextNode;
    }
    
    return head;
  }
  
  let multiLinkedList = buildMultiLevel(nodes);
  
  // ---- Generate our linked list ----
  
  const printListMulti = head => {
    if(!head) {
      return;
    }
  
    console.log(head.val)
  
    if(head.child) {
      printListMulti(head.child);
    }
  
    printListMulti(head.next);
  }
  
  const printList = head => {
    if(!head) {
      return;
    }
  
    console.log(head.val);
    
    printList(head.next);
  }

  const flatten = (currentNode) =>{
      let lastNode, nextNode, hasChild=false;
      if(!currentNode.next){
          return currentNode;
      }

      if(currentNode.child){
        hasChild =true;
          nextNode = currentNode.next;
          currentNode.next = currentNode.child;
          lastNode = flatten(currentNode.child);
          lastNode.next = nextNode;
          currentNode.child = null;
          //if(hasChild)
          flatten(nextNode);
      }

      //if(currentNode){
      //lastNode = flatten(currentNode.next);
      
        //flatten(currentNode.next);
        //else
      //return lastNode;
      return currentNode;
  }

  const flatten2 = head =>{
      let currentNode = head, tail, nextNode = head, last = null;

      while(currentNode){
          nextNode = currentNode.next;
          currentNode.prev = last;
          last = currentNode;
        if(currentNode.child){
            let childNode = currentNode.child;
            while(childNode.next){
                childNode = childNode.next;
            }
            tail = childNode;
            currentNode.next = currentNode.child;
            currentNode.child.prev = currentNode;
            currentNode.child = null;
            childNode.next = nextNode;
            if(nextNode)
            nextNode.prev = tail;
        }
        currentNode = currentNode.next;
      }

      return head;
  }
  

  //printListMulti(multiLinkedList);

  const result = flatten2(multiLinkedList);

  printList(result);