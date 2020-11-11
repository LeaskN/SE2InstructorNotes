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

const addPokemon = (request, response) => {
  const { name, image, attackname, attackdesc, health, type } = request.body;

  pool.query('INSERT INTO pokemon (name, image, attackname, attackdesc, health, type) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [name, image, attackname, attackdesc, health, type], (error, results) => {
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
  addPokemon
}