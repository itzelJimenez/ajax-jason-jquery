var express = require('express');
var app = express();
/*
app.get('/', function (req, res) {
	res.send("Hola!");
});

app.get('/ivan', function (req, res) {
	res.send("Hola!");
});*/

app.use(express.static(__dirname + '/public/'));


app.listen(3000, function(){
	console.log("Servidor escuchando AHORA")
});