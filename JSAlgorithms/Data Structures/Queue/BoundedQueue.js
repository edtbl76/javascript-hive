const LinkedList = require('../NodesAndLists/LinkedList');

class BoundedQueue {
    constructor(maxSize = Infinity) {
        this.queue = new LinkedList();
        this.size = 0;
        this.maxSize = maxSize;
    }

    hasRoom() {
        return this.size < this.maxSize;
    }

    isEmpty() {
        return this.size === 0;
    }

    enqueue(data) {
        // avoid overflow
        if (this.hasRoom()) {
            this.queue.addToTail(data);
            this.size++;
            console.log(`Added ${data}! Queue size is now ${this.size}.`);
        } else {
            throw new Error('Queue is full!');
        }

    }

    dequeue() {
        // prevent underflow
        if (!this.isEmpty()) {
            const data = this.queue.removeHead();
            this.size--;
            console.log(`Removed ${data}! Queue size is now ${this.size}.`);
            return data;
        } else {
            throw new Error('Queue is empty!');
        }
        

        
    }
}


module.exports = BoundedQueue;

