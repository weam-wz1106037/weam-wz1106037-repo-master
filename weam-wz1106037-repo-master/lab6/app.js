const express	   =  require('express')
const bodyParser   =  require('body-parser')
const handlebars  =  require('express-handlebars')
const router =require('./router')


let hostname='localhost'
let port=3030;

const app		   =   express()

app.use( express.static(__dirname) )


app.use( bodyParser.urlencoded({extended: true}) )
app.use( bodyParser.json() )
app.use('/',router);
app.engine('hbs', handlebars({defaultLayout:'layout', extname: '.hbs'})) //checked
app.set ('view engine', 'hbs')
app.set ('views', __dirname+'/views')



app.listen(port, () => {
    const host = "localhost"
    console.log(`Students App is running @ http://${host}:${port}`)
})