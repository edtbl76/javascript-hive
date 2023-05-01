const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
const squareNums = (arrayOfNumbers) => {
  return arrayOfNumbers.map(toSquare);
}

squareNums(numbers).forEach(element => console.log(element));