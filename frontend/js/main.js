
$(document).ready(function() {


	
	const homeSliderswiper = new Swiper('.homeSlider', {
		slidesPerView:1,
		spaceBetween:0,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		  },
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		 },
		 pagination: {
			el: ".swiper-pagination",
			clickable: true,
		  },

	});
	
	const quotessliderswiper = new Swiper('.quotesslider', {
		slidesPerView:1,
		spaceBetween:0,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		  },
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		 },

	});

	const homeVideosliderswiper = new Swiper('.homeVideoslider', {
		slidesPerView:3,
		spaceBetween:15,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		  },
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		 },
		 // Breakpoints
		breakpoints: {
			// when window width is >= 320px
			480: {
				slidesPerView: 1,
			},
			767: {
				slidesPerView: 2,
			},
			// when window width is >= 480px
			991: {
				slidesPerView: 3,
			},
		}

	});

	const couressliderswiper = new Swiper('.couresslider', {
		spaceBetween:15,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		  },
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		 },

		 // Breakpoints
		breakpoints: {
			// when window width is >= 320px
			480: {
				slidesPerView: 1,
			},
			767: {
				slidesPerView: 2,
			},
			// when window width is >= 480px
			991: {
				slidesPerView: 3,
			},
			1080: {
				slidesPerView: 4,
			},
			// when window width is >= 1150px
			1300: {
				slidesPerView:5,
			}
		}

	});

	var swiper = new Swiper(".dailynews", {
		slidesPerView:3,
        direction: 'vertical',
		loop: true,
		scrollbar: { el: '.swiper-scrollbar' },
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		},
      });

	  var swiperdailyevents = new Swiper(".dailyevents", {
		slidesPerView:3,
        direction: 'vertical',
		loop: true,
		scrollbar: { el: '.swiper-scrollbar' },
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		},
      });


	//tilt
	const tilt = $('.js-tilt').tilt()
	tilt.on('change', function(e, transforms){});

	/* For responsiveness menu */
	$('nav .burger').click(function(){
		$(this).toggleClass('active');
		$('.burger_menu').slideToggle();
		$('body').toggleClass('menu-visible');
		return false;
	});
	

	//alert($('.quotesslider').height());
	//equal height
	
	  

});
$( window ).resize(function() {
	vheight = $('.quotessliderwrp .swiper').height();
	$('.videowrap-card iframe').height(vheight);
})