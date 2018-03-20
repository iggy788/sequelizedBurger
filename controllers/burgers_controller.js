var express = require("express");
var router = express.Router();
var db = require("../models/");

// router.get("/", (req, res) => {
// 	db.Burger.findAll({
// 		order: ["burger_name"]
// 	}).then(data => res.render("index", { burgers: data }));
// });
router.get("/", function (req, res) {
	res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
	// express callback response by calling db.selectAllBurger
	db.Burger.findAll({}).then(function (data) {
		// Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
		var hbsObject = {
			burgers: data
		};
		res.render("index", hbsObject);
	});
});

router.post("/burgers/create", function (req, res) {
	// takes the request object using it as input for burger.addBurger
	db.Burger.create({
		"burger_name": req.body.burger_name
	}).then(function (result) {
		console.log(result);
		res.redirect("/");
		// wrapper for orm.js that using MySQL insert callback will return a log to console,
		// render back to index with handle
	});
});
// router.post("/api/burgers", (req, res) => {
// 	db.Burger.create({
// 		burger_name: req.body.burger_name
// 	}).then(result => {
// 		res.json({
// 			id: result.insertId
// 		});
// 	});
// });

router.put("/burgers/update/:id", function(req, res) {
	db.Burger.update(
		{
			devoured: true
		},
		{
			where: {
				id: req.params.id
			}
		}
	).then(function(result) {
		// wrapper for orm.js that using MySQL update callback will return a log to console,
		// render back to index with handle
		console.log(result);
		// Send back response and let page reload from .done in Ajax
		res.json("/");
	});
});
// router.put("/api/burgers/:id", (req, res) => {
// 	db.Burger.update({
// 		devoured: req.body.devoured
// 	}, {
// 		where: {
// 			id: req.params.id
// 		}
// 	}).then(result => {
// 		res.json(result);
// 	});
// });

router.delete("/api/burgers/:id", (req, res) => {
	db.Burger.destroy({
		where: {
			id: req.params.id
		}
	}).then(result => {
		res.json(result);
	});
});

module.exports = router;