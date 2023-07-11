$(function(){
  // $('.lazy').lazyLoadXT();
  var lazyLoadInstance = new LazyLoad({});
  function toggleMenu(){
    $('#hamb-btn').toggleClass("is-active");
    $('#mobile-sidebar').toggleClass("open");
    $('#shadow').toggleClass("show");
  }
  $('#hamb-btn').click(function(event) {
    toggleMenu();
  });
  $('.menu-link').click(function(event) {
    toggleMenu();
  });
})