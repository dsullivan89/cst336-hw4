const express = require("express");
const path = require('path');
const app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

var faker = require('faker');

port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
	var randomName = faker.name.findName(); // Rowan Nikolaus
    var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    // var randomCard = faker.helpers.createCard(); // random contact card containing many properties
	res.render("index", { name: randomName });
});

app.get('/lesson1', function(req, res) {
	res.render("lesson1.ejs");
})

app.get('/lesson2', function(req, res) {
	res.render("lesson2");
})

app.get('/lesson3', function(req, res) {
	res.render("lesson3");
})

app.get('/lesson4', function(req, res) {
	res.render("lesson4");
})

app.listen(port, function() {
	console.log("Server is running on 'http://localhost:%d/'.", port);
});