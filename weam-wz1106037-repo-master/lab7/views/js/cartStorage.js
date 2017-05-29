let shopcart_template = `
{{#if shoppingCart}}
    <h3>Shopping Cart:</h3>
    <div class="table-responsive">
        <table id="productsTable" class="table" name="products">
            <thead>
            <tr>
                <th>Item Name</th>
                <th>Item Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Item Image</th>
            </tr>
            </thead>
            <tbody>
            {{#each shoppingCart}}
                <tr>
                    <td>{{this.name}}</td>
                    <td>{{this.price}}</td>
                    <td>{{this.quantity}}</td>
                    <td>{{this.totalPrice}}</td>
                    <td><img style="width: 100px;height: 100px" src='../imgs/{{this.image}}'></td>
                </tr>
            {{/each}}
            <tr>
                <th>Sub Total Price: {{subtotal}}</th>
            </tr>
            <tr>
                <td></td>
            </tr>
            </tbody>
        </table>

    </div>
{{/if}}

`

document.addEventListener("DOMContentLoaded", () => {
    console.log("js-DOM fully loaded and parsed");
    displayShopCart();
})

async function clearCart(){
    localStorage.clear();
    displayShopCart()
}

async function addToCart() {
    let productId = document.querySelector('#products').value;
    console.log("the productId is:" + productId);
    let productData = await fetch(`/api/products/${productId}`);
    let product = await productData.json();
    console.log("the product after jsoning:")
    console.log(product);

    product.quantity = document.querySelector('#quantity').value;
    //product.totalPrice = product.quantity * product.price;

    let itemString = localStorage.getItem(product.id);
    let item;
    if (itemString != null) {
        item = JSON.parse(itemString);
        // console.log("the item i got is:")
        // console.log(item);
    }

    if (itemString != null) {
        // it means there was an item stored in localstorage with such product.id
        //    console.log("item = "+item.quantity);

        let tempQuant = parseFloat(item.quantity);
        tempQuant += parseFloat(product.quantity);
        //   console.log("quantity after math:"+tempQuant);
        product.quantity = tempQuant;
        product.totalPrice = tempQuant * parseFloat(product.price);
        //    console.log("and the total price is:"+product.totalPrice)
        localStorage.setItem(product.id, JSON.stringify(product))
    } else {
        console.log("first time I get this item.")
        // it means there was no item stored with such product.id
        product.totalPrice = parseFloat(product.quantity * product.price);
        //    console.log("totalprice ="+product.totalPrice);
        localStorage.setItem(product.id, JSON.stringify(product));
    }

    displayShopCart();
}

async function displayShopCart() {
    //retrieved it from the shopLocal.hbs <select ..> tag with all its <options>
    let productsSelectionIds = document.querySelector('#products');
    // console.log(productsSelectionIds);
    // console.log("the id = ");
    // console.log(productsSelectionIds[1]);
    let subtotal = 0;
    let shoppingCart = []; // empty array that will be filled below.
    for (let productId of productsSelectionIds) {
        // console.log("productId = ");
        // console.log(productId.value);
        let itemString = localStorage.getItem(productId.value);
        // console.log(itemString);
        let item;
        if (itemString != null) {
            item = JSON.parse(itemString);
            subtotal += parseFloat(item.totalPrice);
            console.log(item);
            shoppingCart.push(item);
        }
    }

    console.log("my shoppingcart contains:")
    for (let cart of shoppingCart) {
        console.log(cart);
    }

    let compiledTemplate = Handlebars.compile(shopcart_template);
    let generatedHTML = compiledTemplate({shoppingCart, subtotal})

    //dom trav
    document.getElementById('shopcart_area').innerHTML = generatedHTML;
}

