var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
//var name with caps means the value of the var should not be changed 

var middleware = require('./middleware.js');



app.use(middleware.logger);
//app.use(middleware.requireAuthentication);

app.get('/about',middleware.requireAuthentication, function (req, res) {
    res.send('About us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log('Express server started on ' + PORT + '!');
});