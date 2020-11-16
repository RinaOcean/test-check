$(document).ready(function () {
  $('.slider-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-list',
  });
  $('.slider-list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-container',
    // dots: true,
    centerMode: true,
    focusOnSelect: true,
    // infinite: true,
    // speed: 500,
    // fade: true,
  });
});
