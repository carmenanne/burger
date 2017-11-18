var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

//read function to display all burgers in burger database, along with a "Devour It" button, generated in partials handlebars file for each burger
router.get('/', function(req, res){
	burger.selectAll(function(data){
		var hbsObject = {
			burger: data
		};	
		// console.log(hbsObject)
		res.render('index', hbsObject)
	});

});

//when ajax request made, updates database by inserting the data sent by the event listener, at 'burger_name', also inserts id for burger, gives burger an id, provides other fields automatically since 'devoured' set to default false
router.post('/api/burgers', function(req, res){
	burger.insertOne([
			'burger_name'
		], [
			req.body.burger_name
		], function(result){
			res.json({ id: result.insertId });
		});
});

//still having issues with 'update' request
router.put('/api/burgers/:id', function(req, res){
	console.log("Put request test!!!!!!!!!!!!!!!")
	console.log(res)
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);


	burger.updateOne({
		devoured: req.body.devoured
	}, condition, function(result){
		if(result.changedRows == 0){
			return res.status(404).end();
		}
		else{
			res.status(200).end();
		}
	});
});

module.exports = router;