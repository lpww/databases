var models = require('../models');
var bluebird = require('bluebird');
var httpRequest = require ('http-request');
var serverUtils = require('./serverUtils');
module.exports = {
  messages: {
    get: function (req, res) {
        console.log("GET request in Controller in messages ");
    }, // this hadnles the get request from the client a function which handles a get request for all messages
    post: function (req, res) {
      console.log("Controler Post req then data");

      console.log(req.body);
      models.messages.post(req.body);


      // var data = '';
      // req.setEncoding('utf8');
      // req.on('data', function (chunkod){
      //   console.log("collect ON data !!!");
      //   data += chunk;
      // });
      // req.on('end', function (err, data){
      // if (err) {
      //   throw err;
      // }
      // console.log("COLLECT before Data");
      // console.log(data);
    }





           // this handles the get request from the client a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {

    }
  }
};

