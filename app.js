var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var karma = require('./routes/karma');
var config = require('./config');
var mongodb = config.mongodb;
var app = express();

var connectionString = 'mongodb://' + mongodb.username + ':' + mongodb.password + '@' + mongodb.host + ':' + mongodb.port + '/' + mongodb.db;

mongoose.connect(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', karma);

module.exports = app;
