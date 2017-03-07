
/*------------------------------------*\\
  CONTENTS
\\*------------------------------------*/

/*
GENERAL   HTML, BODY, etc.
SHARED    Share anything we can across blocks.
HEADER
MAIN
  sub_block
  sub_block
FOOTER
NOTES
RESET
*/

// SMOOTH DIV SCROLL
// CAROUSEL
// COUNTER
// SLIDER
// COUNTDOWN
// FEATURES-EXPAND
// PARALLAX for tree

/* ================================================
   templates
   ================================================ */





  /* отрабатывать только для определенной страницы
    ================================================ */
  // (function($) {
  //  if($('body').is('.page-home')){
  //    var a = "initial_template";
  //  }
  // })(jQuery); // eof autoFunction
  /* eof ^^^ */





  /* отрабатывать
    ================================================ */
  // (function() {
  //   var a = "initial_template";
  // })(); // eof autoFunction
  /* eof ^^^ */




  /* Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute. Code included inside $( window ).load(function() { ... }) will run once the entire page (images or iframes), not just the DOM, is ready.
    https://learn.jquery.com/using-jquery-core/document-ready/
    https://www.sitepoint.com/types-document-ready/
    ================================================ */
  // $( document ).ready(function() {
  //   var a = "initial_template";
  // }); // eof .ready
  /* eof ^^^ */





  /* ================================================
     Блок_комментариев_для_раздела $ MAIN
     ================================================ */

  /* === eof $ MAIN == */

  /* Блок_комментариев_для_подраздела
     ================================================ */

  /*
   * Блок_комментариев_для_группы_правил.
   * Хорошо_подходит_для_подробных_пояснений_и_документации.
   */

  /* Обычный_комментарий */






/* == eof $ MAIN == */



// smooth div scroll


$(document).ready(function() {

	 if($('body').is('.page-index')){
		 $("#makeMeScrollable").smoothDivScroll({
				//  mousewheelScrolling: "allDirections",
				//  manualContinuousScrolling: true,
				//  autoScrollingMode: "onStart"
				mousewheelScrolling: true,
				manualContinuousScrolling: true,
				visibleHotSpotBackgrounds: "always",
				autoScrollingMode: "always"
		 });
	 }

});

// smooth div scroll end



















// parallax END



// rainy

// var ctx = document.getElementById('title').getContext("2d");
//
// // Draw black rectangle
// ctx.fillStyle = "white";
// ctx.fillRect(0, 0, 846, 480);
// ctx.font = 'italic 900 270px "Exo 2"';
//
// // Punch out the text!
// ctx.globalCompositeOperation = 'destination-out';
// ctx.fillText("Rainy", 40, 380);

// rainy END



// smooth gallery

$(document).ready(function() {

  if($('body').is('.page-index')){
		$("#gallery-smooth").smoothDivScroll({
      // mousewheelScrolling: "allDirections",
      // manualContinuousScrolling: false,

      // autoScrollingMode: "onStart",
        // autoScrollingMode: "always",
        // hotSpotScrolling: false,
        // touchScrolling: true,
        // manualContinuousScrolling: true,
      // hotSpotScrollingStep: 3,
      // hotSpotScrollingInterval: 2,
      // autoScrollingStep: 1, SPPED
        // mousewheelScrolling: false
			mousewheelScrolling: true,
			manualContinuousScrolling: true,
			visibleHotSpotBackgrounds: "always",
			autoScrollingMode: "always"
		});


	// This is just to make the scroller pause...
		// Mouse over
		$("#gallery-smooth").bind("mouseover", function(){
				$("#gallery-smooth").smoothDivScroll("stopAutoScrolling");
		});

		// Mouse out
    if($('.fancybox-opened').length === 0) {
      $("#gallery-smooth").bind("mouseout", function(){
          $("#gallery-smooth").smoothDivScroll("startAutoScrolling");
      });
    }

    $('.page-index').on('mouseover', '.fancybox-opened, .fancybox-overlay', function(){
          $("#gallery-smooth").smoothDivScroll("stopAutoScrolling");
    });


		// fancy box for this gallery
		$("#gallery-smooth a.gallery__full").fancybox({
      // Prevent fancybox from causing page to to jump to the top
      helpers: {
        overlay: {
          locked: false
        }
      }
		});
		$("#gallery-smooth a.gallery__full").fancybox({
      // continue smoothDivScroll scrolling after closing opened fancybox popup
      afterClose: function() {
        $("#gallery-smooth").smoothDivScroll("startAutoScrolling");
      }

		});



		// fancy box for this gallery END
	}

  if($('body').is('.page-cottages')){
		$("#gallery-smooth").smoothDivScroll({
			mousewheelScrolling: true,
			manualContinuousScrolling: true,
			visibleHotSpotBackgrounds: "always",
			autoScrollingMode: "always"
		});


	// This is just to make the scroller pause...
		// Mouse over
		$("#gallery-smooth").bind("mouseover", function(){
				$("#gallery-smooth").smoothDivScroll("stopAutoScrolling");
		});

		// Mouse out
    if($('.fancybox-opened').length === 0) {
      $("#gallery-smooth").bind("mouseout", function(){
          $("#gallery-smooth").smoothDivScroll("startAutoScrolling");
      });
    }

    $('.page-cottages').on('mouseover', '.fancybox-opened, .fancybox-overlay', function(){
          $("#gallery-smooth").smoothDivScroll("stopAutoScrolling");
    });


		// fancy box for this gallery
		$("#gallery-smooth a.gallery__full").fancybox({
      // Prevent fancybox from causing page to to jump to the top
      helpers: {
        overlay: {
          locked: false
        }
      }
		});
		$("#gallery-smooth a.gallery__full").fancybox({
      // continue smoothDivScroll scrolling after closing opened fancybox popup
      afterClose: function() {
        $("#gallery-smooth").smoothDivScroll("startAutoScrolling");
      }

		});



		// fancy box for this gallery END
	}

});

