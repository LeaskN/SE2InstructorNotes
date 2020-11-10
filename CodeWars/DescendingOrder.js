// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

function descendingOrder(n){
  var str = '' + n;
  var arr = str.split('');
  var finalArr = [];
  var loopCount = arr.length;


  for(var i = 0; i < loopCount; i++){
    var largest = arr.reduce((a, c) => Number(a) > Number(c) ? a : c);
    var cut = arr.indexOf(largest);
    arr.splice(cut, 1);
    finalArr.push(largest);
  }

  return Number(finalArr.join(''));
}

// function descendingOrder(n){
//   var str = '' + n;
//   var arr = str.split('');
//   var finalArr = [];
//   var loopCount = arr.length;

//   var largest = 0;


//   for(var i = 0; i < loopCount; i++){
//     for (let j = 0; j < arr.length; j++) {
//       var element = arr[j];

//       if(element > largest){
//         largest = element;
//       } 

//       var cut = arr.indexOf(largest);
//       arr.splice(cut, 1);
      
//     }
//     finalArr.push(largest);

//     var cut = arr.indexOf(largest);
//     arr.splice(cut, 1);
//     finalArr.push(largest);
//   }

//   return Number(finalArr.join(''));
// }


console.log(descendingOrder(0));
console.log(descendingOrder(1));
console.log(descendingOrder(123456789));
console.log(descendingOrder(12354515));
console.log(descendingOrder(53457871));