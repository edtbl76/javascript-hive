
const fiboR = (n) => {
    
    // edge cases
    if (n <= 1) return n;

    return fiboR(n - 1) + fiboR(n - 2);
}

console.log(fiboR(10));