// smooth gallery END


// fitments smooth gallery

$(document).ready(function() {

  if($('body').is('.page-fitments')){
		$("#gallery-smooth").smoothDivScroll({
			mousewheelScrolling: true,
			manualContinuousScrolling: true,
			visibleHotSpotBackgrounds: "always",
			autoScrollingMode: "always"
		});


	// This is just to make the scroller pause...
		// Mouse over
		$("#gallery-smooth").bind("mouseover", function(){
				$("#gallery-smooth").smoothDivScroll("stopAutoScrolling");
		});

		// Mouse out
    if($('.fancybox-opened').length === 0) {
      $("#gallery-smooth").bind("mouseout", function(){
          $("#gallery-smooth").smoothDivScroll("startAutoScrolling");
      });
    }

    $('.page-fitments').on('mouseover', '.fancybox-opened, .fancybox-overlay', function(){
          $("#gallery-smooth").smoothDivScroll("stopAutoScrolling");
    });


		// fancy box for this gallery
		$("#gallery-smooth a.gallery__full").fancybox({
      // Prevent fancybox from causing page to to jump to the top
      helpers: {
        overlay: {
          locked: false
        }
      }
		});
		$("#gallery-smooth a.gallery__full").fancybox({
      // continue smoothDivScroll scrolling after closing opened fancybox popup
      afterClose: function() {
        $("#gallery-smooth").smoothDivScroll("startAutoScrolling");
      }

		});



		// fancy box for this gallery END
	}

});

// fitments smooth gallery END

// fitments smooth gallery

$(document).ready(function() {

	if($('body').is('.page-fitments')){
		$("#gallery-handle-smooth").smoothDivScroll({
			mousewheelScrolling: true,
			manualContinuousScrolling: true,
			visibleHotSpotBackgrounds: "always",
			autoScrollingMode: "always"
		});


	// This is just to make the scroller pause...
		// Mouse over
		$("#gallery-handle-smooth").bind("mouseover", function(){
				$("#gallery-handle-smooth").smoothDivScroll("stopAutoScrolling");
		});

		// Mouse out
    if($('.fancybox-opened').length === 0) {
      $("#gallery-handle-smooth").bind("mouseout", function(){
          $("#gallery-handle-smooth").smoothDivScroll("startAutoScrolling");
      });
    }

    $('.page-fitments').on('mouseover', '.fancybox-opened, .fancybox-overlay', function(){
          $("#gallery-handle-smooth").smoothDivScroll("stopAutoScrolling");
    });


		// fancy box for this gallery
		$("#gallery-handle-smooth a.gallery__full").fancybox({
      // Prevent fancybox from causing page to to jump to the top
      helpers: {
        overlay: {
          locked: false
        }
      }
		});
		$("#gallery-handle-smooth a.gallery__full").fancybox({
      // continue smoothDivScroll scrolling after closing opened fancybox popup
      afterClose: function() {
        $("#gallery-handle-smooth").smoothDivScroll("startAutoScrolling");
      }

		});



		// fancy box for this gallery END
	}

});

