// https://www.codecademy.com/courses/technical-interview-practice-with-javascript/articles/capturing-rainwater-js

const naiveCapturingRainwater = (heights) => {
    // traverse elements in array
    let totalWater = 0;
    for (let i = 1; i < heights.length; i++) {
        let left = 0;
        let right = 0;

        // find elements left of i
        for (let j = 0; j <= i; j++) {
            left = Math.max(left, heights[j]);
        }

        // find elements right of i
        for (let j = i; j <= heights.length; j++) {
            right = Math.max(right, heights[j]);
        }

        // get the minimum of the left and right bounds and
        // add the difference to the total amount of water
        totalWater += Math.min(left, right) - heights[i];
    }
    return totalWater;
}

