class Ecommerce {
    constructor() {
        this.products = [];
        this.cart = [];
    }
    addProduct(name, price, id) {
        return this.products.push( 
        {name: name,
        price: price,
        id: id });
    }
    setProdutctPrice(id, price) { 
         return this.products.forEach(product => {
            if(product.id === id) {
                product.price = price;
            }
        });
    }
    getAllProducts() {
        return this.products;
    }
    getAllProductsNames() {
        let productsNames = [];
        this.products.map((product) => {
            productsNames.push(product.name);
        });
        const productsNamesString = productsNames.join(', ');
        return productsNamesString
    }
    getProductsById(id) {
        const filterId = this.products.filter(product => product.id === id);
        return filterId;
    }
    getProductsByName (name) {
        const filterName = this.products.filter(product => product.name === name);
        return filterName;
    }
    getProductsByPrice (initialPrice, finalPrice) {
        const filterByPrice = this.products.filter(product => product.price >= initialPrice && product.price <= finalPrice);
        return filterByPrice;
    }

    addProductToCart(id, quantity) { 
        const product = this.products.find(product => product.id === id);

        if (product) { 
            const isInCart = this.cart.find(product => product.id === id);
            if (isInCart) { 
                isInCart.quantity += quantity;
            } else {
                this.cart.push({...product, quantity });
            }
            return this.cart;
        } else {
            console.log('Produto não encontrado.');
            return null;
        }

    }
    getCartTotalPrice() {
        let total = 0;
        this.cart.map(product => {
            total = total + product.price * product.quantity;
        })
        return total
    }

}

let teste = new Ecommerce('Produtos');



