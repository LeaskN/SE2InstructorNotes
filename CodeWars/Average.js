// Write function avg which calculates average of numbers in given list.

function find_average(array) {
  let arrayLength = array.length;
  let totalSum = array.reduce((x, y) => x + y );
  let average = totalSum/arrayLength;
  return average;
}

console.log(find_average([1, 2, 3]));
console.log(find_average([ 1, 100, 200, 300, 400, 500, 600]));