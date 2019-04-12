var express = require('express');
var exphbs= require('express-handlebars');

var app = express();
app.use(express.static('public'));