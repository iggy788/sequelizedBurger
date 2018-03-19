var express = require("express");
var router = express.Router();
var db = require("../models/");

router.get("/", (req, res) => {
	db.Burger.findAll({
		order: ["burger_name"]
	}).then(data => res.render("index", { burgers: data }));
});

router.post("/api/burgers", (req, res) => {
	db.Burger.create({
		burger_name: req.body.burger_name
	}).then(result => {
		res.json({ id: result.insertId });
	});
});

router.put("/api/burgers/:id", (req, res) => {
	db.Burger.update(
		{
			devoured: req.body.devoured
		},
		{
			where: { id: req.params.id }
		}
	).then(result => {
		res.json(result);
	});
});

router.delete("/api/burgers/:id", (req, res) => {
	db.Burger.destroy({
		where: { id: req.params.id }
	}).then(result => {
		res.json(result);
	});
});

module.exports = router;
