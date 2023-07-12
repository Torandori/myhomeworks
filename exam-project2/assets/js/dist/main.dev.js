"use strict";

var _toast = require("./toast.js");

$(function () {
  var lazyLoadInstance = new LazyLoad({}); // HAMB 

  function toggleMenu() {
    $('#hamb-btn').toggleClass("is-active");
    $('#mobile-sidebar').toggleClass("open");
    $('#shadow').toggleClass("show");
  }

  ;
  $('#hamb-btn').click(function (event) {
    toggleMenu();

    if ($('#hamb-btn').hasClass("is-active")) {
      $('body').css('overflow', 'hidden');
      $('#header').addClass('header-mob');
    } else {
      $('body').css('overflow', 'auto');
      $('#header').removeClass('header-mob');
    }

    ;
  });
  $('.menu-link').click(function (event) {
    toggleMenu();

    if ($('#hamb-btn').hasClass("is-active")) {
      $('body').css('overflow', 'hidden');
      $('#header').addClass('header-mob');
    } else {
      $('body').css('overflow', 'auto');
      $('#header').removeClass('header-mob');
    }

    ;
  });
  $('#shadow').click(function (event) {
    toggleMenu();

    if ($('#hamb-btn').hasClass("is-active")) {
      $('body').css('overflow', 'hidden');
      $('#header').addClass('header-mob');
    } else {
      $('body').css('overflow', 'auto');
      $('#header').removeClass('header-mob');
    }

    ;
  }); // #HAMB 
  // ANIMATION 

  var wow = new WOW({
    animateClass: "animate__animated"
  });
  wow.init(); // #ANIMATION
  // HEADER SCROLLl

  $(window).scroll(function () {
    if ($(window).scrollTop() > $('#first-sec').outerHeight() / 5) {
      $('body').addClass('header-background');
    } else {
      $('body').removeClass('header-background');
    }
  });
  $(".main-menu a, .mob-menu a, .btn-scroll").on("click", function (event) {
    event.preventDefault();
    var target = $($(this).attr("href"));

    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 160 //substruct header heigth

      }, 1000); // smoothing
    }
  }); //#HEADER SCROLL
  // MOBMENU_SCROLL 

  $(window).scroll(function () {
    if ($(window).scrollTop() > $('#first-sec').outerHeight() / 5) {
      $('body').addClass('mobbar-fixed');
    } else {
      $('body').removeClass('mobbar-fixed');
    }
  }); // #MOBMENU_SCROLL 
  // LIGHTSLIDER

  $('#first-sec-slider').lightSlider({
    item: 1,
    loop: true,
    enableDrag: true,
    controls: false,
    vertical: true,
    slideMargin: 0,
    adaptiveHeight: true,
    verticalHeight: 800,
    keyPress: false,
    auto: true,
    pauseOnHover: false,
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
  }); // #LIGHTSLIDER
  // SIMPLE LIGHTBOX GALLERY

  var gallery = $('.gallery a').simpleLightbox({
    focus: false,
    enableKeyboard: false
  }); // #SIMPLE LIGHTBOX GALLERY
  // SLICK SLIDER NEWS 

  var slickSlider = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    prevArrow: "<button type=\"button\" class=\"second-prev\">\n    <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle opacity=\"0.5\" cx=\"20\" cy=\"20\" r=\"19.5\" stroke=\"white\"/>\n    <path d=\"M21.8984 17.25C21.8984 17.1797 21.8672 17.1172 21.8203 17.0703L21.4297 16.6797C21.3828 16.6328 21.3125 16.6016 21.25 16.6016C21.1875 16.6016 21.1172 16.6328 21.0703 16.6797L17.4297 20.3203C17.3828 20.3672 17.3516 20.4375 17.3516 20.5C17.3516 20.5625 17.3828 20.6328 17.4297 20.6797L21.0703 24.3203C21.1172 24.3672 21.1875 24.3984 21.25 24.3984C21.3125 24.3984 21.3828 24.3672 21.4297 24.3203L21.8203 23.9297C21.8672 23.8828 21.8984 23.8125 21.8984 23.75C21.8984 23.6875 21.8672 23.6172 21.8203 23.5703L18.75 20.5L21.8203 17.4297C21.8672 17.3828 21.8984 17.3125 21.8984 17.25Z\" fill=\"white\"/>\n    </svg>\n    </button>",
    // better insert directly html markup of el here (svg possible)
    nextArrow: "<button type=\"button\" class=\"second-next wow animate__flash\" data-wow-delay=\".5s\">\n    <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle opacity=\"0.5\" cx=\"20\" cy=\"20\" r=\"19.5\" stroke=\"white\"/>\n    <path d=\"M22.6484 20.5C22.6484 20.4375 22.6172 20.3672 22.5703 20.3203L18.9297 16.6797C18.8828 16.6328 18.8125 16.6016 18.75 16.6016C18.6875 16.6016 18.6172 16.6328 18.5703 16.6797L18.1797 17.0703C18.1328 17.1172 18.1016 17.1875 18.1016 17.25C18.1016 17.3125 18.1328 17.3828 18.1797 17.4297L21.25 20.5L18.1797 23.5703C18.1328 23.6172 18.1016 23.6875 18.1016 23.75C18.1016 23.8203 18.1328 23.8828 18.1797 23.9297L18.5703 24.3203C18.6172 24.3672 18.6875 24.3984 18.75 24.3984C18.8125 24.3984 18.8828 24.3672 18.9297 24.3203L22.5703 20.6797C22.6172 20.6328 22.6484 20.5625 22.6484 20.5Z\" fill=\"white\"/>\n    </svg>\n    </button>",
    responsive: [{
      breakpoint: 1290,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  $('.second-prev').on('click', function () {
    slickSlider.slick('slickPrev');
  });
  $('.second-next').on('click', function () {
    slickSlider.slick('slickNext');
  }); // #SLICK SLIDER NEWS 
  // JSON JQ get news

  function destroyCarousel() {
    if ($('.forth-sec-slider').hasClass('slick-initialized')) {
      $('.forth-sec-slider').slick('unslick');
    }
  }

  function applySlider() {
    $('.forth-sec-slider').slick(slickSlider);
  }

  function getNews() {
    fetch('data/news.json').then(function (resp) {
      return resp.json();
    }).then(function (resp) {
      console.log(resp);
      var html = '';
      resp.forEach(function (item) {
        html += "\n          <div class=\"card\">\n            <div class=\"card-img\">\n              <img data-src=\"".concat(item.image, "\" class=\"lazyload\" alt=\"News picture\">\n            </div>\n            <div class=\"card-wrap-under-img\">\n              <div class=\"small-text\">\n                <h3 class=\"h3 montserrat\">").concat(item.title, "</h3>\n                <p>").concat(item.paragraph, "</p>\n              </div>\n              <div class=\"user\">\n                <div class=\"user-avatar\">\n                  <img data-src=\"").concat(item.userAvatar, "\" class=\"lazyload\" alt=\"User avatar\">\n                </div>\n                <div class=\"user-name montserrat\">\n                  <div>").concat(item.userName, "</div>\n                  <div>").concat(item.date, "</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        ");
      });
      console.log(html);
      destroyCarousel(); // destroy slick slider first

      $('.forth-sec-slider').html(''); // now make html empty          

      $('.forth-sec-slider').html(html); // apply new data

      applySlider(); // apply slick slider again
      // lazy load for jquery script 

      var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazyload"
      }); // Trigger lazy loading

      lazyLoadInstance.update(); // lazy load for jquery script 
    });
  }

  getNews(); // JSON jq get news
  // LEAFLET MAP

  function initMap() {
    var map = L.map('map').setView([40.71275609925605, -74.01339694662713], 13);
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
    }).addTo(map);
    var circleIcon = L.icon({
      iconUrl: 'assets/images/marker.svg',
      iconSize: [106, 106] // size of the icon

    });
    L.marker([40.71275609925605, -74.01339694662713], {
      icon: circleIcon,
      title: 'Here we go'
    }).addTo(map).bindPopup('<b style="color: #7E5AFF">One World Trade Center<b>');
  }

  $('#map_link').click(function (event) {
    $('#map').html('');
    initMap();
  }); // #LEAFLET MAP
  // TELEGRAM SEND MESSAGE 

  window.contacts.addEventListener('submit', function (event) {
    event.preventDefault();
    var errors = [];
    var msg = '',
        name = window.fullName.value,
        email = window.email.value;

    if (name === '') {
      errors.push('Enter your name');
    }

    if (email === '') {
      errors.push('Enter your email');
    }

    if (errors.length === 0) {
      msg = "\n        <b>Name: </b>".concat(name, "\n        <b>Email: </b>").concat(email, "\n      ");
      sendMessage(msg);
    } else {
      alert(errors.join(' '));
    }
  });

  function sendMessage(message) {
    var apiToken, chatId, urlString, response, resp;
    return regeneratorRuntime.async(function sendMessage$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            apiToken = "6124279978:AAHpO-C5Brpm2HgIpkDOpy7Zjkr5539aSMk";
            chatId = "-1001969020828";
            urlString = "https://api.telegram.org/bot".concat(apiToken, "/sendMessage?chat_id=").concat(chatId, "&text=").concat(encodeURIComponent(message), "&parse_mode=html");
            _context.next = 5;
            return regeneratorRuntime.awrap(fetch("https://api.telegram.org/bot".concat(apiToken, "/sendMessage"), {
              method: 'post',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'HTML'
              })
            }));

          case 5:
            response = _context.sent;
            _context.next = 8;
            return regeneratorRuntime.awrap(response.json());

          case 8:
            resp = _context.sent;
            console.log(resp);

            _toast.toast.success('Your contacts succesfully sent');

            window.fullName.value = '', window.email.value = '';

          case 12:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  var docWidth = document.documentElement.offsetWidth;
  [].forEach.call(document.querySelectorAll('*'), function (el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }); // #TELEGRAM SEMD MESSAGE
});