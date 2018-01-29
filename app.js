'use strict';

Product.allProducts = [];
Product.totalClicks = 0;
Product.lastDisplayed = [];

var productNames = [];
var productVotes = [];

var sectionEl = document.getElementById('products');
var ulEl = document.getElementById('results');

function Product(filepath, name){
  this.filepath = filepath;
  this.name = name;
  this.shown = 0;
  this.clicked = 0;
  Product.allProducts.push(this);
  productNames.push(this.name);
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
var imgEl2 = document.getElementById('prod-pic2');
var imgEl3 = document.getElementById('prod-pic3');

function randomProduct() {
  var randomLeft = Math.floor(Math.random() * Product.allProducts.length);
  var randomMid = Math.floor(Math.random() * Product.allProducts.length);
  var randomRight = Math.floor(Math.random() * Product.allProducts.length);

  while(randomLeft === randomRight || randomMid === randomRight || randomLeft === randomMid || Product.lastDisplayed.includes(randomLeft) || Product.lastDisplayed.includes(randomRight) || Product.lastDisplayed.includes(randomMid)) {
    console.log('Duplicate was caught');
    randomLeft = Math.floor(Math.random() * Product.allProducts.length);
    randomMid = Math.floor(Math.random() * Product.allProducts.length);
    randomRight = Math.floor(Math.random() * Product.allProducts.length);
  }

  imgEl1.src = Product.allProducts[randomLeft].filepath;
  imgEl1.alt = Product.allProducts[randomLeft].name;

  imgEl2.src = Product.allProducts[randomMid].filepath;
  imgEl2.alt = Product.allProducts[randomMid].name;

  imgEl3.src = Product.allProducts[randomRight].filepath;
  imgEl3.alt = Product.allProducts[randomRight].name;

  Product.allProducts[randomLeft].shown += 1;
  Product.allProducts[randomMid].shown += 1;
  Product.allProducts[randomRight].shown += 1;

  Product.lastDisplayed[0] = randomLeft;
  Product.lastDisplayed[1] = randomMid;
  Product.lastDisplayed[2] = randomRight;
}

function handleClick(e) {
  Product.totalClicks += 1;

  console.log(e.target.alt);
  for(var i in Product.allProducts) {
    if(e.target.alt === Product.allProducts[i].name) {
      Product.allProducts[i].clicked += 1;
    }
  }

  if(Product.totalClicks > 25) {
    sectionEl.removeEventListener('click', handleClick);
    showResults();
    updateVotes();
  } else {
    randomProduct();
  }
}

function showResults() {
  for(var i in Product.allProducts) {
    var liEl = document.createElement('li');
    liEl.textContent = Product.allProducts[i].name + ' has ' + Product.allProducts[i].clicked + ' votes and was displayed ' + Product.allProducts[i].shown + ' times.';
    ulEl.appendChild(liEl);
  }
}

function updateVotes(){
  for(var i in Product.allProducts) {
    productVotes[i] = Product.allProducts[i].clicked;
  }
}

sectionEl.addEventListener('click', handleClick);

randomProduct();