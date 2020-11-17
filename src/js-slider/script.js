$(document).ready(function () {
  $('.slider-container').slick({
    slidesToShow: 1,
    // arrows: false,
    fade: true,
    asNavFor: '.slider-list',
  });
  $('.slider-list').slick({
    slidesToShow: 7,
    slidesToScroll: 3,
    asNavFor: '.slider-container',
    // dots: true,
    centerMode: true,
    focusOnSelect: true,
  });
  //   $('.slider-list').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //        slidesToShow: 2,
  //        slidesToScroll: 2
  //       },{
  //       breakpoint: 480,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 1
  //       }
  //     }
  //     }]
  // });
});
