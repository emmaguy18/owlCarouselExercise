$(document).ready(function(){

$(".owl-carousel").owlCarousel({
  items: 3,
  loop: true,
  center: true,
  autoplay: false,
  dots: true,
  dotsEach: true
});

})

$(".owl-carousel").owlCarousel({
  video: true,
  item: 1,
  merge: true,
  margin: 10,
  lazyload: true,
  center: true
});
