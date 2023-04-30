const LinkedList = require('../NodesAndLists/LinkedList');

class Queue {
    constructor() {
        this.queue = new LinkedList();
        this.size = 0;
    }

    enqueue(data) {
        this.queue.addToTail(data);
        this.size++;
        console.log(`Added ${data}! Queue size is now ${this.size}.`);
    }

    dequeue() {
        const data = this.queue.removeHead();
        this.size--;
        console.log(`Removed ${data}! Queue size is now ${this.size}.`);
        return data;
    }
}


module.exports = Queue;