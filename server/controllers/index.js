var models = require('../models');
var bluebird = require('bluebird');
var httpRequest = require ('http-request');

module.exports = {
  messages: {
    get: function (req, res) {}, // this hadnles the get request from the client a function which handles a get request for all messages
    post: function (req, res) {} // this handles the get request from the client a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

