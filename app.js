var express = require('express');
var app = express();

app.use(express.static('projekt'));

app.get('/', function (req, res) {
  res.send(index.html);
});

app.listen(8000, function () {
  console.log('App läuft auf http://localhost:8000');
});