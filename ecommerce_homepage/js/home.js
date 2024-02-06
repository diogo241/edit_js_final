const fetchConection = (link) => {
  return fetch(link)
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log("rejected", err));
};

const getProducts = () => {
  return fetchConection('https://fakestoreapi.com/products')    
  .then((response) => {
    const products = response.map(product => ({
      id: product.id,
      title: product.title,
      price: product.price,
      category: product.category,
      description: product.description,
      image: product.image,
    }));
    console.log(products);
  })
  .catch((err) => {
    console.log("promise rejected", err);
  });
};



//CATEGORIAS DINÂMICAS

const getCategories = () => {
  return fetchConection('https://fakestoreapi.com/products/categories')    
  .then((response) => {
    const categories = response.map(category => ({
      name: category,
    }));
    return categories;
  })
  .catch((err) => {
    console.log("promise rejected", err);
  });
};
getCategories()

const renderCategorieGrid = (categories) => {
  const categoryGrid = document.getElementById('categories__cards');

  categories.forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.textContent = category.name;
    categoryElement.innerHTML =`
    <a href="/archive-page.html" class="categories__card-wrapper border-radius-m">
      <img src="./assets/categories/seating.jpg" alt="" class="categories__img">
      <h5 class="categories__card-title text-m text-dark text-w500">${category.name}</h5>
    </a>
  `;

    categoryElement.classList.add('categories__card', 'col-lg-4','col-md-6','f-col','f-justify-end','f-align-start');
    categoryGrid.appendChild(categoryElement);
  });
}

getCategories().then(category => {
  console.log(category);
  renderCategorieGrid(category);
});




// const renderProductGrid = (products) => {
//   const productGrid = document.getElementById('productGrid');

//   products.forEach((product) => {
//     const productElement = document.createElement('div');
//     productElement.classList.add('product');
    
//     const imageElement = document.createElement('img');
//     imageElement.src = product.image;
//     imageElement.alt = product.description;
    
//     const descriptionElement = document.createElement('p');
//     descriptionElement.textContent = product.description;
    
//     productElement.appendChild(imageElement);
//     productElement.appendChild(descriptionElement);
    
//     productGrid.appendChild(productElement);
//   });
// };

// getProducts().then((products) => {
//   console.log(products);
//   renderProductGrid(products);
// });
