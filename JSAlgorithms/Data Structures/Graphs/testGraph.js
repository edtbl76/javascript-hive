const Graph = require('./Graph');

// instantiate
const trainNetwork = new Graph();

// add vertices
console.log('Adding Vertices...');
const atlantaStation = trainNetwork.addVertex('Atlanta');
const clevelandStation = trainNetwork.addVertex('Cleveland');
const newYorkStation = trainNetwork.addVertex('New York');

// display
trainNetwork.print();

// remove
console.log('\nRemoving Cleveland Station...');
trainNetwork.removeVertex(clevelandStation);

// display
trainNetwork.print();

// Test adding Edges.. so add another edge
console.log('\nAdding Edges...');
trainNetwork.addEdge(atlantaStation, newYorkStation);
trainNetwork.print();

// Now remove them... 
console.log('\nRemoving Edges...');
trainNetwork.removeEdge(atlantaStation, newYorkStation);
trainNetwork.print();

// Create Weighted Graph and add vertexes
const weightedTrainNetwork = new Graph(true);
const bostonStation = weightedTrainNetwork.addVertex("Boston");
const wooTownStation = weightedTrainNetwork.addVertex('Worcester');

// Add Edges
console.log('\nAdding Edges to weighted graph...');
weightedTrainNetwork.addEdge(bostonStation, wooTownStation, 48);
weightedTrainNetwork.print();

// Create Directed Graph and add vertices
const directedTowns = new Graph(false, true);
const wilmington = directedTowns.addVertex('Wilmington');
const billerica = directedTowns.addVertex('Billerica');

// Add edge
console.log('\nAdding Edges to directed graph...');
directedTowns.addEdge(wilmington, billerica);
directedTowns.print();

// Remove Vertex and print()
console.log('\nRemoving Edges...');
directedTowns.removeEdge(wilmington, billerica);
directedTowns.print();