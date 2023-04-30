const iterativeBinarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length;

    while (right > left) {
        const index = Math.floor((left + right) / 2);
        const middle = arr[index];
        console.log(`middle equals: ${middle}`)

        if (middle === target) {
            return index;
        } else if (middle < target) {
            left = index + 1;
        } else {
            right = index;
        }
    }
    return null;
}

module.exports = {iterativeBinarySearch};