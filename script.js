let carousel = document.querySelector('.carousel');
let cellCount = 9;
let selectedIndex = 0;

function rotateCarousel() {
  let angle = selectedIndex / cellCount * -360;
  console.log(angle);
  carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
}

let prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
});

let nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
});