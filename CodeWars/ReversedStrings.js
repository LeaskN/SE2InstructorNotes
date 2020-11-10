// Complete the solution so that it reverses the string passed into it.

// function solution(str){
//     //declare a variable called arr and equal it to the string split on an empty string
//     let arr = str.split('');
//     // reverse the array using the reverse method
//     let rev = arr.reverse();
//     // convert our reversed array into a string using an empty string
//     let finalStr = rev.join('');
//     // return our final string
//     return finalStr;
// }

// function solution(str){
//     return str.split('').reverse().join('');
// }

function solution(str){
    let reversedString = '';
    for(var i = str.length - 1; i >= 0; i--){
        reversedString += str[i];
    }
    return reversedString;
}
// console.log(solution("hello world"));
