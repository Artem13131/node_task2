const express = require('express');

const app = express();

app.get('/express', function(req, res){
	res.send("<h2>Привет Express!</h2>");
});

app.listen(3000, "localhost");
