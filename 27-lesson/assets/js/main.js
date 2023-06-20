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
    pause: 2500,
  });

  $('.second-sec-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: $('.second-prev'),
    nextArrow: $('.second-next'),
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  $('.third-sec-slider').slick({
    slidesToShow: 9,
    slidesToScroll: 5,
    prevArrow: $('.third-prev'),
    nextArrow: $('.third-next'),
    responsive: [
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
  
})
