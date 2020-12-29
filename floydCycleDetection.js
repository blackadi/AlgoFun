class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  // ---- Generate our linked list ----
//   const linkedList = [8,7,6,5,4,3,2,1].reduce((acc, val) => new ListNode(val, acc), null);
  const linkedList = [].reduce((acc, val) => new ListNode(val, acc), null);
  
//   let curr = linkedList, cycleNode;
//   while(curr.next !== null) {
//     if(curr.val === 3) {
//       cycleNode = curr;
//     }
  
//     curr = curr.next;
//   }
  
//   curr.next = cycleNode;

  //Folyd
  const cycleDetection = head => {
      let tortoise=head, hare=head;

      while(hare){

        if(!hare || !hare.next){
            return null;
        }
        
        tortoise = tortoise.next;
        hare = hare.next.next;

        if(tortoise === hare){
            //found cycle
            tortoise=head;
            while(tortoise !== hare){
                tortoise = tortoise.next;
                hare = hare.next;
            }

            return tortoise;
        }
      }

      return null;
  }

  var detectCycle = function(head) {
    let tortoise=head, hare=head;

    while(true){

        if(!hare || !hare.next){
            return null;
        }
        
        hare = hare.next.next;
        tortoise = tortoise.next;

        if(tortoise === hare){
            //found cycle
            break;
        }
    }
    
    let p1, p2;
    p1 = head;
    p2=hare;
    
    while(p1 !== p2){
        p1 = p1.next;
        p2 = p2.next;
    }
    
    return p1;
};

  console.log(cycleDetection(linkedList));