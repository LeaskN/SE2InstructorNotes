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

  pool.query(`INSERT INTO pokemon (name, image, attackname, attackdesc, health, type) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
   [name, image, attackname, attackdesc, health, type], (error, results) => {
    if(error){
      throw error;
    }
    response.status(200).json(results.rows);
    // response.status(200).send(`Pokemon added with name: ${name}, type: ${type}`);
  });
}

const updatePokemonById = (request, response) => {
  const { name, image, attackname, attackdesc, health, type } = request.body;
  const id = parseInt(request.params.id);

  pool.query(`
  UPDATE pokemon SET name = $1, image = $2, attackname = $3, attackdesc = $4, health = $5, type = $6 
  WHERE id = $7
  Returning *`, 
  [name, image, attackname, attackdesc, health, type, id], 
  (error, results) => {
    if(error){
      throw error;
    }
    response.status(200).send(`People with id: ${id} updated.`);
  });
}

const deletePokemonById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM pokemon WHERE id = $1', [id], (error, results) => {
    if(error){
      throw error;
    }
    response.status(200).json(results.rows);
    console.log(`Pokemon with id:${id} was deleted.`);
  });
}

module.exports = {
  getPokemon,
  getPokemonById,
  addPokemon,
  deletePokemonById,
  updatePokemonById
}