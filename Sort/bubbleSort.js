const bubbleSort = input => {
    let count = 0;
    let swapping = true;

    while (swapping) {
        swapping = false;
        for (let i = 0; i < input.length; i++) {
            if (input[i] > input[i + 1]) {
                console.log(`Swapping pair ${input[i]}, ${input[i+1]} in [${input}]`);
                swap(input, i, i + 1);
                count++;
                swapping = true;
            }
        }
    }
    console.log(`Swapped ${count} times`);
    return input;
};

const swap = (arr, indexOne, indexTwo) => {
    const temp = arr[indexTwo];
    arr[indexTwo] = arr[indexOne];
    arr[indexOne] = temp;

}

module.exports = {bubbleSort};