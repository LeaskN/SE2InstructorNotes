
let query = ''; 
let url = `http://www.omdbapi.com/?t=${query}&apikey=88bd5903`;
let infoUrl = `http://www.omdbapi.com/?i=${query}&apikey=88bd5903`;
let content = document.getElementById('content');


function search(){
    // Created So That if search was just done you cant do it again
    if( query !== document.getElementById('search').value){
    query = document.getElementById('search').value;
   
    url = `http://www.omdbapi.com/?s=${query}&apikey=88bd5903`;

    //ASYNCHRONUS CODE
    fetch(url)
        .then (res => res.json())
        .then(res => web(res.Search))
        .catch(err => console.log(err)) 
    }
}
// res == all of my API infromation 
function web(res){

  for(let i = 0; i < res.length; i++){
     console.log(res)

  
    let picture = document.createElement("img")
    let card = document.createElement('div') 
    let title = document.createElement('div')

  
    card.setAttribute('class', 'card')  
    picture.setAttribute('class', 'posterImg')
    title.setAttribute('class', 'title')
  
    picture.src = res[i].Poster
    title.src = res[i].Title
    console.log(title.src)

    
    // if the search comes up wihtout a picture add the noImage jpg located in assets
    if(picture.src.slice(-3) == "N/A"){
      picture.src ='./assets/noImage.jpg'
    }
    card.appendChild(title)
    card.appendChild(picture)
    content.appendChild(card) 
  }
}

// Enter Key can be used to search 
window.onkeydown = (event) => { 
  if(event.key == 'Enter' ){ 
    search()
  // } if(res.Poster == 'undefined'){
  //   alert('Your search did not have any results.')
  }
}

// alterSearch()
// onLoad()