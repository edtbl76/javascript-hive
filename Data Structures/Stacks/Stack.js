const LinkedList = require('../NodesAndLists/LinkedList');

class Stack {
    constructor(maxSize = Infinity) {
        this.stack = new LinkedList();
        this.size = 0;
        this.maxSize = maxSize;
    }

    isEmpty() {
        return this.size === 0;
    }

    hasRoom() {
       return this.size < this.maxSize;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.stack.data;
    }

    push(value) {
        if (this.hasRoom()) {
            this.stack.addToHead(value);
            this.size++;
        } else {
            throw new Error('Stack is Full');
        }
       
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty!');
        } else {
            const value = this.stack.removeHead();
            this.size--;
            return value;
        }
        
    
    }
}

module.exports = Stack;