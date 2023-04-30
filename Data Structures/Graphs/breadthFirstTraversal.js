const traversalTestGraph = require('./traversalTestGraph');
const Queue = require('../Queue/BoundedQueue');


const breadthFirstTraversal = (input) => {

    /*
        breadthFirstTraversal uses a QUEUE instead of RECURSION, because we are working w/ one layer at a time 
        as opposed to traversing from root to bottom-most elements.

        - recursion allows us to visit children in succession
        - the queue holds verticies in "layer order", which maintains the order in which those vertices should be visited. 
    

        the visited array is the gate for enqueuing, because it still tracks verticies that have been visited (irrespective of
            order)
    */
    const visited = [input];
    const visitQueue = new Queue();
    visitQueue.enqueue(input);

    /*
        working in the queue replaces the recursion from the depth first algorithm
    */
    while (!visitQueue.isEmpty()) {
        // We dequeue to ensure that the node is only evaluated once. 
        // the visited array is the gate for enqueue
        const current = visitQueue.dequeue();
        console.log(current.data);

        /*
            We iterate the edges based on the element we've removed from the queue.
        */
        current.edges.forEach(edge => {
            const neighbor = edge.end;
    
            // We only add nodes that haven't been seen. (This accentuates that the visited array protects the queue.)
            if (!visited.includes(neighbor)) {
                visited.push(neighbor);
                visitQueue.enqueue(neighbor);
            }
        })
    }
    
    
    console.log(visited);

}

breadthFirstTraversal(traversalTestGraph.vertices[0]);