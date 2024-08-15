// Меню для мобильного

$(document).ready(function() {

  var burgerMenu = $('#burger-menu');
  var overlay = $('#menu');
  var visible = $('.visible');
  var sectMain = $('.main');
  var sectSmartHome = $('.smart_home');
  var sectHome = $('.home');

  burgerMenu.on('click', function() {
      $(this).toggleClass("close");
      overlay.toggleClass("overlay");
      visible.toggleClass('no_visible');
      sectSmartHome.toggleClass("none");
      sectMain.toggleClass("none");
      sectHome.toggleClass("none");
  });

});

// Параллакс
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    $('.home_fon').css({
      'transform': 'translateY(-' + (scrollTop * 0.2) + 'px)',

    });
    var scrollTop = $(window).scrollTop();
    $('.home_txt').css({
      'transform': 'translateY(-' + (scrollTop * 0.6) + 'px)',

    });
  });



// Слайдеры
$(document).ready(function() {
  let currentSlide = 1;
  const totalSlides = 6;
  const slideWidth = $('.slide').outerWidth(true);
  let startX, endX;

  function updateSlider() {
      const offset = -(currentSlide - 1) * slideWidth;
      $('.slider').css('transform', `translateX(${offset}px)`);
      $('#currentSlide').text(`0${currentSlide}`);
      $('#totalSlides').text(`0${totalSlides}`);
      $('.slide').removeClass('active');
      $(`.slide:eq(${currentSlide - 1})`).addClass('active');
      
      // Обновление активного индикатора
      $('.dot').removeClass('active');
      $(`.dot:eq(${currentSlide - 1})`).addClass('active');
  }

  function createDots() {
      for (let i = 1; i <= totalSlides; i++) {
          $('.slide-dots').append(`<div class="dot" data-slide="${i}"></div>`);
      }

      $('.dot').click(function() {
          currentSlide = $(this).data('slide');
          updateSlider();
      });
  }

  $('#prevSlide').click(function() {
      currentSlide = currentSlide > 1 ? currentSlide - 1 : totalSlides;
      updateSlider();
  });

  $('#nextSlide').click(function() {
      currentSlide = currentSlide < totalSlides ? currentSlide + 1 : 1;
      updateSlider();
  });

  $('.slide').click(function() {
      currentSlide = $(this).index() + 1;
      updateSlider();
  });

  $('.slider-wrapper').on('touchstart', function(e) {
      startX = e.originalEvent.touches[0].clientX;
  });

  $('.slider-wrapper').on('touchmove', function(e) {
      endX = e.originalEvent.touches[0].clientX;
  });

  $('.slider-wrapper').on('touchend', function() {
      if (startX - endX > 50) {
          currentSlide = currentSlide < totalSlides ? currentSlide + 1 : 1;
          updateSlider();
      } else if (endX - startX > 50) {
          currentSlide = currentSlide > 1 ? currentSlide - 1 : totalSlides;
          updateSlider();
      }
  });

  createDots();
  updateSlider();
});