divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"

function divisors(integer) {
  let allDivisors = [];
  for(let i = 2; i < integer; i++){
    if( integer % i == 0){
      allDivisors.push(i);
    }
  }
  return allDivisors.length > 0 ? allDivisors : `${integer} is prime`;
};

console.log(divisors(12));
console.log(divisors(25));
console.log(divisors(13));