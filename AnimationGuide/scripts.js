// Think about the image as a strip moving behind a viewbox or window, the way it jumps between frames makes the animation happen

var reset; //we will use this variable to clear the setInterval()
var image = document.getElementById("image");
var scale = 1536;
var frameWidth = image.offsetWidth;

//immediately invoked function expression
(function () {
  var position = 0; //start position for the image slicer
  const diff = 455; //diff as a variable for position offset
  const interval = 300; //100 ms of interval for the setInterval()


  reset = setInterval(() => {
    image.style.backgroundPosition = `${position}px 0px`;

    //we increment the position by frame width each time
    if (position < scale) {
      position = position + diff;
    }
    
    //reset the position to frame width, once position exceeds full image width
    else {
      position = 455;
    }

  }, interval); //end of setInterval
} ());

