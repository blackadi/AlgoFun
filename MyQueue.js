/**
 * Initialize your data structure here.
 */
let stack1 = [], stack2 = [];

var MyQueue = function() {
    stack1 = [], stack2 = [];
};


/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    stack1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    
    if(stack2.length === 0){
        
        while(stack1.length !==0){
            stack2.push(stack1.pop());
        }

        return stack2.pop(); 
    }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    
    let temp;
    if(stack2.length === 0){
        
        while(stack1.length !==0){
            stack2.push(stack1.pop());
        }
        temp = stack2.pop();
        stack2.push(temp);
        return temp; 
    }
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    
    if(stack1.length === 0 && stack2.length == 0)
        return true;
            
    return false;
    
};


/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */