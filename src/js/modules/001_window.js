// external js: masonry.pkgd.js

// $('.grid').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: 160
// });

// external js: masonry.pkgd.js EOF


/* change window text (window block)
	================================================ */

(function($) {

  if($('body').is('.page-index')){

    if($('section').is('.window')){
      //  new machMedia resizer; the fastest one
      //  change text on resize event.
      var mq  = window.matchMedia( '(max-width: 1159px)' );
      mq.addListener(function(mq) {
         if (mq.matches) {
           change2newString();
         } else {
           change2originString();
         }
      });

      // instant change text on mobile-tablet hw.
      if ($(window).width() < 1160) {
          change2newString();
      }
    }
  }
})(jQuery); // eof autoFunction




function change2newString(){
  var string = 'Официальный партнёр';
  $('.window-esscence-overtitle-text').text(string);
}
function change2originString(){
  var origin = 'Авторизированный партнёр';
  $('.window-esscence-overtitle-text').text(origin);
}
/* eof ^^^ */
