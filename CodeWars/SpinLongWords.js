// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

// function spinWords(param){
  // // turn string to array
  // let allWords = param.split(' ');
  // let spunWords = [];

  // // iterate through new array
  // for(let i = 0; i < allWords.length; i++){
  //   let currentWord = allWords[i];
  //   // check word is 5 chars
  //   if(currentWord.length >= 5){
  //     // flip it 
  //     // put it into new array
  //     spunWords.push(currentWord.split('').reverse().join(''));
  //   } else {
  //     // put it into new array
  //     spunWords.push(currentWord);
  //   }
  // }
  // // return the new array
  // return spunWords.join(' ');


  // let spunWords = allWords.map(a => {
  //   if(a.length >= 5){
  //     return a.split('').reverse().join('');
  //   } else {
  //     return a;
  //   }
  // }).join(' ');


  // split string into array
  // let allWords = param.split(' ');
  // // use filter to get new Array >= 5
  // let longWords = allWords.filter(word => word.length >= 5);
  // let shortWords = allWords.filter(word => word.length < 5);
  // // return new array reversed
  // for (let i = 0; i < longWords.length; i++) {
  //   const element = longWords[i];
  //   console.log(param.indexOf(element))
  // }
  // for (let i = 0; i < shortWords.length; i++) {
  //   const element = shortWords[i];
  //   console.log(param.indexOf(element))
  // }
// }

function spinWords(param){
  let allWords = param.split(' ')
  return allWords.map(word => {
    if(word.length >= 5){
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  }).join(' ');
}

console.log(spinWords('welcome'));
console.log(spinWords('This is a test these indeed are longer words'));