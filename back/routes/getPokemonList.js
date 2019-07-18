const express = require('express');

const router = express.Router();
const db = require('../db');

router.get('/pokemons', (req, res) => {
  db.query('SELECT * from products', (err, results) => {
    if (err) {
      res.status(500).send(`Erreur lors de la 
      récupération des pokemon`);
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
