'use strict';

Product.allProducts = [];
var imagesDisplayed = 3;
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
  var randomIndex = 0;
  for(var i = 1; i <= imagesDisplayed; i++) {
    if(i === 1) {
      randomIndex = Math.floor(Math.random() * Product.allProducts.length);
      imgEl1.src = Product.allProducts[randomIndex].filepath;
      Product.allProducts[randomIndex].shown++;
      console.log(Product.allProducts[randomIndex].name + ' shown: ' + Product.allProducts[randomIndex].shown + ' time(s)');
      currentImages.push(randomIndex);
    } else if (i === 2) {
      randomIndex = Math.floor(Math.random() * Product.allProducts.length);
      imgEl2.src = Product.allProducts[randomIndex].filepath;
      Product.allProducts[randomIndex].shown++;
      console.log(Product.allProducts[randomIndex].name + ' shown: ' + Product.allProducts[randomIndex].shown + ' time(s)');
      currentImages.push(randomIndex);
    } else {
      randomIndex = Math.floor(Math.random() * Product.allProducts.length);
      imgEl3.src = Product.allProducts[randomIndex].filepath;
      Product.allProducts[randomIndex].shown++;
      console.log(Product.allProducts[randomIndex].name + ' shown: ' + Product.allProducts[randomIndex].shown + ' time(s)');
      currentImages.push(randomIndex);
    }
  }
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