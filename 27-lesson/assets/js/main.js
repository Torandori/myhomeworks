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
  });



  
})
