const mergeSort = (input) => {
    const length = input.length;

    /*
        This is the base case of the first part of the mergeSort algorithm: the "splitting"
        - The first step is to recursively split the data structure into single element arrays.
    */
    if (length === 1) {
        console.log(input);
        return input;
    }

    /*
        Primary logic for the split. 
        each loop will split the input array into two subarrays that are equal in length or off by 1.
    */
    const middle = Math.floor(length / 2);
    const leftArray = input.slice(0, middle);
    const rightArray = input.slice(middle, length);

    /*
        merge is the helper function that includes merge logic based on the results of each 
        recursive call to the subarrays. 
    */
    return merge(mergeSort(leftArray), mergeSort(rightArray));

}

const merge = (left, right) => {
    const sorted = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            sorted.push(left[0]);
            left.shift();
        } else {
            sorted.push(right[0]);
            right.shift();
        }
    }

    return sorted.concat(left).concat(right);
}

module.exports = {mergeSort};