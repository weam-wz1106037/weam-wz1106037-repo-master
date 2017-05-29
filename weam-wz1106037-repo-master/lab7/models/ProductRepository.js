let fs = require('fs-promise');

class ProductRepository {
    constructor() {
    }

    async getProducts() {

        let productsData = await fs.readFile('data/products.json', {encoding: 'utf8'});
        //    let productsData = await fs.readFile('../data/products.json', {encoding: 'utf8'});
        let products = JSON.parse(productsData);
        return products;
    }

    async getProduct(id) {
        let productsData = await fs.readFile('data/products.json', {encoding: 'utf8'});
        let products = JSON.parse(productsData);
        let product = products.find(p => p.id == id);

        return product;
    }


}

// let pr = new ProductRepository();
// pr.getProducts().then(p=>console.log(p));

module.exports = new ProductRepository();





