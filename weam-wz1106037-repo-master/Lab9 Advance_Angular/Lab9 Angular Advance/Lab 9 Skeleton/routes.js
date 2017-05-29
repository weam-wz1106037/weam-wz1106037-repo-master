let express = require('express')
let router = express.Router();
let productController = require('./controllers/productController')

router.post('/login',(req,res)=>productController.login(req,res));
router.get('/login',(req,res)=>productController.checkLogin(req,res));
router.get('/logout',(req,res)=>productController.logout(req,res));
router.get('/api/products',(req,res)=>{productController.getProducts(req,res)});
router.post('/api/products',(req,res)=>{productController.addToShopCart(req,res)});
router.get('/api/shopcart',(req,res)=>{productController.getShopCart(req,res)});
router.get('/api/products/:id',(req,res)=>{productController.getProduct(req,res)});




module.exports=router;