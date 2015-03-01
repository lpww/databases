var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryStr = 'select messages.id, messages.text, messages.roomname, users.username from messages left outer join users on (messages.userid = users.id) order by messages.id desc';
      db.dbConnection.query(queryStr, function(err, results){
        callback(err, results);
      });
    },
    post: function (params, callback) {
      var queryStr = 'insert into messages (text, roomname, userid) value (?, ?, (select id from users where username = ? limit 1))';
      db.dbConnection.query(queryStr, params, function(err, results){
        callback(err, results);
      });
    }
  },

  users: {
    get: function (callback) {
      var queryStr = 'select * from users';
      db.dbConnection.query(queryStr, function(err, results){
        callback(err, results);
      });
    },
    post: function (params, callback) {
      var queryStr = 'insert into users (username) values (?)';
      db.dbConnection.query(queryStr, params, function(err, results){
        callback(err, results);
      });
    }
  }
};

