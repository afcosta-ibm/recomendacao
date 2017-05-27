var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app.js');
routes(app);

app.listen(port);

console.log('Denounces Classifier API server started on: ' + port);

// 0 - 45 -> verde
// 46 - 80 -> amarelo
// 81 - 125 -> vermelho