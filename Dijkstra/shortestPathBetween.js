const testGraph = require('./testGraph');
const dijkstras = require('./dijkstras');

/*
    This is a function that uses dijkstras to reconstruct the full path to a single vertex
    - it is most reliable to do this once dijkstra has created it's path graphs. 
        - doing it after all paths have been evaluated covers the possibility that an alternate
        path to be evaluated later in the queue will be shorter than the current shortest path. 
        - (especially true when there are negative distances.)

        PARAMS:
            - graph (the calculated graph)
            - start (beginning of path)
            - target (end of path)
*/
const shortestPathBetween = (graph, start, target) => {

    // destructure results of calling dijkstra
    const { distances, previous } = dijkstras(graph, start);
    
    // get the shortest path to the target
    const distance = distances[target.data];

    // create the array that will hold the path to be reconstructed.
    const path = [];

    // Temp var we'll use to back track through the 'previous' object in order to 
    // rebuild the path
    let vertex = target;
    
    /*
        while the value is not vertex, keep building the path
    */
    while(vertex) {
        // since we're working backwards, use unshift() which puts values at the front/head of the array
        // (as opposed to push which works from the back/tail)
        path.unshift(vertex);

        // reset value to keep the loop movin'
        vertex = previous[vertex.data];
    }


    /*
        output of the function is the weight of the path (so we have a quantifiable value to associated w/ "shortest")
        as well as the path, so we have a description of the path it represents. 
    */
    return {
        distance: distance, 
        path
    }
}


// Retrieve shortest path between vertices A and G
const a = testGraph.getVertexByValue('A');
const g = testGraph.getVertexByValue('G');
const results = shortestPathBetween(testGraph, a, g);
console.log(results);

module.exports = shortestPathBetween;