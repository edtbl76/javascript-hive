const memo =  {};


const fiboM = n => {
    let result;

    if (memo[n]) {
        result = memo[n];
    } else if (num <= 1) {
        result = n;
    } else {
        result = fiboM(n - 1) + fiboM(n - 2);
        memo[n] = resule;
    }
    return result;
    
}

console.log(fiboM(10));