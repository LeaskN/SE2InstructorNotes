const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pokemon',
  password: 'postgres',
  port: 5432,
})

const getPokemon = (request, response) => {
  pool.query('SELECT * FROM pokemon', (error, results) => {
    if(error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}

const getPokemonById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM pokemon WHERE id = $1', [id], (error, results) =>{
    if(error){
      throw error;
    }
    response.status(200).json(results.rows);
  });
}

const createPokemon = (request, response) => {
  const { name, type } = request.body;

  pool.query('INSERT INTO pokemon (name, type) VALUES ($1, $2) RETURNING *', [name, type], (error, results) => {
    if(error){
      throw error;
    }
    // response.status(200).json(results.rows);
    response.status(200).send(`Pokemon added with name: ${name}, type: ${type}`);
  });
}

module.exports = {
  getPokemon,
  getPokemonById,
  createPokemon
}