!(function ($) {
  "use strict";

  // Preloader
  $(window).on('load', function () {
    const preloader = $('#preloader');
    if (preloader.length) {
      preloader.delay(100).fadeOut('slow', function () { $(this).remove(); });
    }
  });

  // Typed.js
  if ($('.typed').length) {
    let typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  // Smooth scroll for nav links
  $(document).on('click', '.nav-menu a, .scrollto', function (e) {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      const target = $(this.hash);
      if (target.length) {
        e.preventDefault();
        const scrollto = target.offset().top;
        $('html, body').animate({ scrollTop: scrollto }, 800, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        const body = $('body');
        if (body.hasClass('mobile-nav-active')) {
          body.removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash
  $(document).ready(function () {
    if (window.location.hash) {
      const initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        const scrollto = $(initial_nav).offset().top;
        $('html, body').animate({ scrollTop: scrollto }, 800, 'easeInOutExpo');
      }
    }
  });

  // Mobile nav toggle
  $(document).on('click', '.mobile-nav-toggle', function () {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
  });

  // Close mobile nav on outside click
  $(document).click(function (e) {
    const container = $(".mobile-nav-toggle");
    const body = $('body');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if (body.hasClass('mobile-nav-active')) {
        body.removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
      }
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) $('.back-to-top').fadeIn('slow');
    else $('.back-to-top').fadeOut('slow');
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800, 'easeInOutExpo');
    return false;
  });

  // AOS
  function aos_init() {
    AOS.init({ duration: 800, once: true });
  }
  $(window).on('load', function () { aos_init(); });

})(jQuery);
