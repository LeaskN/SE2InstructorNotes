const factorial = n => {
  return n > 0 ? n * factorial(n-1) : 1;
}

console.log(factorial(6));