const LinkedList = require("../Nodes and Lists/LinkedList");

class HashMapSeparateChaining {
    constructor(size = 0) {
        this.hashmap = new Array(size)
            .fill(null)
            /*
                Add newLinkedList at each element of hash map to provide collision management mechanism. 
                (Separate Chaining)
            */
            .map(() => new LinkedList());
    }

    // hashing function
    hash(key) {
        let hashCode = 0;

        for (let i = 0; i < key.length; i++) {
            hashCode += hashCode + key.charCodeAt(i);
        }

        // compression
        return hashCode % this.hashmap.length;
    }

    assign(key, value) {
        const index = this.hash(key);

        // linkedlist (Separate Chaining)
        const linkedList = this.hashmap[index];
        
        // simple case, LL is empty
        if (linkedList.isEmpty()) {
            linkedList.addToHead({ key, value });
            return;
        }

        // COLLISION! loop through LL 
        let current = linkedList.head;
        while (current) {
            // If the current Node equals the Node we want to store, then overwrite. 
            // (This is useful when using recency algorithms for cache eviction.)
            if (current.data.key === key) {
                current.data = {key, value};
            }

            // If the next node is the tail, then we add the key-value there.
            if (!current.getNextNode()) {
                let newTail = new Node({key, value});
                current.setNextNode(newTail);
            }

            // No dice, next iteration
            current = current.getNextNode();
        }
    }

    get(key) {
        const index = this.hash(key);
        // handling LL means we are using Separate Chaining
        let current = this.hashmap[index].head;

        while (current) {
            if (current.data.key === key) {
                return current.data.value;
            }
            current = current.getNextNode();
        }

        return null;
    }

}

// Test Hashing and Compression
// const myHashMap = new HashMap(3);
// console.log(myHashMap.hash('id'));  // 1
// console.log(myHashMap.hash('id'));  // 1

// Test Assign

module.exports = HashMap;