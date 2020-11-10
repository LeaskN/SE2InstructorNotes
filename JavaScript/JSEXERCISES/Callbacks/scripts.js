let body = document.querySelector('body');

let content = document.createElement('div');
content.innerHTML = `<p>Hello World!</p>`

body.appendChild(content);

let data = [1,2,3,4,5,6,7,8,9, 39, 4, 101, 50, 17];

function filterData(arr){
  for(var i = 0; i < arr.length; i++){
    if(data[i] < 5){
      addToBody('h6', i);
    } else if( data[i] < 10 ) {
      addToBody('h5', i);
    } else if( data[i] < 15) {
      addToBody('h4', i);
    } else if( data[i] < 100) {
      addToBody('h3', i);
    } else {
      addToBody('h1', i);
    }
  }
}

function addToBody(str, i){
  let newItem = document.createElement(str);
  newItem.innerHTML = data[i];
  body.appendChild(newItem);
}

filterData(data);


console.log(body);


// pseudo code calc example

function buttonPressed(arr){

    if(button === '+'/* any of the operators +, -, /, or numbers* */){
      /* call add to screen function */
    } else if( button === '=') {
      /* call evaluate function & do math (ultimately add to screen) */
    } else if( button === 'C') {
      /* clear the screen (This is so little code you dont need to create a function) */
    } 

}

function addToScreen(param){

}

function evaluate(str){

}

function clear(){
  screen.innerHTML = '';
}