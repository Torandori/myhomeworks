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

  // simple-gallery 
  var gallery = $('.gallery a').simpleLightbox({
  });
  // #simple-gallery 

  
  // leaflet map
  // window.map_link.onclick = function(){
  //   window.getElementById('map').innerHTML = '';
  //   initMap();
  // };
  
  function initMap() {
    const map = L.map('map').setView([40.71275609925605, -74.01339694662713], 13);
    
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
    }).addTo(map);
  
    const circleIcon = L.icon({
      iconUrl: 'assets/images/marker.svg',
      iconSize:     [106, 106], // size of the icon
    });
    
    L.marker([40.71275609925605, -74.01339694662713], {icon: circleIcon, title: 'Here we go'}).addTo(map)
    .bindPopup('<b style="color: #7E5AFF">One World Trade Center<b>')
    // .openPopup();
  }
  // #leaflet map
  
  $('#map_link').click(function(event) {
    $('#map').html('');
    initMap();
  });


  
})