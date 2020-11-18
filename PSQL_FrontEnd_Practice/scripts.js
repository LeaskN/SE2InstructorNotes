let allPokemon = document.getElementById('allPokemon');
let singleView = document.getElementById('singleView');

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
  .then(getPokemon)
  .catch(error => console.log(error))
}

function getPokemon(){
  allPokemon.innerHTML = '';

  fetch('http://localhost:3000/pokemon', { method: 'GET' })
    .then(res => res.json())
    .then(res => {
      res.forEach(pokemon => {
        let card = document.createElement('div');
        let buttons = document.createElement('div');
        let delButton = document.createElement('button');
        let viewButton = document.createElement('button');

        card.setAttribute('id', pokemon.id);
        card.setAttribute('class', 'card');
        card.setAttribute('style', `background-image: url(${pokemon.image || ''})`);
        buttons.setAttribute('class', 'pokemonButtonsContainer');
        delButton.setAttribute('class', 'button');
        viewButton.setAttribute('class', 'button');
        
        delButton.onclick = (event) => deletePokemonById(event);
        viewButton.onclick = (event) => viewPokemonById(event);

        delButton.innerText = `Delete ${pokemon.name}`;
        viewButton.innerText = `View ${pokemon.name}`;

        buttons.appendChild(viewButton);
        buttons.appendChild(delButton);

        card.appendChild(buttons);
        
        allPokemon.appendChild(card);
      });
    })
    .catch(error => console.log(error))
}

function deletePokemonById(event){
  console.log(event.target.parentNode.parentNode.id);

  fetch(`http://localhost:3000/pokemon/${event.target.parentNode.parentNode.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(getPokemon)
  .catch(error => console.log(error))
}

function viewPokemonById(event){
  singleView.innerHTML = '<button id="closeButton" onclick=hidePopup(event)>X</button>';
  singleView.setAttribute('style', 'display: flex')


  fetch(`http://localhost:3000/pokemon/${event.target.parentNode.parentNode.id}`, { method: 'GET' })
  .then(res => res.json())
  .then(pokemon => {
    let name = document.createElement('div');
    let hp = document.createElement('div');
    let type = document.createElement('div');
    let image = document.createElement('img');
    let attack = document.createElement('div');
    let attackDesc = document.createElement('div');

    name.innerText = `${pokemon[0].name}`
    hp.innerText = `${pokemon[0].health}`
    type.innerText = `${pokemon[0].type}`
    image.src = `${pokemon[0].image}`
    attack.innerText = `${pokemon[0].attackname}`
    attackDesc.innerText = `${pokemon[0].attackdesc}`;

    singleView.appendChild(name);
    singleView.appendChild(hp);
    singleView.appendChild(type);
    singleView.appendChild(image);
    singleView.appendChild(attack);
    singleView.appendChild(attackDesc);
  })
  .catch(error => console.log(error))
}

function editPokemon(){
  let id = document.getElementById('id').value;
  let pokemon = {
    name: document.getElementById('name').value,
    image: document.getElementById('image').value,
    attackname: document.getElementById('attackname').value,
    attackdesc: document.getElementById('attackdesc').value,
    health: document.getElementById('health').value,
    type: document.getElementById('type').value
  }
  
  fetch(`http://localhost:3000/pokemon/${id}`, {
    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pokemon)
  })
  .then(getPokemon)
  .catch(error => console.log(error))
}


function hidePopup(){
  singleView.setAttribute('style', 'display: none')
}