const express = require('express');
const router = express.Router();

const db = require('../db');

router.post('/users', (req, res) => {
  const dataUser = {
    id: req.body.id,
    email: req.body.email,
    password: req.body.password
  }
  db.query('INSERT INTO users SET ?', dataUser, (err, results) => {
    if (err) {
      res.status(500).send(`Erreur lors de l'insertion des données de l'utilisateur`);
    } else {
      res.json(results);
    }
  });
});



module.exports = router;