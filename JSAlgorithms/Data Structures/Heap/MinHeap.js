class MinHeap {
    constructor() {
        this.heap = [null];
        this.size = 0;
    }

    add(value) {
        console.log(`.. adding ${value}`);
        this.heap.push(value);
        this.size++;
        this.bubbleUp();
        console.log(`added ${value} to heap`, this.heap);
    }

    /*
        preserves the heap properties when adding elements. 
        - in a MinHeap, this means that parents must be less than their children.
    */ 
    bubbleUp() {
        let currentIndex = this.size;

        /*
            While runs as long as as there is a valid index and heap properties are NOT met. 
            - currentIndex > 1 (there is a valid index)
            - child < parent (in a min heap, the opposite is true. This indicates that we must swap values)
        */

        while(currentIndex > 1 && this.heap[currentIndex] < this.heap[getParent(currentIndex)]) {
            console.log('..', this.heap);
            console.log(`.. swap index ${currentIndex} with ${getParent(currentIndex)}`);
            this.swap(currentIndex, getParent(currentIndex));
            currentIndex = getParent(currentIndex);
        }
    }

    /*
        Does the opposite of bubble up. 
        - This preserves the properties of the heap after an item is removed
    */
    heapify() {
        let current = 1;
        let leftChild = getLeft(current);
        let rightChild = getRight(current);

        while (this.canSwap(current, leftChild, rightChild)) {

            /*
                IF - both children exist, then we swap the lesser of the two. 
                ELSE - if only one child exists, it should always be the left, so we swap it.
            */
            if (this.exists(leftChild) && this.exists(rightChild)) {
                if (this.heap[leftChild] < this.heap[rightChild]) {
                    this.swap(current, leftChild);
                    current = leftChild;
                } else {
                    this.swap(current, rightChild);
                    current = rightChild;
                }
            } else {
                this.swap(current, leftChild);
                current = leftChild;
            }

            leftChild = getLeft(current);
            rightChild = getRight(current);
        }
    }

    popMin() {
        if (this.size === 0) {
          return null;
        }
        console.log(`\n.. Swap ${this.heap[1]} with last element ${this.heap[this.size]}`);
        this.swap(1, this.size);
        const min = this.heap.pop();
        this.size--;
        console.log(`.. Removed ${min} from heap`, this.heap);
        this.heapify();
        return min;
    }

    // Helpers
    exists(index) {
        return index <= this.size;
    }

    canSwap(current, leftChild, rightChild) {
        // determine if one of the possible swap conditions exists
        /*
            If there is a left child and the value at that child is less than the current value, 
            we can swap

            or

            If there is a right child and the value at that child is less than the current value
        */
        return (
            this.exists(leftChild) && this.heap[current] > this.heap[leftChild]
            || this.exists(rightChild) && this.heap[current] > this.heap[rightChild]
        );
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}

const getParent = current => Math.floor((current / 2));
const getLeft = current => current * 2;
const getRight = current => current * 2 + 1;


module.exports = {
    MinHeap,
    getParent,
    getLeft,
    getRight
};