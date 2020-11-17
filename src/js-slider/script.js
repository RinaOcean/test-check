$(document).ready(function () {
  $('.slider-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // arrows: false,
    fade: true,
    asNavFor: '.slider-list',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  // $('.slider-icon-photo').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   asNavFor: '.slider-container',
  //   // dots: true,
  //   centerMode: true,
  //   focusOnSelect: true,

  //   infinite: true,
  //   // speed: 500,
  //   // fade: true,
  // });
  $('.slider-list').slick({
    infinite: false,
    speed: 300,
    focusOnSelect: true,
    // slidesToShow: 4,
    // slidesToScroll: 4,
    // centerMode: true,
    asNavFor: '.slider-container',
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