// fitments smooth gallery END



// tabs for page-windsystem::choose module

$(document).ready(function() {
	if($('body').is('.page-window-systems')){
	  if ((window.matchMedia("(min-width: 1360px)").matches)) {



      /* ================================================
      li[data-pos].click
      ================================================ */
      $('li[data-pos]').click(function(e) {
        e.stopPropagation();

        // if ($(this).parents('.choose-menu__item').is('.active'))
        if ($(this).is('.active')) {
          // removing classes before assigning active for recently clicked
          $('.choose-menu__item').siblings().removeClass('active');
          $('.choose-menu__subitem').siblings().removeClass('active');
          // сворачиваем все модули, кроме текущего
          $('.desktop-menu .choose-menu__sublist').not($(this)).slideUp(200);


        } else {
          // removing classes before assigning active for recently clicked
          $('.choose-menu__item').siblings().removeClass('active');
          $('.choose-menu__subitem').siblings().removeClass('active');

          $(this).addClass('active');
          $(this).find('.choose-menu__subitem:first').addClass("active").trigger( "click" );
          $(this).parents('.choose-menu__item').addClass('active');

          $('.desktop-menu .choose-menu__sublist').not($(this)).slideUp(200);



          $('.choose-menu__sublist', this).slideDown(300, function() {
            // $('.choose-menu__sublist').not($('.choose-menu__sublist', this)).slideUp(300);
            // $('.choose-menu__sublist').not($(this)).slideUp(200);
          });


          // changing tabs' content
            // $('.jsFaqItem #' + $(this).attr('data-pos')).fadeIn(0).siblings().fadeOut(0);
          $('.js-item-content').fadeOut(0);
          $('.jsFaqItem').next('#' + $(this).attr('data-pos')).fadeIn(0);


          $(this).siblings().removeClass('active');

        }
      }); /* === eof li[data-pos].click == */




      /* ================================================
      .js-tabs li[data-id].click
      ================================================ */
      $('.js-tabs li[data-id]').click(function(e) {
        e.stopPropagation();

        // console.log($(this));
        if ($(this).hasClass('active')) {
            return;
        }

        // changing tabs' content
        // $('#' + $(this).attr('data-id')).fadeIn(0).siblings().fadeOut(0);
         // $('.jsFaqItem').fadeOut(0);
         // .siblings().fadeOut(0);
        // $(this).siblings().removeClass('active');
        $('.choose-content__wrapper').fadeOut(0);

                                        //  console.log('hidden node: ' + $(this).attr('data-id'));
         $('#' + $(this).attr('data-id')).fadeIn(0);

        // removing classes before assigning active for recently clicked
        $('.choose-menu__item').siblings().removeClass('active');
        $('.choose-menu__subitem').siblings().removeClass('active');
        $('.choose-menu__subitem:first').removeClass('active');

        // assigning class 'active' for clicked item
        $(this).addClass('active');

        $(this).parents('.choose-menu__item').addClass('active');

      }); /* === eof li[data-pos].click == */




		} // eof matchMedia
	}		// eof ('body').is
}); // eof document READY


