var db = require('../db');


exports.insert = function(table, column, value, callback){
  //add data to db
  // sql command (insert into tablename (first_col, next_col...) values ('??')
  db.dbConnection.query('INSERT INTO ' + table + ' (' + column + ') VALUES (' + value +');', function(err, result){
    if (err) throw err;
    callback(result);
  });
};

exports.lookup = function(table, column, where, callback){
  //lookup data from db
  db.dbConnection.query('SELECT ' + column + ' FROM ' + table + ' WHERE ' + where +';', function(err, rows, fields){
    if (err) throw err;
    callback(rows, fields);
  });
};
