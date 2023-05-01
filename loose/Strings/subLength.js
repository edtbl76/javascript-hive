// Write function below
// const subLength = (str, target) => {
//     let result = [];
//     for (let i = 0; i < str.length;i++) {
//       if (str[i] === target) {
//         result.push(i);
//       }
//     }
  
//     if (result.length !== 2) {
//       return 0;
//     } 
  
//     return result[1] - result[0] + 1;
//   }
  
// Write function below
// -- A bit more elegant than mine.. with some short circuits for better performance. 
const subLength = (str, char) => {
    let charCount = 0;
    let len = -1;
    
    for (let i=0; i<str.length; i++) {
      if (str[i] == char) {
        charCount++;
        if (charCount > 2) {
          return 0;
        }
        if (len == -1) {
          len = i;
        } else {
          len = i - len + 1
        }
      }
    }
    if (charCount < 2) {
      return 0;
    }
  
    return len;
  };


  console.log(subLength('funny', 'n'));