// FOR TABLET CODE IS HERE ! ! !
// ##### задача привязать открывающийся пункт к определенному контен
// windsystems choose block for tablet and above
$(document).ready(function() {
	if($('body').is('.page-window-systems')){
    if ((window.matchMedia("(max-width: 1359px)").matches)) {



      /* ================================================
      li[data-pos].click
      ================================================ */
      if ($(".tablet-related-content .choose-menu__sublist.transform").length) {
        $('.choose-menu__item.transform[data-pos]').click(function(e) {
          e.stopPropagation();


          if ($(this).is('.active')) {
            // console.log('triggers "if"');
            // removing classes before assigning active for recently clicked
            $('.choose-menu__item.transform').siblings().removeClass('active');
            $(this).find('.jsFaqItem').removeClass('active');
            // сворачиваем все модули, кроме текущего
            $(this).find('.choose-menu__sublist').slideUp(200);

              // close sub items:
              // 1st . remove active calss from the LINK
              $('li[data-id].jsFaqItem .t-link').removeClass('active');
              // remove shown content of clicked item with the hekp of slideUp:
              $('li[data-id].jsFaqItem .t-link').siblings('.js-item-content').slideUp(200);
              // 2d .- remove active class from parent, if we clicked another parents child;
              $('li[data-id].jsFaqItem .t-link').closest('.jsFaqItem').removeClass('active');

              $('li[data-id].jsFaqItem .t-link').closest('.choose-menu__item.transform').removeClass('active');
              // eof ^

          } else {
            // console.log('triggers "else"');
            // removing classes before assigning active for recently clicked

            // $('.choose-menu__item').siblings().removeClass('active');
            // $('.choose-menu__subitem').siblings().removeClass('active');

            $(this).addClass('active');
            $(this).find('.jsFaqItem:first .t-link').addClass('active');
            $(this).siblings().removeClass('active');
            $(this).siblings().find('.js-item-content').slideUp(200);
            $(this).siblings().find('.choose-menu__sublist').slideUp(200);
            $(this).siblings().find('.jsFaqItem').removeClass('active');



            $(this).find('.choose-menu__sublist').slideDown(200);
            // $(this).find('.choose-menu__sublist .jsFaqItem:first').addClass("active").trigger( "click" );
            $(this).find('.choose-menu__sublist .jsFaqItem:first').addClass("active");
            // $(this).parents('.choose-menu__item').addClass('active');

            $(this).find('.js-item-content:first').slideDown(200);
          }


        });
      }
      /* === eof li[data-pos].click == */


      /* ================================================
      li[data-pos].click
      ================================================ */
      $('li[data-id].jsFaqItem .t-link').click(function(e) {
        e.stopPropagation();

        // if THE LINK has active class, do the following:
        if ($(this).hasClass('active')) {


            // 1st . remove active calss from the LINK
            $(this).removeClass('active');
            // remove shown content of clicked item with the hekp of slideUp:
            $(this).closest('.jsFaqItem').siblings('.js-item-content').slideUp(200);
            // 2d .- remove active class from parent, if we clicked another parents child;
            $('.jsFaqItem').removeClass('active');
            $(this).closest('.jsFaqItem').removeClass('active');

            // $(this).closest('.choose-menu__item.transform').removeClass('active');

        } else {

          // at first, slide UP all the other items:

          // 4 sliding
            $('.jsFaqItem').next().each(function(){
                $(this).slideUp(200);
            });

          // 4 item link
          $('.t-link').removeClass('active');
          $('.jsFaqItem').removeClass('active');
          $('.choose-menu__item.transform').removeClass('active');

          // 4 for item essence

          // 4 for item parent, IF NEEDED

          $(this).closest('.jsFaqItem').next().slideDown(200);
          $(this).addClass('active');
          $(this).closest('.jsFaqItem').addClass('active');
          $(this).closest('.choose-menu__item.transform').addClass('active');


        }
      });
      /* === eof li[data-pos].click == */


      /* ================================================
      stop propagation for child elements
      ================================================ */
      $('.choose-menu__item .js-item-content').click(function(e) {
        e.stopPropagation();
      });
      /* === eof stop propagation for child elements == */



    } // eof matchMedia
  } // eof body.is
}); // eof ready

// tabs for page-windsystem::choose module END



// tabs for page-glass-unit::type module

$(document).ready(function() {

	if($('body').is('.page-glass-unit')){


		$('.js-tabs li[data-id]').click(function() {
				// console.log($(this));
				if ($(this).hasClass('active')) {
						return;
				}

				$('.wide-related-content #' + $(this).attr('data-id')).fadeIn(0).siblings().fadeOut(0);
				$(this).siblings().removeClass('active');
				$(this).addClass('active');
		});

	}

});

// tabs for page-glass-unit::type module END



// tabs for page-accessories::type module

$(document).ready(function() {

	if($('body').is('.page-accessories')){


		$('.js-tabs li[data-id]').click(function() {
				// console.log($(this));
				if ($(this).hasClass('active')) {
						return;
				}

				$('.wide-related-content #' + $(this).attr('data-id')).fadeIn(0).siblings().fadeOut(0);
				$(this).siblings().removeClass('active');
				$(this).addClass('active');
		});

	}

});

// tabs for page-accessories::type module END



// page-window-systems COLORS slider

$( document ).ready(function() {

	if($('body').is('.page-window-systems')){
		$("ul#choose-colors").bxSlider({
		    speed: 300,
		    nextText: '',
		    prevText: '',
				slideWidth: 40,
				minSlides: 1,
				maxSlides: 4,
				moveSlides: 1,
				slideMargin: 20,
				pager: false,
				prevSelector: ('.choose__colors-controls__left'),
				nextSelector: ('.choose__colors-controls__right')
		    //  onSlideBefore:function($slideElement, oldIndex, newIndex){
		    //    changeRealThumb(realThumbSlider,newIndex);
		    //
		    //  }
		});
	}

}); // eof .ready

