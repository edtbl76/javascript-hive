class BinaryTree {
    constructor(value, depth = 1) {
        this.value = value;
        this.depth = depth;

        // pointers to left/right binary tree nodes. 
        this.left = null;
        this.right = null;
    }

    insert(value) {
        
        /*
            Values < root => left
            Values > root => right
        */
        if (value < this.value) {
            // create a new node if one doesn't exist, otherwise call insert recursively on the existing node.
            if (!this.left) {
                this.left = new BinaryTree(value, this.depth + 1);
            } else {
                this.left.insert(value);
            }
        } else {
            // do the same as above for the right sub tree
            if (!this.right) {
                this.right = new BinaryTree(value, this.depth + 1);
            } else {
                this.right.insert(value);
            }
        }
    }

    getNodeByValue(value) {
        if (value === this.value) {
            return this;
        } else if ((value < this.value) && this.left) {
            return this.left.getNodeByValue(value);
        } else if (this.right) {
            return this.right.getNodeByValue(value);
        } else {
            return null;
        }
    }

    // Inorder
    depthFirstTraversal() {
        if (this.left) {
            this.left.depthFirstTraversal();
        }
        console.log(`Level: ${this.depth} , Value: ${this.value}`);
        if (this.right) {
            this.right.depthFirstTraversal();
        }
    }
};

module.exports = BinaryTree;