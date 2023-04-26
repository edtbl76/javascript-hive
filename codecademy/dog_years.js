// My Age
let myAge = 21;

// Early Years
let earlyYears = 2;
earlyYears *= 10.5;

// Adjust age for early years, then store it in laterYears
let laterYears = myAge - 2;

// Adjust later years to dog years
laterYears *= 4;

console.log("=== Checking ===")
console.log(`EarlyYears: ${earlyYears}`)
console.log(`LaterYears: ${laterYears}`)

// sum dog years
let myAgeInDogYears = earlyYears + laterYears;

// My Name, in lower case
let myName = 'Edward'.toLowerCase();

/*
  Display My Age In Dog Years, including my name and 
  my actual human age
*/
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
