let container = document.getElementById('container');
let query = 'Water';
let url = `https://api.unsplash.com/search/photos/?query=${query}&client_id=n-ymZ8DgzdCfJhgjO3PAIugGahmiCJaBhzB5BLOSPsY`

function showAll(arr){
  arr.forEach(a => {
    console.log(a);
    let card = document.createElement('div');
    let newImage = document.createElement('img');
    let description = document.createElement('p');

    card.setAttribute('class', 'card');

    newImage.src = a.urls.full;
    description.innerText = a.description;

    card.appendChild(newImage);
    card.appendChild(description);
    container.appendChild(card);
  }); 
}

function search(){
  query = document.getElementById('search').value || 'tech';

  url = `https://api.unsplash.com/search/photos/?query=${query}&client_id=n-ymZ8DgzdCfJhgjO3PAIugGahmiCJaBhzB5BLOSPsY`
  container.innerHTML = '';

  fetch(url)
    .then( res => res.json() )
    .then( res => {
      showAll(res.results)
    })
    .catch(err => {
      console.log('Error happened during fetching!', err);
    });
}

window.onload = search;