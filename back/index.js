const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
require('./env');

const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');
const db = require('./db');

const app = express();

// Init body parser middleware
// app.use(express.json({ extended: false }))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    badRequestMessage: 'Missing field',
    session: false,
  },
  (username, password, done) => {
    db.query('SELECT * FROM users WHERE email = ?', username, (err, users) => {
      console.log('got users', users);
      if (err) { return done(err); }
      if (users.length === 0) { return done(null, false); }
      const user = users[0];
      // if (!user.verifyPassword(password)) { return done(null, false); }
      bcrypt.compare(password, user.password)
        .then((match) => {
          if (!match) { return done(null, false); }
          const {
            id,
            email,
            firstname,
            lastname,
          } = user;
          return done(null, {
            id,
            email,
            firstname,
            lastname,
          });
        });
    });
  },
));


const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY,
};
passport.use(new JwtStrategy(opts, ((jwtPayload, done) => {
  done(null, jwtPayload);
})));

const port = process.env.PORT || 5000;

// Routes

app.use('/api', require('./routes/getPokemonList'));
app.use('/api', require('./routes/postUserInfos'));

app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter);


app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Serveur running, port:', port);
  }
});
