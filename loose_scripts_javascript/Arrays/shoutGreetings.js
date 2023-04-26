// Write your code here:
// Version 1 w/ forEach
// const shoutGreetings = (arrayOfStrings) => {
//   let result = [];
//   arrayOfStrings.forEach((element) => result.push(element.toUpperCase() + "!"));

//   return result;
// }

// version 2 w/ map
const shoutGreetings = (arrayOfStrings) => {
    let result = arrayOfStrings.map((element) => element.toUpperCase() + "!");
    return result;
  }
  
  
  
  
  // Feel free to uncomment out the code below to test your function!
  
  const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
  
  console.log(shoutGreetings(greetings))
  // Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
  
  