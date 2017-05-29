let productRepo = require('../models/ProductRepository');

class ProductController {
    constructor() {
    }

    async checkLogin(req, res) {
        if (!req.session.email && !req.session.password) {
            res.json({status: "FAIL"});
        } else {
            res.json({status: "SUCCESS"});
        }
    }

    async login(req, res) {
        req.session.email = req.body.email;
        req.session.password = req.body.password;
        res.send("Logged Successfuly").status(200);
    }

    async logout(req, res) {
        req.session.destroy(() => {
            res.json({status: "out"})
        })
    }

    async getShopCart(req, res) {
        try {
            if (!req.session.shopcart) {
                req.session.shopcart = [];
            }
            res.json(req.session.shopcart);
        } catch (err) {
            res.status(500).send(err)
        }
    }

    async getProducts(req, res) {
        try {
            let products = await productRepo.getProducts();
            res.json(products);
        } catch (err) {
            res.status(500).send(err)
        }
    }

    async addToShopCart(req, res) {
        let product = await productRepo.getProduct(req.body.productId);
        product.quantity = parseInt(req.body.quantity);
        let itemIndex;
        if (req.session.shopcart) {
            itemIndex = req.session.shopcart.findIndex(i => i.id == product.id)
            if (itemIndex == -1) {
                product.totalPrice = (product.price * product.quantity);
                req.session.shopcart.push(product);
            } else {
                let tempQuant1 = req.session.shopcart[itemIndex].quantity;
                tempQuant1 = tempQuant1 + product.quantity;
                req.session.shopcart[itemIndex].quantity = tempQuant1;
                req.session.shopcart[itemIndex].totalPrice = (product.price * tempQuant1);
            }
        } else {
            product.totalPrice = (product.price * product.quantity);
            req.session.shopcart = [product];
        }
        req.session.subtotal = getSubTotal(req.session.shopcart);
        res.json(req.session.shopcart);
    }

    async getProduct(req, res) {
        let product = await productRepo.getProduct(req.params.id);
        res.json(product).status(200);
    }
}

function getSubTotal(products) {
    let subtotal = 0;
    for (let product of products) {
        subtotal = subtotal + (product.price * product.quantity);
    }
    return subtotal;
}

module.exports = new ProductController();