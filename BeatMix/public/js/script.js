// Drum Arrays
let kicks = Array(16).fill(false);
let snares = Array(16).fill(false);
let hiHats = Array(16).fill(false);
let rideCymbals = Array(16).fill(false);

const getDrumByName = (name) => {
    switch(name) {
        case 'kicks':
            return kicks;
        case 'snares':
            return snares;
        case 'hiHats':
            return hiHats;
        case 'rideCymbals':
            return rideCymbals;
        default:
            return;
    }
}

const toggleDrum = (drumArray, index) => {
    const drums = getDrumByName(drumArray);
    if (!drums || index >= drums.length || index < 0) {
        return;
    }

    drums[index] = !drums[index];
};

const clear = (drumArray) => {
    const drums = getDrumByName(drumArray);
    if (drums) {
        drums.fill(false);
    }
    
}

const invert = (drumArray) => {
    const drums = getDrumByName(drumArray);
    if (!drums) {
        return;
    }
    for (let i = 0; i < drums.length; i++) {
        drums[i] = !drums[i];
    }
    
}

const getNeighborPads = (x, y, size) => {
    const neighbors = [];
    if (x >= size || y >= size || x < 0 || y < 0 || size < 1) {
        return neighbors;
    }
    // to the left
    neighbors.push([x - 1, y]);
    // above
    neighbors.push([x, y + 1]);
    // to the right
    neighbors.push([x + 1, y]);
    // below
    neighbors.push([x, y - 1]);

    return neighbors.filter((neighbor) => neighbor.every(value => value >= 0 && value < size));
}