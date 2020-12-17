var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var router = express.Router();
var fs = require('fs');
var cors = require('cors');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.get('/api/items', (req, res, next) => {
    try{
      fs.readFile('./data/db.json', (err, json) => {
          var obj = JSON.parse(json);
          var delay = randomDelay();
          console.log(delay);
          setTimeout(function(){
            res.json(obj);
          }, 0);
      });
    }
    catch(err){
      next(err);
    }
});

function randomDelay() {
  return Math.floor(Math.random() * 500) + 500;
}

module.exports = app;
