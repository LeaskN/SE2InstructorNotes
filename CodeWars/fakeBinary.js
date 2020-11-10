// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
  var val = '';
  
  for(var i = 0; i < x.length; i++){
    if(Number(x[i]) < 5 ){
      val += '0';
    } else {
      val += '1';
    }
  }
  
  return val;
}