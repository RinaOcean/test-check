$(document).ready(function () {
  $('.slider-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // arrows: false,
    fade: true,

    asNavFor: '.slider-list',
  });
  $('.slider-list').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.slider-container',
    // infinite: true,
    centerMode: true,
    focusOnSelect: true,
  });
  // $('.slider-list').slick({
  //   dots: true,
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   responsive: [
  //     {
  //       breakpoint: 1366,
  //       settings: {
  //         slidesToShow: 7,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         // dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 7,
  //         slidesToScroll: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //       },
  //     },
  //     // You can unslick at a given breakpoint now by adding:
  //     // settings: "unslick"
  //     // instead of a settings object
  //   ],
  // });
});
