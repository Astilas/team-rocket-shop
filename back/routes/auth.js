const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const db = require('../db');

const saltRounds = 10;
const router = express.Router();

router.post('/signup', (req, res) => {
  const {
    email, password, firstname, lastname,
  } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      error: 'required field(s) missing',
    });
  }
  bcrypt.hash(password, saltRounds).then(hash => (
    db.query('INSERT INTO users SET ?',
      [{
        email,
        password: hash,
        firstname,
        lastname,
      }],
      (err2, status) => {
        if (err2) {
          return res.status(500).json({
            error: err2.message, sql: err2.sql,
          });
        }
        return res.status(201).json({
          status: 'user created',
        });
      })
  ));
});

router.post('/signin',
  passport.authenticate('local', { session: false }),
  (req, res) => jwt.sign(req.user, process.env.SECRET_KEY, (err, token) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }
    res.json({
      token,
    });
  }));

module.exports = router;
