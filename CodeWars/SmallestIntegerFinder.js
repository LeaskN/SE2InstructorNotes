// function findSmallestInt(args) {
//     let min = Math.min.apply(null, args);

//     return min;
// }  

function findSmallestInt(args) {
    // create a variable that holds the smallest integer, initially fill it with the first element
    var smallestInt = args[0];
    // loop through all our array elements (starting at 1 for effiency)
    for(var i = 1; i < args.length; i++){
        // if our current element is smaller than our current "smallestInt"
        if(args[i] < smallestInt){
            // then replace the smallest integer with the current integer
            smallestInt = args[i];
        }
    }
    // return our final smallestInt
    return smallestInt;
}



console.log(findSmallestInt([1,2,3,4,5,-1,-100]))
console.log(findSmallestInt([1,2,3,4,5,0]))
console.log(findSmallestInt([1,2,3,4,.12312,.1231]))