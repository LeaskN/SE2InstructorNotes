document.onkeydown = clicked;

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

const scale = 2;
const width = 16;
const height = 18;
const scaledWidth = scale * width;
const scaledHeight = scale * height;
let char = {x: 0, y: 0, imgSrc:'./assets/Green-Cap-Character-16x18.png', img: new Image()};
let enemy = {x: 200, y: 200, imgSrc:'./assets/Red-Cap-Character-16x18.png', img: new Image()};
let enemies = [];
char.img.src = char.imgSrc;
enemy.img.src = enemy.imgSrc;

const allWalls = [
  {startX:80, startY:250, finishX:80, finishY:100},
  {startX:20, startY:90, finishX:300, finishY:90},
  {startX:300, startY:700, finishX:700, finishY:700},
];

function drawChar(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(
    char.img,
    frameX * width, 
    frameY * height,
    width,
    height,
    canvasX,
    canvasY,
    scaledWidth,
    scaledHeight
  );
}

for(var i = 0; i < 5; i++) {
  enemies[i] = {x: 200, y: 200, imgSrc:'./assets/Red-Cap-Character-16x18.png', img: new Image()};
}

function drawEnemies(frameX, frameY, canvasX, canvasY) {
  for (let i = 0; i < enemies.length; i++) {
    canvasX += 40;
    canvasY += 40;
    ctx.drawImage(
      enemy.img,
      frameX * width, 
      frameY * height,
      width,
      height,
      canvasX,
      canvasY,
      scaledWidth,
      scaledHeight
    );
  }
}

function hunt(){
  for(let i = 0; i < enemies.length; i++){
    let currentEnemy = enemies[i];

    if(char.x > currentEnemy.x){
      currentEnemy.x++
    } else if (char.y > currentEnemy.y){
      currentEnemy.y++
    } else if (char.x < currentEnemy.x){
      currentEnemy.x--
    } else if (char.y < currentEnemy.y){
      currentEnemy.y--
    }
    console.log(currentEnemy.x, currentEnemy.y)
    drawEnemies(cycleLoop[currentLoopIndex], currentDirection, currentEnemy.x, currentEnemy.y)
  }



}

function drawWalls(arr){
  arr.forEach(element => {
    ctx.beginPath();
    ctx.moveTo(element.startX, element.startY);
    ctx.lineTo(element.finishX, element.finishY);
    ctx.stroke();
  })
}

const cycleLoop = [0, 1, 0, 2];
let currentLoopIndex = 0;
let frameCount = 0;
let currentDirection = 0;
let down = true;
let up, right, left = false;
let wallRight, wallLeft, wallUp, wallDown = false;

function redraw() {
  frameCount++;

  if (frameCount % 2 === 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawChar(cycleLoop[currentLoopIndex], currentDirection, char.x, char.y);
    drawWalls(allWalls);
  }

  hunt();
  
  if (frameCount < 10) {
    window.requestAnimationFrame(redraw);
    return;
  }

  frameCount = 0;
  currentLoopIndex++;

  for(let i = 0; i < allWalls.length; i++){
    const currentWall = allWalls[i];
    // console.log(currentWall.startX, char.x)
    if(char.x + width === currentWall.startX){
      wallRight = true;
    }
  }

  if(up){
    currentDirection = 1;
  } else if(right){
    currentDirection = 3;
  } else if(left){
    currentDirection = 2;
  } else if(down){
    currentDirection = 0;
  } else {
    return
  }
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
  }
    
  if (currentDirection >= 4) {
    currentDirection = 0;
  }

  window.requestAnimationFrame(redraw);
}

function clicked (e) {
    down = false;
    left = false;
    right = false;
    up = false;
  if (e.keyCode == '38' && !wallUp) {
    char.y -= 5;
    up = true;
  }
  else if (e.keyCode == '40' && !wallDown) {
    char.y += 5;
    down = true;
  }
  else if (e.keyCode == '37' && !wallLeft) {
    char.x -= 5;
    left = true;
  }
  else if (e.keyCode == '39' && !wallRight) {
    char.x += 5;
    right = true;
  }
}



enemy.img.onload = function() {
  window.requestAnimationFrame(redraw);
};