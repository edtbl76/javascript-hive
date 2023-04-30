const TreeNode = require('./TreeNode');

// Test Instantiation
const tree = new TreeNode(1);
console.log(tree);

// test add by value
tree.addChild(15);
console.log(tree);

// test add by node
const node = new TreeNode(30);
tree.addChild(node);
console.log(tree);

// test remove by value
tree.removeChild(15);
console.log(tree);

// test remove by Node
tree.removeChild(node);
console.log(tree);
