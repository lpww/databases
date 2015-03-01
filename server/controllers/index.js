var models = require('../models');
var bluebird = require('bluebird');
var httpRequest = require ('http-request');
var serverUtils = require('./serverUtils');
module.exports = {
  messages: {
    get: function (req, res) {
        console.log("GET request in Controller in messages ");
        models.messages.get(function(err, results){
          if (err) console.log(err);
          console.log(results);
          res.end();
        });
    },
    post: function (req, res) {
      console.log("Controler Post req then data");
      params = [ req.body.text, req.body.roomname, req.body.username ];
      models.messages.post(params, function(err, results){
        if (err) console.log(err);
        res.end();
      });
    }
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err, results){
        if (err) console.log(err);
        console.log(results);
        res.end();
      });
    },
    post: function (req, res) {
      params = [ req.body.username ];
      models.users.post(params, function(err, results){
        if (err) console.log(err);
        res.end();
      });
    }
  }
};

