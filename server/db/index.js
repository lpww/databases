var mysql = require('mysql');

exports.dbConnection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});

exports.dbConnection.connect();
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


