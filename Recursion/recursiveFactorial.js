const recursiveFactorial = num => {

    /*
        BASE CASE
        - this is case that there is no recursion. It is one or more conditions at which the function returns
        a value that isn't calculated by calling itself

        In this case, we know that 0 multiplied by any number is 0, so when it would result in an incorrect
        value for our factorial. 

        However, any number multipled by 1 is the same number, therefore we can short circuit the recursion by
        returning a value of 1 when the input reaches 0. 
        - this stops the recursion without causing any adverse side effects to the calculation.
    */
   if (num === 0) {
    return 1;
   }

    /*
        RECURSIVE CASE:
        - The if block represents the recursive case. 
        - This is the condition or set of conditions in which the function
        will call itself. 

        - The condition is that n is greater than 0. (because when n === 0, all numbers multiplied
            to it are 0)

        NOTE: The Recursive Case on its own won't complete the function, because there is no "base case" for it to 
        complete recursion. 
    */
    if (num > 0) {
        console.log(`Execution Context: ${num}`);
        return num * recursiveFactorial(num - 1);
    }
}