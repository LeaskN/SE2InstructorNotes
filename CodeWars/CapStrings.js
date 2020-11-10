function JC (str) {
  return (str.split(' ').map(fullWord => fullWord[0].toUpperCase() + fullWord.slice(1))).join(' ');
};

let phrase = "How can mirrors be real if our eyes aren't real"

console.log(JC(phrase));