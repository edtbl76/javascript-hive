// https://www.codecademy.com/courses/technical-interview-practice-with-javascript/articles/capturing-rainwater-js

const twoPointerCapturingRainwater = (heights) => {

    let totalWater = 0;
    let leftPointer = 0;
    let rightPointer = heights.length - 1;
    let left = 0;
    let right = 0;

    while (leftPointer < rightPointer) {
        if (heights[leftPointer] <= heights[rightPointer]) {
            if (heights[leftPointer] > left) {
                left = heights[leftPointer];
            }
            totalWater += left - heights[leftPointer];
            leftPointer++;
        } else {
            if (heights[rightPointer] > right) {
                right = heights[rightPointer];
            }
            totalWater += right - heights[rightPointer];
            rightPointer--;
        }
    }

    return totalWater;

}

