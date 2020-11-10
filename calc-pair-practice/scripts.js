var allButtons = document.querySelectorAll('.button');
var screen = document.querySelector('#screen');
var lastInput = document.querySelector('#lastInput');
var doPercent = false;
var lastPress = '';

function inputChange(event){
  // this function only accepts numbers and operators
  var char = event.target.innerText;

  // if the last button press was a number and equals was just pressed
  // reset the screen (otherwise add to the screen)
  if(lastPress === '=' && char.match(/[0-9]/g)){
    screen.innerText = '';
  }
  lastPress = '';


  // handle decimals
  if(char === '.' && screen.innerText.indexOf('.') === -1){
    screen.innerText += '.';
  } else if(char === '.') {
    screen.innerText = screen.innerText.split('.').join('');
  }

  // handle numbers
  if(char.match(/[0-9]/)){

    screen.innerText += char;
    // lastInput = char;
  }

  // handle operators
  if((!char.match(/^[0-9]/g) && char !== '.') && screen.innerText.slice(-1) !== ' '){
    screen.innerText += char;
  }

}

function flipSign(){
  if(screen.innerText[0] === '-'){
    screen.innerText = screen.innerText.slice(1, screen.innerText.length);
  } else {
    screen.innerText = '-' + screen.innerText
  }
}

function clear(){
  if(screen.innerText != ''){
    screen.innerText = '';
  } else {
    lastInput.innerText = '';
  }
}

function doMath(){
  lastPress = '=';
  var arrOfSigns = screen.innerText.match(/[^0-9]/g);
  var arrOfNums = screen.innerText.match(/\d+/g);

  if (!screen.innerText[screen.innerText.length - 1].match(/^[0-9]/g)){
    lastPress = '';
    return
  } else if(!arrOfSigns){
    return lastInput.innerText = screen.innerText;
  } 
  
  
  var numOfLoops = arrOfSigns.length;

  for(var i = 0; i < numOfLoops; i++){
    var num1 = arrOfNums[0];
    var num2 = arrOfNums[1];
    var sign = arrOfSigns[0];
    var newNum;

    if(sign && sign === '+'){
      newNum = Number(num1) + Number(num2);
    } else if(sign && sign === '-'){
      newNum = Number(num1) - Number(num2);
    } else if(sign && sign === 'x'){
      newNum = Number(num1) * Number(num2);
    } else if(sign && sign === '/'){
      newNum = Number(num1) / Number(num2);
    }
    console.log(arrOfNums);

    arrOfNums.shift();
    arrOfNums.shift();
    arrOfSigns.shift();
    arrOfNums.unshift(newNum);
  
    screen.innerHTML = newNum;
  }
  lastInput.innerText = screen.innerText;
}

function percentage(event){
  console.log('percentage was clicked');
}

function addAllEventListeners(arr){

  for(var i = 0; i < arr.length; i++){
    // its a number
    if(arr[i].innerText.match(/^[0-9]*$/) && arr[i].innerHTML != ''){
      arr[i].addEventListener('click', inputChange);
    } else if (arr[i].innerText === '+/-'){
      arr[i].addEventListener('click', flipSign);
    } else if (arr[i].innerText === '%'){
        arr[i].addEventListener('click', percentage);
    } else if (arr[i].innerText === 'C'){
      arr[i].addEventListener('click', clear);
    } else if (arr[i].innerText === '='){
      arr[i].addEventListener('click', doMath);
    } else {
      arr[i].addEventListener('click', inputChange);
    }
  }
}

addAllEventListeners(allButtons);