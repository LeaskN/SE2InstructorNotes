// FIZZ BUZZ
// FIZZ BUZZ is an (old) game where people count up from 0 and 
// Say fizz if the number is divisible by 3 and buzz if its divisible by 5 if both add fizzbuzz to the array, if none of these add back the original number
// For example counting to 15: 0, 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz
// Write a function that returns an array of numbers, fizz, buzz, & fizzbuzz counting up to a given number 
// Given 15 return [ 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz]
// Scenareos:
  // DIV by 3: Fizz
  // DIV by 5: Buzz
  // DIV by 3 or 5: FizzBuzz
  // DIV by neither: the number

function fizzBuzz(n){
  let arr = [];

  for(let i = 1; i <= n; i++){
    if(i % 5 == 0 && i % 3 == 0){
      arr.push('FizzBuzz');
    } else if( i % 5 == 0){
      arr.push('Buzz');
    } else if( i % 3 == 0){
      arr.push('Fizz');
    } else {
      arr.push(i);
    }
  }

  return arr;
}

console.log(fizzBuzz(30));
// console.log(fizzBuzz(15));
// console.log(fizzBuzz(40));