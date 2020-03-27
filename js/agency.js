(function($) {
  "use strict"; // Start of use strict

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
      $(".logo-hidden").addClass("logo-display");
      $(".nav-link").addClass("nav-link-scroll");
      $(".line-navbar").addClass("nav-link-scroll");
      $(".nav-item-hide").addClass("nav-item-show");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      $(".logo-hidden").removeClass("logo-display");
      $(".nav-link").removeClass("nav-link-scroll");
      $(".line-navbar").removeClass("nav-link-scroll");
      $(".nav-item-hide").removeClass("nav-item-show");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  var scrollToTop = function() {
    $(window).scrollTop(0);
  }

})(jQuery); // End of use strict