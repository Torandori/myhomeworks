$(function(){
  // $('.lazy').lazyLoadXT();
  var lazyLoadInstance = new LazyLoad({});

  // hamb 
  function toggleMenu(){
    $('#hamb-btn').toggleClass("is-active");
    $('#mobile-sidebar').toggleClass("open");
    $('#shadow').toggleClass("show");
  };
  $('#hamb-btn').click(function(event) {
    toggleMenu();
  });
  $('.menu-link').click(function(event) {
    toggleMenu();
  });
  $('#shadow').click(function(event) {
    toggleMenu();
  });
  // #hamb 

  // header scroll
  $(window).scroll(function() {
    // debugger;
    if($(window).scrollTop() > $('#first-sec').outerHeight() / 5){
      $('body').addClass('header-background');
    } else {
      $('body').removeClass('header-background');
    }   
  })
  
  $(".main-menu a, .mob-menu a, .btn-scroll").on("click", function(event) {
    event.preventDefault();

    var target = $($(this).attr("href"));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 160, //substruct header heigth
      }, 1000); // smoothing
    }
  });
  //#header scroll


  // lightslider 
  $('#first-sec-slider').lightSlider({
    item: 1,
    loop: true,
    enableDrag: true,
    controls: false,
    vertical: true,
    slideMargin: 0,
    adaptiveHeight: true,
    verticalHeight: 800,
    // auto: true,
    pause: 2500,

    onSliderLoad: function (el) {
      var showActiveSlides = function (entries) {
          entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                  entry.target.src = entry.target.dataset.src;
                  observer.unobserve(entry.target);
              }
          });
      };
  
      var imageWidth = el.find("li").outerWidth() + "px";
  
      var observer = new window.IntersectionObserver(showActiveSlides, {
          root: el.parent()[0],
          rootMargin: "0px "+ imageWidth + " 0px " + imageWidth
      });
  
      el.find("li img").each(function () {
          observer.observe(this);
      });
    }
  });  
  // #lightslider

  
})