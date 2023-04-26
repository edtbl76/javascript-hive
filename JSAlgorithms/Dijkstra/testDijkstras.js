const dijkstras = require('./dijkstras');
const testGraph = require('./testGraph');

const results = dijkstras(testGraph, testGraph.vertices[0]);
console.log(results);