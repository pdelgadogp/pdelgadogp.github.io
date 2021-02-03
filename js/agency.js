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
    if (document.body.offsetWidth > 992) {
      if ($("#mainNav").offset().top > 0)  {
        $("#mainNav").addClass("navbar-shrink");
        $(".logo-hidden").addClass("logo-display");
        $(".nav-link").addClass("nav-link-scroll");
        $(".line-navbar").addClass("nav-link-scroll");
        $(".nav-item-hide").addClass("nav-item-show");
        //document.getElementById('myImage').src='img/logos/Isotipo-landing-web-2.png'
        document.getElementById('myImage').src='img/logos/Logo-Blanco-pequeñorosa.png'
      } else {
        $("#mainNav").removeClass("navbar-shrink");
        $(".logo-hidden").removeClass("logo-display");
        $(".nav-link").removeClass("nav-link-scroll");
        $(".line-navbar").removeClass("nav-link-scroll");
        $(".nav-item-hide").removeClass("nav-item-show");
        //document.getElementById('myImage').src='img/logos/Isotipo-landing-web-2blanco.png'
        document.getElementById('myImage').src='img/logos/Logo-Blanco-pequeñorosa.png'
      }
    } else {
      $(".nav-item-show").addClass("nav-item-hide");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict


/*var changeBackground = function(opt) {
  var img = document.getElementById('SLIDE_BG');
  var style = img.currentStyle || window.getComputedStyle(img, false);
  var bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
  if (opt == 1) {
    if (bi.includes('header-bg-11.jpeg')) {
      document.getElementById('SLIDE_BG').style.backgroundImage="url(img/index/header-bg-44.jpeg)";
    } else if (bi.includes('header-bg-22.jpeg')) {
      document.getElementById('SLIDE_BG').style.backgroundImage="url(img/index/header-bg-11.jpeg)";
    } else if (bi.includes('header-bg-33.jpeg')) {
      document.getElementById('SLIDE_BG').style.backgroundImage="url(img/index/header-bg-22.jpeg)";
    } else if (bi.includes('header-bg-44.jpeg')) {
      document.getElementById('SLIDE_BG').style.backgroundImage="url(img/index/header-bg-33.jpeg)";
    }

  } else {
    if (bi.includes('header-bg-11.jpeg')) {
      document.getElementById('SLIDE_BG').style.backgroundImage="url(img/index/header-bg-22.jpeg)";
    } else if (bi.includes('header-bg-22.jpeg')) {
      document.getElementById('SLIDE_BG').style.backgroundImage="url(img/index/header-bg-33.jpeg)";
    } else if (bi.includes('header-bg-33.jpeg')) {
      document.getElementById('SLIDE_BG').style.backgroundImage="url(img/index/header-bg-44.jpeg)";
    } else if (bi.includes('header-bg-44.jpeg')) {
      document.getElementById('SLIDE_BG').style.backgroundImage="url(img/index/header-bg-11.jpeg)";
    }
  }
};

// Will execute myCallback every 0.5 seconds 
var intervalID = window.setInterval(changeBackground, 10000);*/

/*function myCallback() {
 // Your code here
}*/