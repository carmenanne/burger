// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
	selectAll: function(tableInput, cb){
		var queryString = 'SELECT * FROM ' + tableInput;
		connection.query(queryString, function(err, result){
			if(err) throw err;
			cb(result);
		});
	},
	insertOne: function(table, cols, vals, cb){
		var queryString = 'INSERT INTO ' + table;
		queryString += " (" + cols + " )";
		queryString += "VALUES (" + vals + ")"

		console.log(queryString)

		connection.query(queryString, vals, function(err, result){
			if (err) throw err;
			cb(result)
		});
	},
	updateOne: function(table, objColVals, condition, cb){
		var queryString = 'UPDATE ' + table;
		queryString += " SET ";
		queryString += objColVals;
		queryString += " WHERE "
		queryString += condition;

		console.log(queryString);
		connection.query(queryString, function(err, result){
			if(err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;