// page-window-systems COLORS slider END


//  page-window-systems fancybox for awards

if($('body').is('.page-window-systems')){

	$("a.gallery__full").fancybox({

		// Prevent fancybox from causing page to to jump to the top
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

}

//  page-window-systems fancybox for awards END




// main modal

if($('body').is('.page-index')){

	showMainModal();

	closeMainModal();

	hideMainOverlay();


	$('html body').on('keyup', function(e) {
		if (e.keyCode === 27) {
				$('.modal-content').fadeOut(300);
				$('.modal-index-overlay').fadeOut(300);
		}
  });

}

function showMainModal() {
    $('.request-callback').click(function() {
        $('.modal-content').fadeIn(300);
        $('.modal-index-overlay').fadeIn(300);
    });
}

function closeMainModal() {
    $('.modal-content-close').click(function() {
        $('.modal-content').fadeOut(300);
        $('.modal-index-overlay').fadeOut(300);
    });
}

function hideMainOverlay() {
    $('.modal-index-overlay').click(function() {
        $('.modal-content').fadeOut(300);
        $('.modal-index-overlay').fadeOut(300);
    });
}


// main modal eof



// external js: masonry.pkgd.js

// $('.grid').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: 160
// });

// external js: masonry.pkgd.js EOF


/* change window text
	================================================ */

(function($) {

 if($('body').is('.page-index')){

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





(function($) {
 if($('body').is('.page-index')){
	 $("[data-fancybox]").fancybox({
	 	// Options will go here
	 });
 }
})(jQuery); // eof autoFunction
/* eof ^^^ */


// tabs for page-windsystem::choose module

$(document).ready(function() {
	if($('body').is('.page-index')){
	  if ((window.matchMedia("(min-width: 1360px)").matches)) {



      /* ================================================
      li[data-pos].click
      ================================================ */
      $('li[data-pos]').click(function(e) {
        e.stopPropagation();

        // if ($(this).parents('.choose-menu__item').is('.active'))
        if ($(this).is('.active')) {
          // removing classes before assigning active for recently clicked
          $('.choose-menu__item').siblings().removeClass('active');
          $('.choose-menu__subitem').siblings().removeClass('active');
          // сворачиваем все модули, кроме текущего
          $('.desktop-menu .choose-menu__sublist').not($(this)).slideUp(200);


        } else {
          // removing classes before assigning active for recently clicked
          $('.choose-menu__item').siblings().removeClass('active');
          $('.choose-menu__subitem').siblings().removeClass('active');

          $(this).addClass('active');
          $(this).find('.choose-menu__subitem:first').addClass("active").trigger( "click" );
          $(this).parents('.choose-menu__item').addClass('active');

          $('.desktop-menu .choose-menu__sublist').not($(this)).slideUp(200);



          $('.choose-menu__sublist', this).slideDown(300, function() {
            // $('.choose-menu__sublist').not($('.choose-menu__sublist', this)).slideUp(300);
            // $('.choose-menu__sublist').not($(this)).slideUp(200);
          });


          // changing tabs' content
            // $('.jsFaqItem #' + $(this).attr('data-pos')).fadeIn(0).siblings().fadeOut(0);
          $('.js-item-content').fadeOut(0);
          $('.jsFaqItem').next('#' + $(this).attr('data-pos')).fadeIn(0);


          $(this).siblings().removeClass('active');

        }
      }); /* === eof li[data-pos].click == */




      /* ================================================
      .js-tabs li[data-id].click
      ================================================ */
      $('.js-tabs li[data-id]').click(function(e) {
        e.stopPropagation();

        // console.log($(this));
        if ($(this).hasClass('active')) {
            return;
        }

        // changing tabs' content
        // $('#' + $(this).attr('data-id')).fadeIn(0).siblings().fadeOut(0);
         // $('.jsFaqItem').fadeOut(0);
         // .siblings().fadeOut(0);
        // $(this).siblings().removeClass('active');
        $('.choose-content__wrapper').fadeOut(0);

                                        //  console.log('hidden node: ' + $(this).attr('data-id'));
         $('#' + $(this).attr('data-id')).fadeIn(0);

        // removing classes before assigning active for recently clicked
        $('.choose-menu__item').siblings().removeClass('active');
        $('.choose-menu__subitem').siblings().removeClass('active');
        $('.choose-menu__subitem:first').removeClass('active');

        // assigning class 'active' for clicked item
        $(this).addClass('active');

        $(this).parents('.choose-menu__item').addClass('active');

      }); /* === eof li[data-pos].click == */




		} // eof matchMedia
	}		// eof ('body').is
}); // eof document READY


// FOR TABLET CODE IS HERE ! ! !
// ##### задача привязать открывающийся пункт к определенному контен
// windsystems choose block for tablet and above
$(document).ready(function() {
	if($('body').is('.page-index')){
    if ((window.matchMedia("(max-width: 1359px)").matches)) {



      /* ================================================
      li[data-pos].click
      ================================================ */
      if ($(".tablet-related-content .choose-menu__sublist.transform").length) {
        $('.choose-menu__item.transform[data-pos]').click(function(e) {
          e.stopPropagation();


          if ($(this).is('.active')) {
            // console.log('triggers "if"');
            // removing classes before assigning active for recently clicked
            $('.choose-menu__item.transform').siblings().removeClass('active');
            $(this).find('.jsFaqItem').removeClass('active');
            // сворачиваем все модули, кроме текущего
            $(this).find('.choose-menu__sublist').slideUp(200);

              // close sub items:
              // 1st . remove active calss from the LINK
              $('li[data-id].jsFaqItem .t-link').removeClass('active');
              // remove shown content of clicked item with the hekp of slideUp:
              $('li[data-id].jsFaqItem .t-link').siblings('.js-item-content').slideUp(200);
              // 2d .- remove active class from parent, if we clicked another parents child;
              $('li[data-id].jsFaqItem .t-link').closest('.jsFaqItem').removeClass('active');

              $('li[data-id].jsFaqItem .t-link').closest('.choose-menu__item.transform').removeClass('active');
              // eof ^

          } else {
            // console.log('triggers "else"');
            // removing classes before assigning active for recently clicked

            // $('.choose-menu__item').siblings().removeClass('active');
            // $('.choose-menu__subitem').siblings().removeClass('active');

            $(this).addClass('active');
            $(this).find('.jsFaqItem:first .t-link').addClass('active');
            $(this).siblings().removeClass('active');
            $(this).siblings().find('.js-item-content').slideUp(200);
            $(this).siblings().find('.choose-menu__sublist').slideUp(200);
            $(this).siblings().find('.jsFaqItem').removeClass('active');



            $(this).find('.choose-menu__sublist').slideDown(200);
            // $(this).find('.choose-menu__sublist .jsFaqItem:first').addClass("active").trigger( "click" );
            $(this).find('.choose-menu__sublist .jsFaqItem:first').addClass("active");
            // $(this).parents('.choose-menu__item').addClass('active');

            $(this).find('.js-item-content:first').slideDown(200);
          }


        });
      }
      /* === eof li[data-pos].click == */


      /* ================================================
      li[data-pos].click
      ================================================ */
      $('li[data-id].jsFaqItem .t-link').click(function(e) {
        e.stopPropagation();

        // if THE LINK has active class, do the following:
        if ($(this).hasClass('active')) {


            // 1st . remove active calss from the LINK
            $(this).removeClass('active');
            // remove shown content of clicked item with the hekp of slideUp:
            $(this).closest('.jsFaqItem').siblings('.js-item-content').slideUp(200);
            // 2d .- remove active class from parent, if we clicked another parents child;
            $('.jsFaqItem').removeClass('active');
            $(this).closest('.jsFaqItem').removeClass('active');

            // $(this).closest('.choose-menu__item.transform').removeClass('active');

        } else {

          // at first, slide UP all the other items:

          // 4 sliding
            $('.jsFaqItem').next().each(function(){
                $(this).slideUp(200);
            });

          // 4 item link
          $('.t-link').removeClass('active');
          $('.jsFaqItem').removeClass('active');
          $('.choose-menu__item.transform').removeClass('active');

          // 4 for item essence

          // 4 for item parent, IF NEEDED

          $(this).closest('.jsFaqItem').next().slideDown(200);
          $(this).addClass('active');
          $(this).closest('.jsFaqItem').addClass('active');
          $(this).closest('.choose-menu__item.transform').addClass('active');


        }
      });
      /* === eof li[data-pos].click == */


      /* ================================================
      stop propagation for child elements
      ================================================ */
      $('.choose-menu__item .js-item-content').click(function(e) {
        e.stopPropagation();
      });
      /* === eof stop propagation for child elements == */



    } // eof matchMedia
  } // eof body.is
}); // eof ready

// tabs for page-windsystem::choose module END
