const Node = require('./Node');

class LinkedList {

    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    }

    removeHead() {
        const removedHead = this.head;
        if (!removedHead) return;

        this.head = removedHead.getNextNode();
        return removedHead.data;
    }

    addToTail(data) {
        let tail = this.head;
        if (!tail) {
            this.head = new Node(data);
        } else {
            while (tail.getNextNode() !== null) {
                tail = tail.getNextNode();
            }
            tail.setNextNode(new Node(data));
        }
    }



    printList() {
        let currentNode = this.head;
        let output = '<head> ';
        
        while (currentNode) {
            output += currentNode.data + ' ';
            currentNode = currentNode.getNextNode();
        }
        output += '<tail>';
        console.log(output);
        
    }

    findNodeIteratively(data) {
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data === data) {
                return currentNode;
            }
            currentNode = currentNode.getNextNode();
        }
        return null;
    }

    findNodeRecursively(data, currentNode = this.head) {
        // base case 1, currentNode === null
        if (!currentNode) {
            return null;
        // base case 2, found node.
        } else if (currentNode.data === data) {
            return currentNode;
        // recursive case -> move to the next node.
        } else {
            return this.findNodeRecursively(data, currentNode.getNextNode);
        }
    }
}

module.exports = LinkedList;