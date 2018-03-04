

let carousel = document.querySelector('.carousel');
let carouselStage = document.querySelector('.carousel-stage');
let carouselPrev = document.querySelector('.carousel-prev');
let carouselNext = document.querySelector('.carousel-next');
let slides = document.querySelectorAll('.single-slide');
let currentIndex = 0;

var singleSlideWidth = slides[0].clientWidth;
console.log(slides);

var slidesNumber = slides.length - 1;

function goToSlide(index){

  if (index < 0) {
    index = slidesNumber;
}
  else if (index > slidesNumber) {
    index = 0;
}
    carousel.style.right= index * singleSlideWidth;
    currentIndex = index;
}
function sildeToNext(){
  goToSlide(currentIndex + 1);

}

function slideToPrev(){
  goToSlide(currentIndex + 1);

}

function bindEvents() {
  carouselPrev.addEventListener('click', slideToPrev);
  carouselNext.addEventListener('click', sildeToNext);
}
function autorotate() {
    setInterval(sildeToNext, 4000);
}
bindEvents();
autorotate();
