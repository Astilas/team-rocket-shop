const express = require('express');

const pokemons = require('./pokemons');
const db = require('../db');

const formattedPokemons = pokemons
  .map(
    ({ id, name, sprites }) => ({ id, name, image: sprites.front_shiny })
  )
  .map(pokemon => Object.values(pokemon));

db.query('INSERT INTO products(id, pokemon_name, image) VALUES ?', [formattedPokemons]);



