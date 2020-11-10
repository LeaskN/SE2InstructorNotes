function duplicateCount(text){
  let count = 0;
  text = text.toLowerCase();

  for(let i = 0; i < text.length; i++){
    let currentText = text.slice(0, i) + text.slice(i + 1);
    let currentLetter = text[i];

    if(currentText.includes(currentLetter)){
      count++;
      text = text.split(currentLetter).join('');
      i = -1;
    } 
  }
  
  return count;
}

console.log(duplicateCount('aabBcde'))
console.log(duplicateCount('Indivisibility'))
console.log(duplicateCount('Indivisibilities'))