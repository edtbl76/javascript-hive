
const knapsackRecursion = (weightCapacity, itemWeights, values, index) => {

    // edge/base cases

    // 1: shitty backpack --- can't hold anything
    if (weightCapacity === 0) return 0;

    // 2: no more items in array
    if (i === 0) return 0;

    // 3: if item weight is greater than knapsack capacity
    if (itemWeights[i - 1] > weightCapacity) return knapsackRecursion(weightCapacity, itemWeights, values, i - 1);

    // Real work = determine if the item we are evaluating is part of the best solution
    const includeItem = values[i -1] + knapsackRecursion(weightCapacity - itemWeights[i - 1]);
    const excludeItem = knapsackRecursion(weightCapacity, itemWeights, values, i - 1);
    return Math.max(includeItem, excludeItem);


}