const express = require("express");
const path = require('path');
const app = express();
app.engine('html', require('ejs').renderFile);

port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
	//res.send("Hello");
	res.render("index.html");
});

app.get('/lesson1', function(req, res) {
	res.render("lesson1.html");
})

app.get('/lesson2', function(req, res) {
	res.render("lesson2.html");
})

app.get('/lesson3', function(req, res) {
	res.render("lesson3.html");
})

app.get('/lesson4', function(req, res) {
	res.render("lesson4.html");
})

app.listen(port, function() {
	console.log("Server is running on 'http://localhost:%d/'.", port);
});