// Write your code here:
const justCoolStuff = (arr1, arr2) => {
    // filter is a functional method that lets us iterate through the array per element
    // and only include truthy values from the arrow function

    // the includes() built-in allows us to evaluate the second array w/ the elements
    // we are looping through
    let result = arr1.filter(element => arr2.includes(element));
    return result;
  }
  
  
  
  
  
  // Feel free to uncomment the code below to test your function
  
  const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
  
  const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
  
  console.log(justCoolStuff(myStuff, coolStuff))
  // Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
  
  