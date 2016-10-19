var express = require('express');
var path = require('path');
var stylus = require('stylus');
var app = express();
var lp = process.env.PORT || 8080;
var dirlis = require('./dirlis.js');
app.set('views',path.join(__dirname,'qrfdev/frontends'));
app.set('view engine','pug');
app.use(stylus.middleware('qrfdev/frontends/styles'||path.join(__dirname,'qrfdev/frontends/styles')));
app.use(express.static('qrfdev'||path.join(__dirname,'qrfdev')));

app.get('/', function(req, res){
  res.send('/qrfdev/index.html');
});

app.get('/frontends', function(req, res){
  dirlis('qrfdev/frontends','pug',function(err,files){
    if(err) console.log(err);
    else{
        res.render('index', {files:files});
    }
  });
});

app.get('/:view', function(req, res){
    res.render(req.params.view);
});

app.listen(lp, function(){
    console.log('Example app listening on port '+lp+'!');
});