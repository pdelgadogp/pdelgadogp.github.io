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
    if (document.body.offsetWidth > 768) {
      if ($("#mainNav").offset().top > 50)  {
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
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

var changeBackground = function(opt) {
  var img = document.getElementById('SLIDE_BG');
  var style = img.currentStyle || window.getComputedStyle(img, false);
  var bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
  if (opt == 1) {
    if (bi.includes('header-bg-11.jpeg')) {
      document.getElementById('SLIDE_BG').style.backgroundImage="url(img/header-bg-33.jpeg)";
    } else if (bi.includes('header-bg-22.jpeg')) {
      document.getElementById('SLIDE_BG').style.backgroundImage="url(img/header-bg-11.jpeg)";
    } else if (bi.includes('header-bg-33.jpeg')) {
      document.getElementById('SLIDE_BG').style.backgroundImage="url(img/header-bg-22.jpeg)";
    }

  } else {
    if (bi.includes('header-bg-11.jpeg')) {
      document.getElementById('SLIDE_BG').style.backgroundImage="url(img/header-bg-22.jpeg)";
    } else if (bi.includes('header-bg-22.jpeg')) {
      document.getElementById('SLIDE_BG').style.backgroundImage="url(img/header-bg-33.jpeg)";
    } else if (bi.includes('header-bg-33.jpeg')) {
      document.getElementById('SLIDE_BG').style.backgroundImage="url(img/header-bg-11.jpeg)";
    }
  }
};