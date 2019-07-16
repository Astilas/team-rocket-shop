const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Init body parser middleware
// app.use(express.json({ extended: false }))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Serveur running, port:', port);
  }
});

