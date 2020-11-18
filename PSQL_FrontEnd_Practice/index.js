const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./queries');
const port = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Epxress, and Postgres API'})
});

app.get('/pokemon', db.getPokemon);
app.get('/pokemon/:id', db.getPokemonById);
app.post('/pokemon', db.addPokemon);
app.delete('/pokemon/:id', db.deletePokemonById);
app.put('/pokemon/:id', db.updatePokemonById);



app.listen(port, () => {
  console.log(`App running on port ${port} 👓`)
});