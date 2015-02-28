var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, //this is the query to the database a function which produces all the messages
    post: function () {} //this is post into the database a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

