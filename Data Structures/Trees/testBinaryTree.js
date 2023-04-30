const BinaryTree = require('./BinaryTree');

// Instantiate
const bt = new BinaryTree(100);
console.log(bt);

// Test Insert
bt.insert(50);
bt.insert(125);
bt.insert(75);
bt.insert(25);
console.log(bt);


// Test getNodeByValue
let node = bt.getNodeByValue(75);
console.log(node);
node = bt.getNodeByValue(55);
console.log(node);