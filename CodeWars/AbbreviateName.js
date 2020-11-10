// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F

function abbrevName(name){
  var nam = name.split(' ');
  return (nam[0][0] + '.' + nam[1][0]).toUpperCase();
}

// function abbrevName(name){;
//   return name.split(' ').map(i => i[0].toUpperCase()).join('.');
// }

function abbrevName(name){
  let output = '';
  let nameToArr = name.split(' ');

  for(let i = 0; i < nameToArr.length; i++){
    let currentName = nameToArr[i];
    let firstLetter = currentName[0].toUpperCase();

    output += firstLetter;

    if(i < nameToArr.length - 1){
      output += '.';
    }
  }

  return output;
}

console.log(abbrevName('Patrick Holmes Smith Watson'));