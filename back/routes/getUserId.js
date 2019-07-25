const express = require('express');

const router = express.Router();
const db = require('../db');


router.get('/users', (req, res) => {
  db.query('SELECT id, firstname, lastname FROM users', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des données users');
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
