// Functions
// Definition: A JavaScript function is a reusable block of code designed to perform a particular task.
// Note: 'invoking' or 'calling' a function makes it execute its code, this is done by having parenthesis after the function name ( example() )
// Note: A function can be called many times, each time with an output based on arguments that are passed in

function test(){
    return 'stuff'
}
// console.log(test())

// Note: functions dont inherently write to the CLI, we still need to console.log the invocation of the function

// Why even use functions? 
    // Reduces amount of code that is required
        // This is helpful for a few reasons:
            // Reduces potential for error
            // Simplifies our programs 
            // Gives potential for upgrades & changes 

// Syntax
    // Single line syntax (unusual):
        // function name(parameters){return x}
    // Multi line syntax:
        // function name(parameters){
            // do something 
            // return something
        // }
    // Syntax for invocation with an argument
        // name(arguments)

// Parameters:
    // A function can require parameters
    // The parameters are the values that are between the parenthesis when declaring the function
    // They dont have their own value, they receieve their value from the arguments when the function was called

// Arguments:
    // If a function has parameters, it needs to take in arguments
    // These arguments are passed in when the function is called

// Syntax for different function declarations

    // 'Basic function'
        function doubler(param){
            return param * 2
        }
        console.log(doubler(3));

    // Anonymous function
        var square = function(param){
            return param * param;
        }
        console.log(square(3));

    //Arrow function (ES6)
        var greeter = (param) => {
            return `Hello ${param}!`
        } 
        console.log(greeter('Jason'));

    // Immediately Invoked Function Expression (IIFE)
        var json = 'This is a string;';

        console.log(function(param){
            return param.replace(/ /g,'-');
        }(json));

        console.log(((param) => {
            return param.replace(/ /g,'-');
        })(json));

// Default arguments
    function defaulter(param = 5){
        console.log(param);
        return param;
    }
    // console.log(defaulter() * 2);

// Recursion:
    // When something calls itself from inside itself 
    // Example:
        function again(param){
            let newNum = param/2;
            if(newNum > 2){
               return again(newNum);
            } else {
                return newNum;
            }
        }

        console.log(again(999999999999));

// Call Back functions
    // a function that calls another function 
    
    let mathEval = (n1, n2) => {
        return n1 + doubler2(n2);
    }
    let doubler2 = (n) => {return n*2}
    console.log(mathEval(3, 5));

// Examples
    // A greeting function:
        // Function decleration
        function greet(param){
            return "Hello!"
        }
        // Function invocation 
        // console.log(greet());

    // An addition function:
        function addition(num1, num2){
            return num1 + num2;
        }
        // console.log(addition(5, 10));

    // A personalized greeting function
        var name = ['Clark Kent', 'Peter Parker', 'Mary Jane', 'Tony Stark', 'Bruce Banner', 'Bruce Wayne']

        function persGreet(name){
            return `Hello ${name}! Welcome to my app!`;
        }

        // console.log(persGreet(name[1]));
        // console.log(persGreet(name[2]));
        // console.log(persGreet(name[3]));
        // console.log(persGreet(name[4]));
        // console.log(persGreet(name[5]));
        // console.log(persGreet(name[6]));


        
        // console.log(`Hello ${name[1]}! Welcome to my app!`)
        // console.log(`Hello ${name[2]}! Welcome to my app!`)
        // console.log(`Hello ${name[3]}! Welcome to my app!`)
        // console.log(`Hello ${name[4]}! Welcome to my app!`)
        // console.log(`Hello ${name[5]}! Welcome to my app!`)
        // console.log(`Hello ${name[6]}! Welcome to my app!`)

    // A formal greeter
        var heros = ['Clark Kent', 'Peter Parker', 'Mary Jane', 'Tony Stark', 'Bruce Banner', 'Bruce Wayne']

        function persGreet(name){
            var last = name.split(name.indexOf(' ') + 1);
            //if statement
            // deals with male vs female
            // outputs based on gender
            // more conditionals
            // based on age, decides on master vs mr & mrs miss 
            return `Hello Mr. ${last}! Welcome to my app!`;
        }

        // console.log(persGreet(heros[0]));
        // console.log(persGreet(heros[1]));
        // console.log(persGreet(heros[2]));
        // console.log(persGreet(heros[3]));
        // console.log(persGreet(heros[4]));
        // console.log(persGreet(heros[5]));
        
        function persGreet(name){
            var fullName = name.split(' ');
            return `Hello Mr.${fullName[1]}! Welcome to my app!`;
        }


        // given an array, find the strings, replace all 'e's with a dash, and return the result
        var strings =['Hello', 'World', 'Greeting', 'TEST', 'Gene', 'Banana'];
        
        function eRemover(arr){
            var output = [];

            for(var i = 0; i < arr.length; i++){
                var currentWord = arr[i];
                output.push(currentWord.replace(/e/g, ''));
            }

            return output;
        }

        // console.log(eRemover(strings));



