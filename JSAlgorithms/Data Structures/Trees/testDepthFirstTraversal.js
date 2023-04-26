const TreeNode = require('./TreeNode');

const tree = new TreeNode(15);
const randomize = () => Math.floor(Math.random() * 20);

// first level children
for (let i = 0; i < 3; i++) {
    tree.addChild(randomize());
}

// second level
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        tree.children[i].addChild(randomize());
    }
}

/*
    DFT 
        - visits first child in children array and then recurses through that node's children before visiting its siblings
        and their children recursively

    PSEUDO CODE
        - For Each Node
            - Display Node Data
            - For Each Child In Children Array -> Call Itself Recursively
*/
// Tester Code
tree.print();
tree.depthFirstTraversal();

