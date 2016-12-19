var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var heroes = require('./routes/heroes');

var port = 3000;

var app = express();

// View engine
app.set('views', path.join(__dirname), 'views');
app.set('view engine', 'pug');

// Set static folder
app.use(express.static(path.join(__dirname)));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/', heroes);

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});