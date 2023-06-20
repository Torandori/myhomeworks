$(function(){

  var lazyLoadInstance = new LazyLoad({});
  
  $('#hamb-btn').on('click', function(){
    $(this).toggleClass('is-active');
    // $('#mob-menu').classToggle('open');
  });
  
  $('#first-sec-slider').lightSlider({
    item: 1,
    loop: true,
    enableDrag: true,
    auto: true,
    // pauseOnHover: true,
    pause: 3000,
  });

  $('.second-sec-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });

  $('.third-sec-slider').slick({
    slidesToShow: 9,
    slidesToScroll: 5,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });

  // $('.third-sec-slider').slick({
  //   slidesToShow: 9,
  //   slidesToScroll: 5,
  //   prevArrow: $('.prev'),
  //   nextArrow: $('.next'),
  // });



  
})
