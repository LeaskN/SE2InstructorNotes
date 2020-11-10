// Higher order functions
    // Definition: a function that takes in a function as one of its parameters or returns another function

    // Array.map()
        // Description: 
            // creates a new array with the results of calling a function for every element in a previous array
            // does not manipulate or change the original array
        // Example:
            let arr = [4, 9, 16, 144];
            let roots = arr.map(Math.sqrt);
            console.log(roots); // [ 2, 3, 4, 12 ]
            console.log(arr);
            let doubles = arr.map(num => num * 2)
            console.log(doubles) // [8, 18, 32, 288]
    // Array.filter()
        // description: 
            // returns an array of values that pass a condition
        // Example:
            let numbers = [1, 10, 2, 9, 3, 8];
            // es5
            var largerNums5 = numbers.filter(function(n){return n > 5})
            // es6
            let largerNums6 = numbers.filter(n => n > 5);
            console.log(largerNums5); // [ 10, 9, 8 ]
            console.log(largerNums6); // [ 10, 9, 8 ]
            // Array.reduce()
        // description:
            // returns a single value based on all the given values in an array.
            // important parts include accumulator and current value 
        // Example:
            let reducedValue = [1,2,3,4].reduce(function(accumulator, currentNum){return accumulator + currentNum});
            let reducedVal = [1,2,3,4].reduce((a, c) => a + c)
            console.log(reducedValue) // [1,2,3,4] -> 10

            

// Examples:
    // old reduce
    // function addAll(arr){
    //     var finalNum = arr[0];

    //     for(var i = 1; i < arr.length; i++){
    //         finalNum += arr[i];
    //     }

    //     return finalNum;
    // }

    // console.log(addAll([1,2,3,4]))

    // can reduce be used on an array with non-numbers?
        let names = ['Ramsey Lewis', 'Sam Pierre Louis', 'Will Pierre Louis', 'Abe Johnson', 'Shamika Earle'];

        let allNames = names.reduce(
            function(acc, str){
                return acc + ' ' + str.split(' ')[0];
            }, ['']
        );

        console.log(allNames);
// old filter
function oldFilter(arr){
    var newArr = [];

    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if(element > 5){
            newArr.push(element)
        }
    }

    return newArr;
}