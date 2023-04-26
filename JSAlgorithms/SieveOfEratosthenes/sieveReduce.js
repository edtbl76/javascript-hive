const sieveOfEratosthenes = (target) => {

    // Edge Cases
    if (target <= 1) {
        return [];
    }

    // Create initial array
    const initial = new Array(target + 1).fill(true);

    // Mark 0 and 1 as non prime
    initial[0] = false;
    initial[1] = false;


    // Iterate up to Square Root of the provided target value
    const squareRoot = Math.pow(target, 0.5);
    for (let i = 2; i <= squareRoot; i++) {

        if (initial[i] === true) {
            const next = Math.pow(i, 2);
            // Mark mutliples of i as non-prime
            for (let j = next; j <= target; j = j + i) {
                initial[j] = false;
            }
        }
    }

    
    // Reduce example. 
    return initial.reduce((result, currentValue, currentIndex) => {
        if (currentValue) {
            result.push(currentIndex);
        }
        return result;
    }, []);
}

console.log(sieveOfEratosthenes(10));