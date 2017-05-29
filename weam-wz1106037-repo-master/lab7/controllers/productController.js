let productRepo = require('../models/ProductRepository');

class ProductController {
    constructor() {
    }

    async getProducts(req, res) {
        try {
            let products = await productRepo.getProducts();

            if (!req.cookies.date) {
                res.cookie('date', new Date(), null);
            } else {
                req.cookies.date = new Date();
            }

            if(req.url=="/localshop"){
                res.render('shopLocal',{products,date: req.cookies.date});
                return;
            }

            if (!req.session.shoppingCart) {
                res.render('shop', {products, date: req.cookies.date});
            } else {
                res.render('shop', {
                    products,
                    date: req.cookies.date,
                    shoppingCart: req.session.shoppingCart,
                    subtotal: req.session.subtotal
                });
            }
        } catch (err) {
            res.status(500).send(err)
        }
    }

    async addToShopCart(req, res) {

        // console.log('routes.post(/shops)',req.body);
        let product = await productRepo.getProduct(req.body.productId);
        product.quantity = parseInt(req.body.quantity);
        // console.log("after finding the product it now has those values:");
        let itemIndex;
        if (req.session.shoppingCart) {
            console.log("shoppingCart Exists. Lets push.")
            itemIndex = req.session.shoppingCart.findIndex(i => i.id == product.id)
            if (itemIndex == -1) {
                product.totalPrice = (product.price * product.quantity);
                req.session.shoppingCart.push(product);
            } else {
                let tempQuant1 = req.session.shoppingCart[itemIndex].quantity;
                tempQuant1 = tempQuant1 + product.quantity;
                req.session.shoppingCart[itemIndex].quantity = tempQuant1;
                req.session.shoppingCart[itemIndex].totalPrice = (product.price * tempQuant1);
            }
        } else {
            product.totalPrice = (product.price * product.quantity);
            req.session.shoppingCart = [product];
        }
        req.session.subtotal = getSubTotal(req.session.shoppingCart);
        // console.log("the new item added is:")
        // console.log(req.session.shoppingCart[itemIndex]);
        console.log("The shoppingCart has (" + req.session.shoppingCart.length + ") items.");
        console.log("The shoppingCart subtotal is now: " + req.session.subtotal);

        let products = await productRepo.getProducts();
        res.render('shop', {products, shoppingCart: req.session.shoppingCart, subtotal: req.session.subtotal});
    }

    async getProduct(req,res){
        let product = await productRepo.getProduct(req.params.id);
        console.log("the product retrieved is:")
        console.log(product);
        res.json(product).status(200);
    }
}

function getSubTotal(productsList) {
    let subtotal = 0;
    for (let product of productsList) {
        subtotal = subtotal + (product.price * product.quantity);
    }
    return subtotal;
}

module.exports = new ProductController();