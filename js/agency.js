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
      if (document.documentElement.scrollTop > 110)  {
        document.getElementById("mainNav").style.top = "-100px";
      }
      if (document.documentElement.scrollTop < 100)  {
        document.getElementById("mainNav").style.top = "0px";
      }
      if (document.documentElement.scrollTop > 180)  {
        $("#mainNav").addClass("navbar-shrink");
        $("#mainNav").addClass("fixed-top");
        document.getElementById("mainNav").style.position = "";
        document.getElementById("container-announcement").style.display = "none";
        document.getElementById("mainNav").style.top = "0px";
        $(".logo-hidden").addClass("logo-display");
        $(".nav-link").addClass("nav-link-scroll");
        $(".line-navbar").addClass("nav-link-scroll");
        $(".nav-item-hide").addClass("nav-item-show");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
        $("#mainNav").removeClass("fixed-top");
        document.getElementById("mainNav").style.position = "absolute";
        document.getElementById("container-announcement").style.display = "inline";
        $(".logo-hidden").removeClass("logo-display");
        $(".nav-link").removeClass("nav-link-scroll");
        $(".line-navbar").removeClass("nav-link-scroll");
        $(".nav-item-hide").removeClass("nav-item-show");
      }
    } else {
      $(".nav-item-show").addClass("nav-item-hide");
      $("#mainNav").addClass("fixed-top");
      document.getElementById("mainNav").style.position = "";
      if (document.documentElement.scrollTop > 180)  {
        document.getElementById("container-announcement").style.display = "none";
      } else {
        document.getElementById("container-announcement").style.display = "inline";
      }

    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict



// COOKIE ALERT

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function cookieConsent() {
  if (!getCookie('allowCookies')) {
    $('.toast').toast('show');
  }
}

$('#btnDeny').click(()=>{
    eraseCookie('allowCookies')
    $('.toast').toast('hide')
})

$('#btnAccept').click(()=>{
    setCookie('allowCookies','1',7)
    $('.toast').toast('hide')
})

// load
cookieConsent()



