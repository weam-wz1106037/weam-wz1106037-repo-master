let bodyparser = require('body-parser')
let express = require('express');
let routes = require('./routes');
let session = require('express-session')
let handlebars = require('express-handlebars');
let cookieparser = require('cookie-parser');

let port = 4000;
let hostname = 'localhost';

let app = express();
app.use(express.static(__dirname))

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use( session( {
    secret: 'mysecret',
    saveUninitialized: false,
    resave: true


}) )
app.use(cookieparser())

app.engine('hbs',handlebars({defaultLayout:'layout',extname:'.hbs'}))
app.set('view engine','hbs')
app.set('views' , __dirname+'/views')

app.use('/',routes)
app.listen(port,hostname,()=>{
    console.log('Server started at '+hostname+' : port:'+port);
})




