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

app.get('/frontends/:view', function(req, res){
    console.log(req.params.view);
    res.render(req.params.view+'.pug');
});

app.get('/backends/timestamp/:date', function (req, res) {
    var date;
    var retobj;
    var monthNames = [ "January", "February", "March","April", "May", "June", "July"
                        ,"August", "September", "October","November", "December"
    ];
    console.log(req.params.date);
    try{
        if(/[^\d]/.test(req.params.date)) date = new Date(req.params.date);
        else date = new Date(parseInt(req.params.date)*1000);
        console.log(date);
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        console.log(monthNames[monthIndex], day, year);
        retobj = {
            "unix":date.getTime()/1000
            ,"natural":monthNames[monthIndex]+' '+day+', '+year
        };
    }catch(err){
        console.log(err);
        retobj = {
            "unix": null
            ,"natural":null
        };
    }
    console.log(retobj);
    res.json(retobj);
});

app.get('/backends/rhpms', function (req, res) {
  var osreg = /[^\(]*\(([^\)]*)\)?/;
  var langreg = /([^,]*)/;
  console.log(req.headers);
  var retobj = {
    "ipaddress":req.headers['x-forwarded-for'] || req.connection.remoteAddress
    ,"language":langreg.exec(req.headers["accept-language"])[1]
    ,"software":osreg.exec(req.headers["user-agent"])[1]
  };
  res.json(retobj);
});

app.listen(lp, function(){
    console.log('Example app listening on port '+lp+'!');
});