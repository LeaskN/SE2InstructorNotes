// level 0
    // Create a function which contains a for loop 
    // the for loop should contain the following code: console.log('this is a loop');
    // After the loop return 'finished looping'

    function stat(){
        for(var i = 0; i < 10; i++){
            console.log('this is a loop');
        }
        return 'finished looping';
    }

    // console.log(stat());
// level 1
    // Q1.1
        // Create a function that iterates over all elements in an array and logs them to the console
    // var colors = ['blue', 'red', 'green'];

    // function loopColors(arr){
    //     for(var i = 0; i < arr.length; i++){
    //         console.log(arr[i]);
    //     }
    //     return 'end loop';
    // }
    
    // console.log(loopColors(colors));
    // Q1.2
        // Create a function that iterates over all elements in an array of numbers and multiplies them by 3
    // var num = [8, 5, 6];

    // function timesLog(arr){
    //     for (var i = 0; i < arr.length; i++){
    //         var output = arr[i] * 3;
    //         console.log(output);
    //     }
    //     return 'end';
    // }

    // console.log(timesLog(num));

    // function times3Arr(arr){
    //     var multiplied = [];

    //     for (var i = 0; i < arr.length; i++){
    //         var output = arr[i] * 3;
    //         multiplied.push(output);
    //     }
    //     return multiplied;
    // }
    
    // console.log(times3Arr(num));


// level 2
    // Q2.1:
        // Create a function that iterates over every letter in a word.
        // If this word contains a specific letter log that letter's index.
        // Note: this imitates indexOf(), dont use indexOf in this solution.
        
        // Step1: Create a function
        // Step2:
            // Part 1: Create a loop 
            // Part 2: Iterates over every letter in a word
        // Step 3:
            // Create if statement: If this word contains a specific letter log that letter's index.
        // Step 4: handle edge cases (letter isnt in word)

    // var str = 'gnat';

    // function evLetter(letter){
    //     for(var i = 0; i < str.length; i++){
    //         newStr = str[i];
    //         // console.log(newStr);
    //         if(newStr === letter){
    //             return i;
    //         }
    //     }

    //     return "This string doesn't contain the letter: " + letter + ".";
    // }

    // console.log(evLetter('e'));

// level 3
    // Q3.1
        // Create a function that iterates over each element in an array of strings.
        // It capitalizes the first and last letters and returns a new array with first and last letters capitalized

    // Step 1: Create an array of strings 
    // Step 2: Create a function that takes in an array
    // Step 3: Loop over all elements
    // Step 4: Create accumilator arr for manipulated words  
    // Step 5: Capitalize first letter
    // Step 6: Capitalize last letter

    var arrOfStr = ['orange', 'plum', 'apple'];

    function capfrstLst(arr){
        var capWords = [];

        for(var i = 0; i < arr.length; i++){
            var ele = arr[i];

            var first = ele[0].toUpperCase();
            var middle = ele.slice(1, -1);
            var last = ele[ele.length-1].toUpperCase();

            var capitalized = first + middle + last;

            capWords.push(capitalized);
        }

        return capWords;
    } 
    
    console.log(capfrstLst(arrOfStr));

// level 4
    // 
// level 5
    // Q5.1:
        // Create a function which reverses the order of a word.
        // If you managed without using a loop 🎉 congratulations 🎉
        // Now try to do it using a loop
    // Q5.2:
        // Create a function which takes in an array of words and reports which ones have the letter e