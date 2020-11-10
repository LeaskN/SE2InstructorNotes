// Arrays
// Definition: Arrays are comma seperated lists of indexed information, they are surrounded by square brackets, can contain any data type, and are secretly actually objects. 

var existingVariable; // ignore this, needed for the example

// An example of an array
var arr = [ 'thing1', -3, null, true, {'Object':'Value'}, ['array'], existingVariable, undefined ];

// console.log(arr);

// this previous array is VERY uncommon, usually data is organized atleast by types

var students = ['Shamika', 'Will', 'Sam', 'Ramsey'];

var testScores = [100, 90, 89, 80, 100, 99, 66];


// Indexing: arr[i]
    // Definition: get specific elements from within an array by using bracket notation
    // Examples:
        // Get the first test score
        var firstScore = testScores[0];
        // console.log(firstScore);

        // Get the last test score with a dynamic solution
        var lastIndex = testScores.length - 1;
        var lastScore = testScores[lastIndex];
        // console.log(lastScore);

// Methods
    // .indexOf()
        // Retrieves the index of the first occurance of a value
        //Example:
            // testScores.indexOf(100);

    // .length
        // Gets us the length of an array
        // Note: this is the same as for strings
        // Example:
            students.length // 4

    // .push(x)
        // Definition: adds new items to the end of an array
            // Note: we can add multiple comma seperated items at once: champions.push('Liverpool', 'Blackburn') 
        var champions = ['Manchester United', 'Manchester City', 'Arsenal'];
        // console.log(champions); // logs ['Manchester United', 'Manchester City', 'Arsenal'] 
        champions.push('Liverpool'); 
        // console.log(champions); //logs ['Manchester United', 'Manchester City', 'Arsenal', 'Liverpool' ] 

    // .pop()
        // Definition: removes last item from the end of an array
        champions.pop();
        champions.pop();
        // console.log(champions); //  logs ['Manchester United', 'Manchester City']  because Liverpool & Arsenal have been removed

    // .unshift(x)
        // Definition: adds to the beginning of an array
            // Note, we can add multiple comma seperated items at once: champions.unshift('New Castle', 'Everton')
        champions.unshift('New Castle'); 
        // console.log(champions); // logs [ 'New Castle', 'Manchester United', 'Manchester City' ]

    // .shift() 
        // Definition: removes from the beginning of an array
        champions.shift(); 
        // console.log(champions); // logs ['Manchester United', 'Manchester City']

    // .join()
        // Definition: Converts an array into a string, based on a given character
        var champsString = champions.join(' and ')
        // console.log(champsString);

        // note:
            // join goes hand in hand with split
            // console.log(champsString.split('a'));

    // .splice(index, num2Delete, item2Add)
        // Definition: Add or remove elements from anywhere in an array. 
        // Examples:
            var computers = ['Mac', 'Dell', 'Lenovo', 'Alienware', 'Compaq'];

            // insert Acer into index 2 by using splice()
            computers.splice(2, 0, 'Acer');
            // console.log(computers); // Logs: [ 'Mac', 'Dell', 'Acer', 'Lenovo', 'Alienware' ]

            // Insert HP into index 4 and delete whatever is currently at index 4
            computers.splice(4, 1, 'HP');
            // console.log(computers);

            // Insert Toshiba and Fujitsu into the middle of an array without deleting anything 
            var compNum = computers.length;
            computers.splice(compNum/2, 0, 'Toshiba', 'Fujitsu', 'SONY');
            console.log(computers);