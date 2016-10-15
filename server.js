var express = require('express');
var path = require('path');
var app = express();
var lp = process.env.PORT || 8080;
/*
app.set('views',path.join(__dirname,'/views'));
app.set('view engine','pug');
*/
app.use(express.static('.'||path.join(__dirname,'.')));
app.get('/', function (req, res) {
  res.send('/index.html');
});

app.listen(lp, function () {
    console.log('Example app listening on port '+lp+'!');
});