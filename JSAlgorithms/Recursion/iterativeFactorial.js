const iterativeFactorial = num => {
    let result = 1;
    while (num > 0) {
        result *= num;
        num -= 1;
        
    }
    return result;
}

const example = iterativeFactorial(10);
console.log(example)