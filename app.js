'use strict';

Product.allProducts = [];
Product.totalClicks = 0;
Product.lastDisplayed = [];

var currentImages = [];
var pic = 0;

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
var imgEl2 = document.getElementById('prod-pic2');
var imgEl3 = document.getElementById('prod-pic3');

function randomProduct() {
  // generate random indices
  var randomLeft = Math.floor(Math.random() * Product.allProducts.length);
  var randomMid = Math.floor(Math.random() * Product.allProducts.length);
  var randomRight = Math.floor(Math.random() * Product.allProducts.length);

  // check to make sure each random number is unique AND not one of the previously displayed images
  // if they are the same, we need to generate new random numbers
  // Condition 1: left and right are the same
  // Condition 2: left is in the lastDisplayed array
  // Condition 3: right is in the lastDisplayed array
  while(randomLeft === randomRight || randomMid === randomRight || randomLeft === randomMid || Product.lastDisplayed.includes(randomLeft) || Product.lastDisplayed.includes(randomRight) || Product.lastDisplayed.includes(randomMid)) {
    console.log('Duplicate was caught');
    randomLeft = Math.floor(Math.random() * Product.allProducts.length);
    randomMid = Math.floor(Math.random() * Product.allProducts.length);
    randomRight = Math.floor(Math.random() * Product.allProductss.length);
  }

  // set the src and alt attributes of the two images
  imgEl1.src = Product.allProducts[randomLeft].filepath;
  imgEl1.alt = Product.allProducts[randomLeft].name;

  imgEl2.src = Product.allProducts[randomMid].filepath;
  imgEl2.alt = Product.allProducts[randomMid].name;

  imgEl3.src = Product.allProducts[randomRight].filepath;
  imgEl3.alt = Product.allProducts[randomRight].name;

  // increment the number of times each image was shown
  Product.allProducts[randomLeft].timesDisplayed += 1;
  Product.allProducts[randomMid].timesDisplayed += 1;
  Product.allProducts[randomRight].timesDisplayed += 1;

  // APPROACH 2:
  Product.lastDisplayed[0] = randomLeft;
  Product.lastDisplayed[1] = randomMid;
  Product.lastDisplayed[2] = randomRight;
}

function count() {
  if(pic === 1) {
    Product.allProducts[currentImages[0]].clicked++;
    console.log(Product.allProducts[currentImages[0]].name + ' clicked: ' + Product.allProducts[currentImages[0]].clicked + ' time(s)');
  } else if (pic === 2) {
    Product.allProducts[currentImages[1]].clicked++;
    console.log(Product.allProducts[currentImages[1]].name + ' clicked: ' + Product.allProducts[currentImages[1]].clicked + ' time(s)');
  } else {
    Product.allProducts[currentImages[2]].clicked++;
    console.log(Product.allProducts[currentImages[2]].name + ' clicked: ' + Product.allProducts[currentImages[2]].clicked + ' time(s)');
  }
  currentImages = [];
}

function whichPic() {
  pic = parseInt(document.getElementById(this));
}

imgEl1.addEventListener('click', whichPic);
imgEl2.addEventListener('click', whichPic);
imgEl3.addEventListener('click', whichPic);
imgEl1.addEventListener('click', count);
imgEl2.addEventListener('click', count);
imgEl3.addEventListener('click', count);
imgEl1.addEventListener('click', randomProduct);
imgEl2.addEventListener('click', randomProduct);
imgEl3.addEventListener('click', randomProduct);

randomProduct();