"use strict";

$(function () {
  // $('.lazy').lazyLoadXT();
  var lazyLoadInstance = new LazyLoad({});

  function toggleMenu() {
    $('#hamb-btn').toggleClass("is-active");
    $('#mobile-sidebar').toggleClass("open");
    $('#shadow').toggleClass("show");
  }

  ;
  $('#hamb-btn').click(function (event) {
    toggleMenu();
  });
  $('.menu-link').click(function (event) {
    toggleMenu();
  });
  $('#first-sec-slider').lightSlider({
    item: 1,
    loop: true,
    enableDrag: true,
    controls: false,
    vertical: true,
    slideMargin: 0,
    adaptiveHeight: true,
    verticalHeight: 800,
    auto: true,
    pause: 2500,
    onSliderLoad: function onSliderLoad(el) {
      var showActiveSlides = function showActiveSlides(entries) {
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
        rootMargin: "0px " + imageWidth + " 0px " + imageWidth
      });
      el.find("li img").each(function () {
        observer.observe(this);
      });
    }
  });
});