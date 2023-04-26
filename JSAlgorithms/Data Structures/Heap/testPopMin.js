const {MinHeap} = require('./MinHeap');

const minHeap = new MinHeap();

function randomize() { return Math.floor(Math.random() * 40 ); }

for (let i = 0; i < 6; i++) {
    minHeap.add(randomize());
}

console.log('Bubbled Up', minHeap.heap);

// Remove min value
minHeap.popMin();
