# PSQL Practice
### Creating my own DB and utilizing DB to populate a web page

## TASKS:
* Create DB (pokemon)
* Create Table (pokemon)
* Add a few items (pokemon)
* Write a selector to retrieve info
* Write JavaScript utilizing the selector to log the info
* Write JavaScript to display info on web page
* Stretch Goal: CRUD?

## NOTES:
CREATE TABLE pokemon(
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  image VARCHAR,
  health NUMERIC,
  type VARCHAR(10),
  attackName VARCHAR(30),
  attackDesc VARCHAR(250)
);

Add data:
INSERT INTO 
  pokemon(name, image, health, type, attackName, attackDesc) 
VALUES 
  ('Mew', 'https://static.wikia.nocookie.net/pokemon/images/b/b1/151Mew.png/revision/latest?cb=20200627085108', 50, 'Special', 'Psywave', 'Does 10 damage times number of energy cards attached to defending Pokemon.'),
  ('Growlithe', 'https://cdn.bulbagarden.net/upload/thumb/3/3d/058Growlithe.png/1200px-058Growlithe.png', 70, 'fire', 'Ember', 'Lightly burn enemy Pokemon for 30 damage.'),
  ('Eevee', 'https://cdn.bulbagarden.net/upload/thumb/e/e2/133Eevee.png/250px-133Eevee.png', 60, 'Special', 'Tackle', 'Tackle the defending Pokemon for 20 damage.');

## Repeat instructions:
* Download PSQL
* Log into PSQL ( via CLI: `psql -U (username)` ) our usernames are 'postgres'
* CREATE DATABASE (dbname); (pokemon)
* connect to db
* CREATE TABLE (tableName); (pokemon)
* Insert a few items into the table
* Install the Express Framework
* Create a JS file which requests the information