// Q1: Create a loop that greets us 5 times!
//      - The console should similar to the following:
//          - Hi!
//          - Hi!
//          - Hi!
//          - Hi!
//          - Hi!

function stat(){
    for(var i = 0; i < 4; i++){
        console.log('Hello there!');
    }
    return 'Hello there!';
}

console.log(stat());

// Q2: Create a loop which logs the index. Try and use a template literal to produce the result.
//      - The console should similar to the following:
//          - Loop Count: 1
//          - Loop Count: 2
//          - Loop Count: 3
//          - Etc.. based on the max value parameter

var num = [8,5,6];

function times(arr){
    for(var i = 0; i < arr.length; i++){
        var output = arr.indexOf(arr[i]);
        console.log(`Loop Count: ${output}`);
    }
    return 
}

console.log(times(num))

// Q3: Loop over the following array and console.log the current index value
//      - ['Zeus', 'Hades', 'Hermies', 'Poseidon']
//      - The console should similar to the following:
//          -   Zeus 0
//          -   Hades 1
//          -   Hermies 2
//          -   Poseidon 3

var arr = ['Zeus', 'Hades', 'Hermies', 'Poseidon'];

function gods(){
    for(var i = 0;i < arr.length;i++){
        console.log('- ' + arr[i] + ' ' + i);
    }
    return arr;
}
console.log(gods());

// Q4: Loop over an array of strings and return a new array of single letter strings
    // Input: ['As', 'Soon', 'As', 'Possible']
    // Output: ['A','S','A','P']

var sentInputArr = ['As', 'Soon', 'As', 'Possible'];
var forYourInfo = ['For', 'Your', 'Information'];

function sentInput(arr){
    var output = [];

    for(var i = 0; i < arr.length;i++){
        var input = arr[i];
        var midTree = input.charAt(0)
        output.push(midTree);
    }
    return output;
}

console.log(sentInput(sentInputArr));
console.log(sentInput(forYourInfo));

// Q5: Loop over an array and log to the CLI an array where each word has its second letter capitalized
    // - Input: ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
    // - Output: ['APple', 'BAnana', 'ORange', 'PEach', 'STrawberry', 'PLum'];

var fruitTree = ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];

function capSec(arr){
    var capWords = [];

    for(var i = 0; i < arr.length; i++){
        var ele = arr[i]; // get our current element (ex: apple)
        var secondLet = ele[1].toUpperCase(); // get the second letter of the current element
        var wordArr = ele.split(''); // ex: 'apple' becomes ['a','p','p','l','e'];
        wordArr[1] = secondLet; // swap second element with our capital (secondLet) ['a', 'P', 'p', 'l', 'e'];
        var capitalized = wordArr.join(''); // convert array back to string 'aPple'
        capWords.push(capitalized); // push it into our accumilator 
    }

    return capWords;
}

console.log(capSec(fruitTree));

var fruits = ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
var names = ['Mike', 'Samantha', 'Ray'];

function fruitCap(arr){
    for (var i = 0; i < arr.length; i++){
        var currentArr = arr[i];
        var upperCase = arr[i][1].toUpperCase();
        var endOfSting = currentArr.slice(2);
        var newString = arr[i][0] + upperCase + endOfSting;
        arr[i] = newString;
    }

    return arr;
}

console.log(fruitCap(names));

// Q6: Loop over an array of names and log the first and last initial of each person
    // - Input: ['Shamika Earle', 'Ramsey Lewis', 'Samuel Pierre Louis', 'Wilson Pierre Louis' ];
    // - Output: ['SE', 'RL', 'SPL', 'WPL' ];

var nameLst = ['Shamika Earle', 'Ramsey Lewis', 'Samuel Pierre Louis', 'Wilson Pierre Louis', 'Nicholas Paul Norman Leask'];

function lstInitial(arr){
    var output = []; // accumilator for all sets of initials
    
    for(var i = 0; i < arr.length; i++){
        var nameSplt = arr[i].split(' '); // ['Samuel', 'Pierre', 'Louis']
        var initials = ''; // accumilator
        
        for(var j = 0; j < nameSplt.length; j++){
            var currentName = nameSplt[j]; // 'Samuel'
            var initial = currentName[0];  // 'S'
            initials = initials + initial; // 'S' + 'P'
        }

        output.push(initials); // push full set of initials into our array of initials
    }
    return output; 
}

console.log(lstInitial(nameLst));