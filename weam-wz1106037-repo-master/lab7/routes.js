let express = require('express')
let router = express.Router();
let productController = require('./controllers/productController')

router.get('/api/products',(req,res)=>{productController.getProducts(req,res);})
router.post('/api/products',(req,res)=>{productController.addToShopCart(req,res)})
router.get('/api/products/:id',(req,res)=>{productController.getProduct(req,res)})




router.get('/cookies',(req,res)=>{
//    req.cookies.counter= req.cookies.counter++;
    console.log("the cookie data is:")
//    let name = req.cookies.name
    let num;
    if(!req.cookies.counter){
        res.cookie('counter',0,null);
        num = 0;
    } else {
        num = parseInt(req.cookies.counter);
    }
    num++;

    res.cookie('counter',num,null);

    res.status(200).send("I am cookies page & visits Number: "+num);
})

router.get('/cookies/:name',(req,res)=>{

    let name = req.params.name;
    res.cookie('counter',0,null)
    res.cookie('name',name,null)
    res.send("the name entered is:"+name);
})

router.get('/sessions',(req,res)=>{
    if(!req.session.counter){
        req.session.counter = 0;

    }

    let num = parseInt(req.session.counter);
    console.log("my num is:"+num);
    num++;
    req.session.counter = num;
    console.log(req.session);
    res.status(200).send("I am session page & visits Number: "+num);
})

router.get('/',(req,res)=>res.render('home'));
router.get('/shop',(req,res)=>productController.getProducts(req,res))
router.get('/localshop',(req,res)=>productController.getProducts(req,res))

module.exports=router;