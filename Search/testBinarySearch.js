const {iterativeBinarySearch} = require('./binarySearch');

const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 71;

const result = iterativeBinarySearch(searchable, target);

console.log(`The target index is ${result}`);