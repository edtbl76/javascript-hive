
const knapsackDynamic = (weightCapacity, itemWeights, values) => {

    /*
        Memoization:
        - store the knapsack data as a matrix
            - ROW
                - each row represents an item from the items array
                - these are the items "we have seen"
                - the bottom most row suggests that we have considered all items
            - COL
                - a total of weightCapacity + 1 columns
                - each column represents a sub column of the total problem
                - (each column represents a subset of the total capacity)

            - SOLUTION
                - as we move down the rows, we consider more items
                - as we move to the right in the rows we consider a greater percentage of the total
                    capacity
                - OPTIMAL: The bottom right solution considers ALL items and the ENTIRE knapsack 
            
    */

    // create outer structure of matrix (the rows, equivalent to the number of items)
    const itemTotal = itemWeights.length;
    const matrix = new Array(itemTotal);

    // loop through rows
    for (let index = 0; index <= itemTotal; index++) {

        // populate inner structure at  index w/ the weight capacity (+ 1)
        matrix[index] = new Array(weightCapacity + 1);

        for (let weight = 0; weight <= weightCapacity; weight++) {

            // If weight is 0 or index is 0 , then we can't fit anything in the knapsack.
            if (weight === 0 || index === 0) {

                // set value to 0
                matrix[index][weight] = 0;
            
            // else if the weight at the previous index is less than the current weight value
            } else if (itemWeights[index - 1] <= weight) {

                /*
                    get the value in the items array at the previous index
                    get the weight of the item in the array at that index and subtract it from the current weight
                    add the value from the items array to the value at the index calculated from the matrix immediately above
                        (This is our existing total value, or the solution to the sub problem).
                */
                const includeItem = values[index - 1] + matrix[index - 1][weight - itemWeights[index - 1]];

                /*
                    if we exclude the item, then the value is what is stored in the matrix at the previous index a the current
                    weight (we can think of this as the accumulated weight of the previously considered items)
                */
                const excludeItem = matrix[index - 1][weight];

                /*
                    we store the larger of the previously two considered values in the current cell. 
                */
                matrix[index][weight] = Math.max(includeItem, excludeItem);
            } else {
                matrix[index][weight] = matrix[index - 1][weight];
            }

        }
    }
    
    // This prints out the matrix, so you can see the results. 
    console.log(matrix);
    return matrix[itemTotal][weightCapacity];

}

console.log(knapsackDynamic(
    50, 
    [31, 10, 20, 19, 4, 3, 6],
    [70, 20, 39, 37, 7, 5, 10]
));

