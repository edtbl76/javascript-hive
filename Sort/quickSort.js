

const quicksort = (array, leftBound = 0, rightBound = array.length - 1) => {

    /*
        recursive case is when the input array has more than one element, which is when we return the array
        (similar to mergeSort) 

        - our recursions are to call quicksort on each of the sorted partitions (breaking those further down into
            half, and so on.)
    */
    if (leftBound < rightBound) {
        console.log('. Calling partition', array, `with leftBound ${leftBound} and rightBound ${rightBound}`);
        const pivotIndex = partition(array, leftBound, rightBound);
        console.log(`. Returning pivotIndex = ${pivotIndex}`);
        console.log(`\nCalling quicksort for left partition with leftBound ${leftBound} and (pivotIndex-1) ${pivotIndex - 1}`);
        quicksort(array, leftBound, pivotIndex - 1);
        console.log(`\nCalling quicksort for right partition with pivotIndex ${pivotIndex} and rightBound ${rightBound}`);
        quicksort(array, pivotIndex, rightBound);
    }

    return array;
}


/*
    Meat and potatoes of the quicksort algorithm. 
    - the output of this function is the index of the pivot after having sorted elements into two partitions.
*/
const partition = (array, leftIndex, rightIndex) => {
    const pivot = array[Math.floor(leftIndex + rightIndex / 2)];
    console.log(`.. Partitioning with pivot ${pivot} leftIndex ${leftIndex} rightIndex ${rightIndex}`);
    
    /*
        L and R indexes set the "bounds" 
        - as long as the values at these indexes are less than the pivot(value) we move towards the pivot
        (left moves to the right, and right moves to the left)
        - if we REACH the pivot, it means everything in the partition to the L or R are where they belong. 
        - if we stop before reaching the pivot, it means that we need to swap elements at L and R indexes. 
            - if both elements stop before reaching the pivot, the logic is that we found an element that belongs in the opposite
            paritition. 
            - if only one element stops before reaching the pivot, it will swap with the pivot. 
    */
    while (leftIndex <= rightIndex) {
        while (array[leftIndex] < pivot) {
            leftIndex++;
            console.log(`.. ${array[leftIndex-1]} < ${pivot} : Incremented leftIndex => ${leftIndex}`);
        }
        while (array[rightIndex] > pivot) {
            rightIndex--;
            console.log(`.. ${array[rightIndex+1]} > ${pivot} : Decremented rightIndex => ${rightIndex}`);
        }

        /*
            leftIndex should be pointing to element NOT < pivot
            rightIndex should be pointing to element NOT > pivot
            (as mentioned above.. they are on the wrong side of the partition.)

            if while condition is still true, 
            swap elements at leftIndex and rightIndex and move the pointers forward/backward respectively
        */
        if (leftIndex <= rightIndex) {
            const string = `${leftIndex} <= ${rightIndex}`;
            swap(array, leftIndex, rightIndex);
            console.log(`.. ${string} : Swapped leftIndex ${leftIndex} with rightIndex ${rightIndex}`, array);
            
            leftIndex++;
            rightIndex--;
            console.log(`......... : Incremented leftIndex => ${leftIndex} Decremented rightIndex => ${rightIndex}`);
        }
    
    }
    return leftIndex

}


// swapper
const swap = (arr, index1, index2) => {
    const temp = arr[index2];
    arr[index2] = arr[index1];
    arr[index1] = temp;
}

module.exports = {
    quicksort,
    partition
};