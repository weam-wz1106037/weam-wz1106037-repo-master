let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let session = require('express-session')

let router = require('./routes');

let hostname = 'localhost';
let port = 3000;

let app = express();
app.use(express.static(path.join(__dirname, 'views')));

app.use( session( {
    secret: 'mysecret',
    saveUninitialized: false,
    resave: true


}) )
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Setting router
app.use('/', router);
app.use('/*',function(req,res,next){
    res.sendFile(__dirname+"/views/index.html")
})


app.listen(port, hostname, () => {
    console.log("Running server on 3000");
});


