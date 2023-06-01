const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello Fran, World!\n');
});

//TODO cambio para git mas

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

module.exports = app;