class listNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class linklist{
    constructor(head = null){
        this.head = head;
    }

    addData = (data) =>{

        let node = new listNode(data);
    
        let currentNode;
    
        if(this.head === null){
            this.head = node;
        }else{
            currentNode = this.head;
    
            while(currentNode.next){
                currentNode = currentNode.next;
            }
    
            currentNode.next = node;
        }
    }
    
    printList = (head = this.head) =>{
        let currentNode = head;
    
        let str = "";
        while(currentNode){
            str += currentNode.data + " ";
            currentNode = currentNode.next;
        }
    
        console.log(str);
    }
    
    reverseLinklist = () => {
        let currentNode = this.head;
        let prevNode = null;
        //let newNode;
        while(currentNode){
            //newNode = new listNode(currentNode.data);
            // newNode.next = prevNode;
            // prevNode = newNode;
            // currentNode= currentNode.next;
            let nextTemp = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextTemp;

            
            
        }
    
        return prevNode;
    }

    reverseLinklist2 = (m, n) => {
        let pos=1, start = this.head, currentNode = this.head;

        while(pos < m){
            start = currentNode;
            pos++;
            currentNode = currentNode.next;
        }

        let newList = null, nextTemp = null, tail = currentNode;
        while(pos >= m && pos <=n){
            nextTemp = currentNode.next;
            currentNode.next = newList;
            newList = currentNode;
            currentNode = nextTemp;
            pos++;
        }

        start.next = newList;
        tail.next = currentNode;
        

        if(m > 1)
            return this.head;
        else
            return newList;
    }
}




const list = new linklist();
list.addData(5);
list.addData(2);
list.addData(1);
list.addData(0);
list.addData(7);
// list.addData(6);
// list.addData(7);

list.printList();

//const val = list.reverseLinklist();

//list.printList(val);

const val2 = list.reverseLinklist2(1,5);

list.printList(val2);