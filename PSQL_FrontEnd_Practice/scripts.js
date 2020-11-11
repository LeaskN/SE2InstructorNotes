let allPokemon = document.getElementById('allPokemon');

function addPokemon(e){
  let pokemon = {
    name: document.getElementById('name').value,
    image: document.getElementById('image').value,
    attackname: document.getElementById('attackname').value,
    attackdesc: document.getElementById('attackdesc').value,
    health: document.getElementById('health').value,
    type: document.getElementById('type').value
  }
  fetch('http://localhost:3000/pokemon', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(pokemon)
  })
  .then(res => res.json())
  .then(getPokemon())
  .catch(error => console.log(error))
}

function getPokemon(){
  allPokemon.innerHTML = '';

  fetch('http://localhost:3000/pokemon', { method: 'GET' })
    .then(res => res.json())
    .then(res => {
      res.forEach(pokemon => {
        let card = document.createElement('div');
        // let title = 

        card.setAttribute('class', 'card');
        card.setAttribute('style', `background-image: url(${pokemon.image})`)

        card.innerText = pokemon.name;

        allPokemon.appendChild(card);

        console.log(pokemon)
      });
    })
    .catch(error => console.log(error))
}

