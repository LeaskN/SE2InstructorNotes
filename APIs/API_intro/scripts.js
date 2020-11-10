// THERE IS NO REQUEST HERE THIS IS A CONCEPTUAL EXAMPLE
// when you request from an API you get a object response 
// we will simulate an API request by building our own 'api response'

// sports
let body = document.querySelector('body');
// let body = document.getElementById('content');

function getReq(){
  let res = {
    "Soccer": {name: "Soccer", numOfPlayers: 22, ball: true, equipment: ['boots', 'ball', 'goals', 'shin pads'], img:'https://i.pinimg.com/originals/c8/c0/cd/c8c0cd52cde3d2412143c56a87ed6b09.jpg'},
    "Tennis": {name: "Tennis", numOfPlayers: 2, ball: true, equipment: ['sneakers', 'ball', 'net', 'raquet'], img:'https://hamptonracquet.com/wp-content/uploads/2016/02/large-banner-tennis.jpg'},
    "Rugby": {name: "Rugby", numOfPlayers: 30, ball: true, equipment: ['boots', 'ball', 'goals'], img:'https://goravens.ca/wp-content/uploads/banner-rugby-1.jpg'},
    "Formula One": {name: "Formula One", numOfPlayers: 20, ball: false, equipment: ['car', 'helmate', 'driving shoes', 'driving gloves', 'driving suit'], img:'https://britgamer.s3.eu-west-1.amazonaws.com/styles/full_width_image/s3/2020-04/f1-2020-banner.jpg?itok=MnGpThle'},
  }
  
  for(let key in res){
    console.log(res[key])

    // first thing is create the elements
    let banner = document.createElement('img');
    let newTitle = document.createElement('h1');
    let equipment = document.createElement('p');
    let card = document.createElement('div');

    //second set any attributes (not always needed)
    card.setAttribute('class', 'card');

    // third add content to element (img, text, numbers, etc..)
    banner.src = res[key].img;
    newTitle.innerText = res[key].name;
    equipment.innerText = res[key].equipment;

    // fourth append data to the website (either directly to the body or to an element)
    card.appendChild(banner);
    card.appendChild(newTitle);
    card.appendChild(equipment);

    // always appened everything to the body or an existing element
    body.appendChild(card);
  }
}

console.log(getReq());