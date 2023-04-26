// Write your code here:
const findMyKeys = arr => {
    // returns -1 if not present
    return arr.indexOf('keys');
  }
  
  
  
  
  
  
  
  // Feel free to comment out the code below to test your function
  
  const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
  const randomStuff2 = ['credit card', 'screwdriver', 'receipt', 'gum', 'used gum', 'plastic spoon'];
  console.log(findMyKeys(randomStuff))
  // Should print 4
  console.log(findMyKeys(randomStuff2))
  // Should print -1
  
  