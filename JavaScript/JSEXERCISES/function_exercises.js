// Function exercises

// level 0
    // create a function which returns the value, 'Hello'
    function greet(param){
        return 'Hello';
    }

    // console.log(greet());
    // create a function which returns the value, 'Goodbye!

    function bye(param){
        return 'Goodbye!';
    }

    // console.log(bye());
// level 1
    // create a function which has two parameters and returns the product of the two
    
    function add(num1, num2){
        var answer = num1 * num2
        return answer;
    }

    // console.log(add(12, 13));

    // create a function which has one parameter and returns a custom greeting using that param
    var spanish = 'Hola!';
    var english = 'Hello!';
    var french = 'Bonjor!';

    function greeting(param){
        return param + " I'm happy to meet you!";
    }

    // console.log(greeting(spanish));
    // console.log(greeting(english));
    // console.log(greeting(french));

    var names = ['Robbie Jones', 'Kevin Bradley', 'Sandy Sanders'];

    function preGreet(name){
        return `Hello ${name} welcome to Greenland!`; 
    }

    // console.log(preGreet(names[0]));
    // console.log(preGreet(names[1]));
    // console.log(preGreet(names[2]));

// level 2
    // create a function which takes in a string and removes all dashes and replaces them with spaces. 
    function noDash(str){
        return str.replace(/-/g, ' ');
    }

    var colors = 'Red-Blue-Purple';
    var cities = 'NYC-LA';
 
    console.log(noDash(colors));
    console.log(noDash(cities));
    

// level 3
    // create a function which takes in an array and removes the last and first items 

var animals = ['dog', 'cat', 'turtle', 'parrot'];

function pet(param){
    param.shift();
    param.pop();
    return param;
}

console.log(pet(animals));
// NEW QUESTIONS

// level 1
    // create a function which returns the opposite of a number
    // Examples:
        // input: -1, output: 1
        // input: 40, output: -40 

    var num = 40;

    function negNum(n){
        var negSign = -n;
        return negSign;
    }

    console.log(negNum(num));
    

// level 3
    // create a function which takes in a non-integer and returns that number multiplied by 13 and then rounded UP to the next integer

    function calc(n){
        var multiplied = n*13;
        return Math.round(multiplied); 
    }

    console.log(calc(2.15311185191615));

// level 4
    // create a function which takes in a string and removes the first, last, and middle letters
    // create a function which returns a random whole number between 25 & 50
