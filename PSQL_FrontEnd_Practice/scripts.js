function addPokemon(e){
  let pokemon = {
    name: 'MewTwo',
    type: 'Psychic'
  }
  fetch('http://localhost:3000/pokemon', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(pokemon)
  })
  .then(res => console.log(res))
  .then(res => res.json())
  .catch(error => console.log(error))
}

addPokemon()