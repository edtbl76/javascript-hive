// Write your code here:
const isTheDinnerVegan = (arr) => {
    // Array's every() built in returns true if the internal condition is true
    // this can test for existence, or it can be a conditional predicate like below that checks for boolean results
    //
    // The alternative to every() is some()
    //
    //      every = all, some = any
    //
    return arr.every(element => element['source'] === 'plant');
  }
  
  
  
  
  
  
  // Feel free to comment out the code below to test your function
  
  const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
  
  console.log(isTheDinnerVegan(dinner))
  // Should print false
  