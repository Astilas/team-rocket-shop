const express = require('express');

const router = express.Router();
const db = require('../db');


router.post('/commands', (req, res) => {
  const formData = {
    userId: req.body.userId,
    productId: req.body.productId,
  };

  db.query('INSERT INTO commands SET', formData, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de l\'importation des données');
    } else {
      res.json(results);
    }
  });
});


// router.post('/products-commands', (req, res) => {
//   const formData = {
//     quantity: 1,
//     productId: req.body.productId,
//     commandId: req.body.commandId,
//   }
//   db.query('INSERT INTO products_commands SET ?', formData, (err, results) => {
//     if (err) {
//       res.status(500).send('Erreur lors de l\'importation des données');
//     } else {
//       res.json(results);
//     }
//   });
// });

module.exports = router;
