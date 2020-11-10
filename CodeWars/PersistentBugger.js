// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// For example:
//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit
//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2
//  persistence(4) === 0 // because 4 is already a one-digit number
let count = 0;
function persistence(num) {
  console.log(num)
  if(num <= 10) {
    return count;
  }
  let newNum = num.toString().split('').reduce((a, c) => Number(a) * Number(c));

  count++;
  return persistence(newNum)
}

// console.log(persistence(39));
// console.log(persistence(4));
// console.log(persistence(25));
console.log(persistence(999));