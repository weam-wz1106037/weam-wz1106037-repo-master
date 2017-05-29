let express = require('express');
let path = require('path');
// let favicon = require('serve-favicon');
// let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let index = require('./routes');

let mongoose = require('mongoose');
let database = 'mongodb://localhost:27017/hifz_db'

//adding and overwriting the promise in mongoose:
mongoose.Promise = global.Promise;

mongoose.connect(database);

//Mongo DB Connection

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'views')));

app.use('/', index)


app.listen(3000, "localhost", () => {
    console.log("Running server on 3000");
});


module.exports = app;