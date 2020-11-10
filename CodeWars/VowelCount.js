// function getCount(str) {
//   return str.split('').filter(l => l.match(/[aeiou]/gi)).length;
// }

// function getCount(str){
//   var vowelList = 'aeiouAEIOU';
//   var vCount = 0;

//   for(var i = 0; i < str.length; i++){
//     if(vowelList.indexOf(str[i]) !== -1){
//       vCount += 1;
//     }
//   }

//   return vCount;
// }


// function getCount(str){
//   let vowelString = 'AEIOUaeiou';
//   let voCount = 0;

//   for(var i = 0; i < str.length; i++){
//     if(vowelString.indexOf(str[i]) !== -1){
//       voCount += 1;
//     }
//   }

//   return voCount;
// }

// function getCount(str){
//   var vowelsCount = 0;

//   for(var i = 0; i < str.length; i++){
//     var currentLetter = str[i].toLowerCase();

//     if( 
//       currentLetter == 'a' ||
//       currentLetter == 'e' ||
//       currentLetter == 'i' ||
//       currentLetter == 'o' ||
//       currentLetter == 'u'
//     ) {
//       vowelsCount++;
//     }
//   }

//   return vowelsCount;
// }






// function getCount(str) {
//   let lowArrOfStr = str.toLowerCase().split('');

//   let vowelsCount = lowArrOfStr.reduce((a, c) => { 
//     if('aeiou'.indexOf(c) > -1){
//       a++;
//     }
//     return a;
//   }, 0);
  
//   return vowelsCount;
// }

console.log(getCount('Apples and Doghnuts!'));
