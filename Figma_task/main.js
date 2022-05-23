// jshint esversion: 6

// Adding to Cart
document.getElementById("cart-card").classList.toggle("hide");

//location.reload();

// Add to Cart
const add_to_cart = document.getElementById('add-cart');
add_to_cart.addEventListener("click", function(){
  var count = document.getElementById("count").textContent;
  const curr = document.getElementById("cart-count").textContent;
  const after = parseInt(count) + parseInt(curr);
  document.getElementById("cart-count").textContent = after;
});

// Cart Icon in header
const cart_detail_button = document.getElementById('cart-icon');
cart_detail_button.addEventListener("click", function(){
  // document.getElementById("cart-card").classList.toggle("hide");
  const x = document.getElementById("cart-count").textContent;
  if (x < 1 ){
    document.getElementById("aaa1").classList.toggle("hide");
  }
  else{
    var ans = (125.00 * x);
    document.getElementById("times").textContent = x;
    document.getElementById("product").textContent = "$"+ans+'.00';
  }
});

// remove from cart (delete)

const delete_button = document.getElementById("delete_icon");
delete_button.addEventListener("click", function(){
  location.reload();
});

// Adding + and -

var minus = document.getElementById("minuss");
minus.addEventListener("click", function(){
  var count = document.getElementById("count").textContent;
  if (count>0){
    count = parseInt(count) - 1;
  }
  document.getElementById("count").textContent = count;
});

var plus = document.getElementById("pluss");
plus.addEventListener("click", function(){
  var count = document.getElementById("count").textContent;
  count = parseInt(count) + 1;
  document.getElementById("count").textContent = count;
});

// Modals
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn[0].onclick = function() {
  modal.style.display = "block";
};
btn[1].onclick = function() {
  modal.style.display = "block";
};
btn[2].onclick = function() {
  modal.style.display = "block";
};
btn[3].onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


// carousel
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
