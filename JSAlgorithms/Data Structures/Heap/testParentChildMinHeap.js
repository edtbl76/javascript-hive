const { MinHeap, getParent, getLeft, getRight } = require('./MinHeap');

// Instantiate
const minHeap = new MinHeap();

// Seed w/ data
minHeap.heap = [null, 10, 13, 21, 61, 22, 23, 99];

// display content
console.log(minHeap.heap);

const current = 3;
const currentValue = minHeap.heap[current];
console.log(`Current value of ${current} is ${currentValue}`);
console.log(`Parent value of ${currentValue} is ${minHeap.heap[getParent(current)]}`);
console.log(`Left child value of ${currentValue} is ${minHeap.heap[getLeft(current)]}`);
console.log(`Right child value of ${currentValue} is ${minHeap.heap[getRight(current)]}`);