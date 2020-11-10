// Loops
    // Definition: loops repeat lines of code until a parameter is met.
    // We can use a for loop to iterate over Strings or Arrays
    // We can use a for-in loop to iterate over an Object

// for loop syntax
    // declare a vaiable (i), and set it equal to our starting number
    // create a condition that stipulates when we stop the loop
    // indicate how the variable (i) will change each interation 
    for(var i = 0; i < 10; i++){
        // do something
    }

// Types:
    //     // Note: we will usually just use for or for-in loops
    // // while
    //     while(condition /* is true*/){
    //         // do something
    //     }
    // // do-while
    //     do{
    //         // do something 
    //     } while (condition /* is true*/)
    // // for
    //     for(var i = 0; i < arr.length; i++){
    //         // do something
    //     }
    // // for-in
    //     for(var key in object){
    //         // do something
    //     }

// Keywords:
    // break: can be used to break out of a loop

    // return: while not a keyword for a loop, since we usually loops inside of a function, the return will break out of the function and therefore the loop too

// Basic accumilator pattern
    // Definition: gather data based on input data. This usually takes the form of a new variable holding a new set of data.
        // Example
        function evens(arr){
            var evenNums = [];

            for(var i = 0; i < arr.length; i++){
                var currentNum = arr[i];
                if(currentNum % 2 === 0){
                    evenNums.push(currentNum)
                }
            }
            return evenNums;
        }

        // console.log(evens([0,1,2,3,4,5,6,7,8,9,10]));

    // Looping through an object
    let state = {
        name: 'Texas',
        phrase: "Don't mess with Texas!",
        fact: 'Texas is the second largest US state',
        population: 1000000,
        biome: 'Desert',
    }

    for(key in state){
        let currentVal = state[key];
        console.log(key, currentVal);
    }

// Nested loops
    // Definition: a loop inside a loop

    // Example: Uppercase ever other letter
    var planets = ['Earth', 'Mars', 'Venus'];

    function looper(arr){
        var newPlanets = [];
        var count = 0;

        for (var i = 0; i < arr.length; i++) {
            var planet = arr[i];
            var modifiedName = planet.split('');
            
            for (var j = 0; j < planet.length; j++) {
                count++
                if(j % 2 === 1){
                    var capLetter = planet[j].toUpperCase();
                    modifiedName[j] = capLetter;
                }
            }
            newPlanets.push(modifiedName.join(''));
        }
        console.log(count)
        return newPlanets;
    }
    
    console.log(looper(planets));



// Examples: 
function fixData(arr){
    for(var i = 0; i < arr.length; i++){
        // do something
    }
}

function greeter(arr){
    for (var i = 0; i < arr.length; i++) {
        var currentName = arr[i];
        console.log(`Hello ${currentName}`);
    }
}

// greeter(['Shamika', 'Sam', 'Ramsey', 'Will']);