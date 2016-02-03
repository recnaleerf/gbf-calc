'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var path    = require('path');

var app = express();

// Configure server
app.set('port', (process.env.PORT || 5000));
app.set('appRoot', path.normalize(__dirname + '/../client'));
app.use(express.static(path.join(app.get('appRoot'), 'dist')));

// Set up routes
require('./routes')(app);

// Start server
app.listen(app.get('port'), function () {
    console.log('Running on port', app.get('port'));
});
