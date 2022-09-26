  const menuEmail = document.querySelector('.navbar-email');
  const desktopMenu = document.querySelector('.desktop-menu');
  const movilHamMenu = document.querySelector('.menu');
  const movilListMenu = document.querySelector('.mobile-menu')
  const myOrders = document.querySelector('.navbar-shopping-cart');
  const listOrders = document.querySelector('#shoppingCartContainer');

  menuEmail.addEventListener('click', toggleDesktopMenu);
  movilHamMenu.addEventListener('click', toggleMovilMenu);
  myOrders.addEventListener('click', toggleMyOrders);

  function toggleDesktopMenu(){
    const isAsideClosed = listOrders.classList.contains('inactive');
    if(!isAsideClosed){
      listOrders.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
  }

  function toggleMovilMenu(){
    const isAsideClosed = listOrders.classList.contains('inactive');
    if(!isAsideClosed){
      listOrders.classList.add('inactive');
    } 
    
    movilListMenu.classList.toggle('inactive');
  }

  function toggleMyOrders(){
    listOrders.classList.toggle('inactive');
  } 

  const listProduct = [];
  listProduct.push({
    nombre: 'Bicicleta',
    precio: '250.00',
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  });
  listProduct.push({
    nombre: 'Carro',
    precio: '500.00',
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  });
  listProduct.push({
    nombre: 'Moto Lineal',
    precio: '150.00',
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  });
  listProduct.push({
    nombre: 'Bicicleta',
    precio: '250.00',
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  });
  listProduct.push({
    nombre: 'Carro',
    precio: '500.00',
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  });
  listProduct.push({
    nombre: 'Moto Lineal',
    precio: '150.00',
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  });

  /*<!-- <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> -->*/

    function renderProducts(arr){
      for(product of arr){
        const mainContainer = document.querySelector('.main-container');
        const cardContainer = document.querySelector('.cards-container');
        const contenedorProducto = document.createElement('div');
        contenedorProducto.classList.add('product-card');

        const imagenProducto = document.createElement('img');
        imagenProducto.setAttribute('src', product.imagen);

        const productoInfo = document.createElement('div');
        productoInfo.classList.add('product-info');

        const productoPrecioNombre = document.createElement('div');
        const productoPrecio = document.createElement('p');
        productoPrecio.innerText = 'S/' + product.precio;
        const productoNombre = document.createElement('p');
        productoNombre.innerText = product.nombre;
        productoPrecioNombre.append(productoPrecio, productoNombre);

        const iconoFigura = document.createElement('figure');
        const imgFigura = document.createElement('img');
        imgFigura.setAttribute('src', './icons/bt_add_to_cart.svg');
        iconoFigura.appendChild(imgFigura)

        productoInfo.append(productoPrecioNombre, iconoFigura );
        contenedorProducto.append(imagenProducto, productoInfo);
        cardContainer.appendChild(contenedorProducto);
        mainContainer.appendChild(cardContainer);
      }
    }

    renderProducts(listProduct);



































/*const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive'); 
  }

  closeProductDetailAside();
  
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive'); 
  }
  
  shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);*/
