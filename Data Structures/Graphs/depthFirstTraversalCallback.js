const traversalTestGraph = require('./traversalTestGraph');


const depthFirstTraversal = (input, callback, visited = [input]) => {
    callback(input);
    // we can only traverse if there is an outgoing edge
    input.edges.forEach(edge => {
        // neighbor is the end of the edge
        let neighbor = edge.end;

        /*
            The visited array is used to track the nodes we have visited during our traversal. 
            this defends against infinite loops in cyclic graphs. 
            - if the neighbor isn't in the array we have to add it and pass the updated array in 
            our recursion.
        */
        if (!visited.includes(neighbor)) {
            visited.push(neighbor);
            depthFirstTraversal(neighbor, callback, visited);
        }
    });
};

depthFirstTraversal(traversalTestGraph.vertices[0], (vertex) => { console.log(vertex.data) });

