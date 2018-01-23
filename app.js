'use strict';

Product.allProducts = [];
var currentIndex = 0;

function Product(filepath, name){
  this.filepath = filepath;
  this.name = name;
  this.shown = 0;
  this.clicked = 0;
  Product.allProducts.push(this);
}

new Product('img/bag.jpg', 'bag');
new Product('img/banana.jpg', 'banana');
new Product('img/bathroom.jpg', 'bathroom');
new Product('img/boots.jpg', 'boots');
new Product('img/breakfast.jpg', 'breakfast');
new Product('img/bubblegum.jpg', 'bubblegum');
new Product('img/chair.jpg', 'chair');
new Product('img/cthulhu.jpg', 'cthulhu');
new Product('img/dog-duck.jpg', 'dog-duck');
new Product('img/dragon.jpg', 'dragon');
new Product('img/pen.jpg', 'pen');
new Product('img/pet-sweep.jpg', 'pet-sweep');
new Product('img/scissors.jpg', 'scissors');
new Product('img/shark.jpg', 'shark');
new Product('img/sweep.png', 'sweep');
new Product('img/tauntaun.jpg', 'tauntaun');
new Product('img/unicorn.jpg', 'unicorn');
new Product('img/usb.gif', 'usb');
new Product('img/water-can.jpg', 'water-can');
new Product('img/wine-glass.jpg', 'wine-glass');

var imgEl1 = document.getElementById('prod-pic1');
// var imgEl2 = document.getElementById('prod-pic2');
// var imgEl3 = document.getElementById('prod-pic3');

function randomProduct() {
  var randomIndex = Math.floor(Math.random() * Product.allProducts.length);
  imgEl1.src = Product.allProducts[randomIndex].filepath;
  Product.allProducts[randomIndex].shown++;
  console.log(Product.allProducts[randomIndex].name + ' shown: ' + Product.allProducts[randomIndex].shown + ' time(s)');
  currentIndex = randomIndex;
}

function count() {
  Product.allProducts[currentIndex].clicked++;
  console.log(Product.allProducts[currentIndex].name + ' clicked: ' + Product.allProducts[currentIndex].clicked + ' time(s)');
}

imgEl1.addEventListener('click', count);
imgEl1.addEventListener('click', randomProduct);

// imgEl2.addEventListener('click', randomProduct);
// imgEl3.addEventListener('click', randomProduct);

randomProduct();