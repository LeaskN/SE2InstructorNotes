// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

function findMissingLetter(array){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let firstLetterIndex = alphabet.indexOf(array[0].toLowerCase());
  let actualString = alphabet.slice(firstLetterIndex, firstLetterIndex + array.length + 1);
  let testLowerCase = actualString.split('').filter(letter => array.indexOf(letter) === -1 );
  let testUpperCase = actualString.toUpperCase().split('').filter(letter => array.indexOf(letter) === -1);
  return testLowerCase.length === 1 ?  testLowerCase.join() : testUpperCase.join();
}




console.log(findMissingLetter(['a','b','c','d','f']), 'e');
console.log(findMissingLetter(['O','Q','R','S']), 'P');