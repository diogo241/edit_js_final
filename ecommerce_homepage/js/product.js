const fetchConection = (link) => {
  return fetch(link)
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log('rejected', err));
};

const fetchConnection = (link, method) => {
  return fetch(link, method)
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log('rejected', err));
};

const getProduct = (productId) => {
  return fetchConection(`https://fakestoreapi.com/products/${productId}`, 'GET')
    .then((response) => {
      let product = {
        id: response.id,
        title: response.title,
        price: response.price,
        rating: response.rating.rate,
        category: response.category,
        description: response.description,
        image: response.image,
      };
      return product;
    })
    .catch((err) => {
      console.log('promise rejected', err);
    });
};

const renderProductGrid = (product) => {
  const productGrid = document.getElementById('productGrid');

  const productElement = document.createElement('div');
  productElement.classList.add(
    'product__wrapper',
    'f-row',
    'f-wrap',
    'f-justify-start',
    'gap-m'
  );
  productElement.innerHTML = `
      <div class="product__img-container col-lg-8 col-md-12 f-col f-justify-end f-align-start">
        <div class="product__img-wrapper col-lg-8 col-md-12 f-col f-justify-end f-align-start">
            <img src="${product.image}" alt="${product.description}" class="product__img">
            
        </div>
      </div>
      <div class="product__content col-lg-4 col-md-12 f-col f-justify-start f-align-start">
        <h1 class="product__title text-al-left text-w400 text-xxl text-dark">${product.title}</h1>
        <h2 class="product__price text-al-left text-w400 text-m text-dark--light">${product.price}€</h2>
        <p class="product__price text-al-left text-w400 text-xxs text-dark text-w500" id="chaise-title">${product.rating}</p>
        <p class="product__price text-al-left text-w400 text-xxs text-dark text-w500" id="chaise-title">${product.description}</p>
        <p class="product__price text-al-left text-w400 text-xxs text-dark text-w500" id="chaise-title">${product.category}</p>
      </div>
`;
  const addToCartButton = document.createElement('a');
  addToCartButton.textContent = 'Add to Cart';
  addToCartButton.classList.add('btn', 'btn-primary');
  addToCartButton.addEventListener('click', () => addToCart(product));

  productElement.appendChild(addToCartButton);
  productGrid.appendChild(productElement);
};

const addToCart = (product) => {
  const cartData = {
    userId: 7,
    date: new Date().toISOString().split('T')[0],
    products: [
      {
        productId: product.id,
        productName: product.title,
        quantity: 1,
      },
    ],
  };

  fetchConnection('https://fakestoreapi.com/carts/7', 'PUT')
    .then((response) => {
      return console.log('Product added to cart:', cartData);
    })
    .catch((err) => {
      console.log('Failed to add product to cart:', err);
    });
};

getProduct('1').then((product) => {
  renderProductGrid(product);
});

const getRelatedProducts = (category) => {
  return fetchConection(
    `https://fakestoreapi.com/products/category/${category}`,
    'GET'
  )
    .then((response) => {
      console.log(response);
      const products = response.map((product) => ({
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
      console.log('promise rejected', err);
    });
};

const renderProductsGrid = (products) => {
  const productGrid = document.getElementById('related');
  products.forEach((product) => {
    const productElement = document.createElement('div');
    productElement.classList.add(
      'products-grid__card',
      'col-lg-4',
      'col-md-6',
      'f-col',
      'f-justify-end',
      'f-align-start'
    );
    productElement.innerHTML = `
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
  });
};

getRelatedProducts('jewelery').then((product) => {
  renderProductsGrid(product);
});
