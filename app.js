var express = require('express');
var path = require('path');

const envConfig=require('./config/env-config')
const initDb=require('./config/db-config')

const enviroment = process.env.NODE_ENV || 'development'


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
initDb(envConfig[enviroment].connectionString)
app.listen(envConfig[enviroment].port)
