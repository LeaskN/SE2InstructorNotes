const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// CRUD Add, GET, Edit, Delete

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Epxress, and Postgres API'})
});

app.get('/pokemon', db.getPokemon);
app.get('/pokemon/:id', db.getPokemonById);
app.get('/pokemon', db.createPokemon);

app.listen(port, () => {
  console.log(`App running on port ${port} 🎈`)
});