const fetchConection = (link) => {
  return fetch(link)
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log("rejected", err));
};

const fetchConnection = (link, method) => {
  return fetch(link,method)
  .then((response) => {
    return response.json();
  })
  .catch((err) => console.log("rejected", err));
};

const getProducts = () => {
  return fetchConection('https://fakestoreapi.com/products', 'GET')    
  .then((response) => {
    console.log(response);
    const products = response.map(product => ({
      id: product.id,
      title: product.title,
      price: product.price,
      category: product.category,
      description: product.description,
      image: product.image,
    }));
    return products;
  })
  .catch((err) => {
    console.log("promise rejected", err);
  });
};

const renderProductGrid = (products) => {
  const productGrid = document.getElementById('productGrid');
  products.forEach((product) => {
      if(product.category === 'jewelery') {
    
      const productElement = document.createElement('div');
      productElement.classList.add('products-grid__card','col-lg-4','col-md-6','f-col','f-justify-end','f-align-start');
      productElement.innerHTML =`
      <a href="/loja/product-page.html" class="products-grid__card-wrapper f-col">
        <div class="products-grid__card-img-wrapper">
          <img src="${product.image}" alt="${product.description}" class="products-grid__img">
          <img src="${product.image}" alt="${product.description}" class="products-grid__img products-grid__img--hover">
        </div>
        <div class="products-grid__content">
          <h4 class="products-grid__card-title text-s text-dark text-w500">${product.title}</h5>
          <p class="products-grid__card-title text-xs text-dark--light text-w400">${product.price}€</p>
          </div>
          </a>`;
      const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.classList.add('addToCartButton');
    addToCartButton.addEventListener('click', () => addToCart(product));

    productElement.appendChild(addToCartButton);
      productGrid.appendChild(productElement);
    }
  });
};

const addToCart = (product) => {
  const cartData = {
    userId: 7,
    date: new Date().toISOString().split('T')[0],
    products: [{
      productId: product.id,
      productName: product.title,
      quantity: 1,
    }],
  };
  
  fetchConnection('https://fakestoreapi.com/carts/7', 'PUT')
  .then((response) => {
    return console.log('Product added to cart:', cartData);
  })
  .catch((err) => {
    console.log("Failed to add product to cart:", err);
  });
};



getProducts().then((products) => {
  console.log(products);
  renderProductGrid(products);
});
