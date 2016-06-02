var express = require('express');
var cors = require('cors');
var app = express();

var port = 8000;

app.use(cors());

app.post('/api-token-auth/', function (req, res, next) {
  res.json({token: "fancydummytoken"});
});

app.listen(port, function () {
  console.log('Server listening on port ' + port);
});