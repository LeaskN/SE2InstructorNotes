// Description:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str){
  // return !str.length ? '' : str.split('-').map((a, i) => i == 0? a : a[0].toUpperCase()+a.slice(1,a.length)).join('').split('_').map((a, i) => i == 0? a : a[0].toUpperCase()+a.slice(1,a.length)).join('');
  return (
    str.replace(/-/g,'_')                                   // replace all dashes with underscores to create uniformity
    .split('_')                                             // convert that string into an array, removing all underscores
    .map(                                                   // looking at each word do something to them, .map returns a new array
      (a, i) => !i ? a                                      // given the params a (element), i (index);  if i is zero return a
      : a[0].toUpperCase() + a.slice(1)                     // if i is not zero, uppercase the first letter and add it with the rest of the word 
    )                                                       // .map ends, returning an array
    .join('')                                               // join that new array into a string
  );                                             
}

console.log(toCamelCase('this-is-a_test'))