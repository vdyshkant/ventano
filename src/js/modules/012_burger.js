
/* отрабатывать только для определенной страницы
	================================================ */
(function($) {
 if($('body').is('.page-index')){

   if($('section').is('.floating')){

     // burger animation itself:
  	 $('.banner--clone .floating-burger-btn #click').click(function() {
  			 $('.banner--clone .floating-burger-btn').toggleClass("burger-active");
  			 $('.floating-burger-overlay').fadeToggle(200, 'linear');
  			//  $('.floating-burger-essence').slideToggle(200, 'easeInOutCubic');
  			 $('.banner--clone .floating-burger-essence').toggleClass('opened');
  	 });

     $('.floating-burger-overlay').click(function() {
  			$('.banner--clone .floating-burger-btn').removeClass("burger-active");
        $('.banner--clone .floating-burger-btn #click').attr('checked', false);
        if ((window.matchMedia("(max-width: 1159px)").matches)) {
          $('.floating-burger-overlay').fadeOut(200, 'linear');
        }
  			$('.banner--clone .floating-burger-essence').removeClass('opened');
  	 });

   }

 }
})(jQuery); // eof autoFunction
/* eof ^^^ */

// burger:
