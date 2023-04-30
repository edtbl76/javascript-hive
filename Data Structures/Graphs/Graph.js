const Edge = require('./Edge');
const Vertex = require('./Vertex');


class Graph { 
    constructor(isWeighted = false, isDirected = false) {
        this.vertices = [];
        this.isWeighted = isWeighted;
        this.isDirected = isDirected;
    }

    addVertex(data) {
        const vertex = new Vertex(data);
        this.vertices.push(vertex);
        return vertex;
    }

    removeVertex(vertex) {
        this.vertices = this.vertices.filter(v => v !== vertex);
    }

    addEdge(vertex1, vertex2, weight) {
        if (!(vertex1 instanceof Vertex || vertex2 instanceof Vertex)) {
            throw new Error('Parameters must be of type Vertex');
        }

        const edgeWeight = this.isWeighted ? weight : null;

        vertex1.addEdge(vertex2, edgeWeight);
        if (!this.isDirected) {
            vertex2.addEdge(vertex1, edgeWeight);
        }
    }

    removeEdge(vertex1, vertex2) {
        if (!(vertex1 instanceof Vertex || vertex2 instanceof Vertex)) {
            throw new Error('Parameters must be of type Vertex');
        }

        vertex1.removeEdge(vertex2);
        if (!this.isDirected) {
            vertex2.removeEdge(vertex1);
        }
    }

    getVertexByValue(value) {
        return this.vertices.find(vertex => vertex.data === value);
    }

    print() {
        const vertexList = this.vertices || [];
        vertexList.forEach(vertex => vertex.print());
    }
}

module.exports = {Graph};