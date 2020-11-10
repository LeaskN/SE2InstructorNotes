// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let lowerStr = str.toLowerCase(); // 'AbCd' -> 'abcd'
  let arrOfLetters = lowerStr.split(''); // 'abcd' -> ['a','b','c','d']
  
  let allXs = arrOfLetters.filter(l => l === 'x'); // if our current value is 'x' then we add that x to the variable allXs
  let allOs = arrOfLetters.filter(l => l === 'o'); // if our current value is 'x' then we add that x to the variable allXs
  
  return allXs.length === allOs.length;
}


// 'aoBoXOboSox' -> 'aoboxobosox' -> ['a','o','b','o','x','o','b','o','s','o','x']

// ['x','x'];
// ['o', 'o', 'o', 'o', 'o'];