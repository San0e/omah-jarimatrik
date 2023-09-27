(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

//waktunya belajar
(function(d) {

  var clockElements = makeClockElements(

    'b', 'span', 'span', 'i', 'i', 'i'

  );

  function makeClockElements(tags) {

    var

      clock = d.getElementById('clock'),

      result = [];

    for (var i = 0; tagName = arguments[i]; i++) {

      var element = clock.appendChild(d.createElement(tagName));

      if (tagName === 'i') result.push(element);

    }

    return result;

  }

  function clockUpdate() {

    var now = new Date();

    clockElements[0].style.transform = 'rotate(' + (

      now.getHours() * 30 + (Math.floor(now.getMinutes() / 12) * 6)

    ) + 'deg)';

    clockElements[1].style.transform = 'rotate(' + (

      now.getMinutes() * 6

    ) + 'deg)';

    clockElements[2].style.transform = 'rotate(' + (

      now.getSeconds() * 6

    ) + 'deg)';

  }

  clockUpdate();

  setInterval(clockUpdate, 1000);

})(document);	

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


   
	(function init() {
	  function getTimeRemaining(endtime) {
	    var t = Date.parse(endtime) - Date.parse(new Date());
	    var seconds = Math.floor((t / 1000) % 60);
	    var minutes = Math.floor((t / 1000 / 60) % 60);
	    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	    var days = Math.floor(t / (1000 * 60 * 60 * 24));
	    return {
	      'total': t,
	      'days': days,
	      'hours': hours,
	      'minutes': minutes,
	      'seconds': seconds
	    };
	  }
	  
	  function initializeClock(endtime){
	  var timeinterval = setInterval(function(){
	    var t = getTimeRemaining(endtime);
	    document.querySelector(".days > .value").innerText=t.days;
	    document.querySelector(".hours > .value").innerText=t.hours;
	    document.querySelector(".minutes > .value").innerText=t.minutes;
	    document.querySelector(".seconds > .value").innerText=t.seconds;
	    if(t.total<=0){
	      clearInterval(timeinterval);
	    }
	  },1000);
	}
	initializeClock(((new Date()).getFullYear()+1) + "/1/1")
	})()
    	
	
	
})(jQuery);

