class HashMap {
    constructor(size = 0) {
        this.hashmap = new Array(size)
            .fill(null);
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
        this.hashmap[index] = value;
    }

    get(key) {
        const index = this.hash(key);
        return this.hashmap[index];
    }

}

// Test Hashing and Compression
// const myHashMap = new HashMap(3);
// console.log(myHashMap.hash('id'));  // 1
// console.log(myHashMap.hash('id'));  // 1

// Test Assign

module.exports = HashMap;