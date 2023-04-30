const PriorityQueue = require("../Data Structures/Queue/PriorityQueue");



/*
    Basic steps to Dijkstra

    1. evaluate the distance between the starting vertex and its neighbors
    2. if the new distance to the neighbor is lower than the previous distance, record it and queue up the neighbor
    3. dequeue the next vertex to evaluate
    4. repeat steps 2-3 until there are no more vertices left in the queue.

    GRAPH is the data structure instance
    START is the starting point from which the paths will be constructed. 


    A PriorityQueue is a useful data structure to use in Dijkstra because the priority of each element added to the queue
    can equate to the shortest distance. 
    - this allows us to evaluate the vertices w/ the shortest distances FIRST
    - saves time by preventing the need to re-evaluate paths later in the queue (since longer paths are unlikely to result
        in a shorter distance)
*/
const dijkstras = (graph, start) => {

    // tracks total distances for shortest paths to each vertex
    const distances = {};

    /*
        The shortest distance to any vertice is the vertice that leads to it. 
        - LOGIC:
            - the previous leg to a vertex is a guaranteed part of the path to that vertex, because it ends at the vertex. 
            - this means that the distance from the vertex can only get larger as we move further away from the target vertex. 
    */
    const previous = {};

    /*
        Instantiate priority queue and populate it w/ our starting vertex
    */
   const queue = new PriorityQueue();
   queue.add({
    vertex: start,
    priority: 0
   });


    /*
     initialize distances to infinity for each vertice, and previous distance to null.
     - null accounts for disconnected vertices (those vertices w/o edges leading to them.)
    */
    graph.vertices.forEach(vertex => { 
        distances[vertex.data] = Infinity 
        previous[vertex.data] = null;
    });

    // init starting index (has distance of 0)
    distances[start.data] = 0;

    /*
        While the queue isn't empty, keep evaluating paths (ALL PATHS!)
    */  
    while(!queue.isEmpty()) {
        /*
        Evaluate paths
        - init vertex to the shortest distance pulled off of the priority queue. 
    */
    const { vertex } = queue.popMin();

    vertex.edges.forEach(edge => {
        // dist. of new path is the sum of the weight of the edge and the distance value for the vertex in the distances object.
        const alternate = edge.weight + distances[vertex.data];

        /*
            compare distance of new alternate path to the distance of the last recorded path to the neighbor
            (neighbors are stored in the end property of an edge.)
        */
        const neighbor = edge.end.data
        if (alternate < distances[neighbor]) {
            /*
                Our conditional checks for what we are looking for (shorter path) by evaluating if the distance
                from the current vertex to its neighbor is shorter than the previously eval'd distance.

                - set the distances at the neighbor value to the alternate path we've evaluated. 
                - replace the previous length w/ the value at vertex. 

            */
            distances[neighbor] = alternate;
            previous[neighbor] = vertex;

            /*
                add the value to the queue so it can be compared.
            */
            queue.add({ vertex: edge.end, priority: distances[neighbor]});
        }
        
    })
    }
    
    return { distances, previous };


}



module.exports = dijkstras;