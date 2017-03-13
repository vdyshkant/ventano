
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


(function($) {
 if($('body').is('.page-index')){
	 $("[data-fancybox]").fancybox({
	 	// Options will go here
	 });
 }
})(jQuery); // eof autoFunction
/* eof ^^^ */



// smooth gallery

// smooth gallery END
$(document).ready(function() {
    $("#gallery-smooth").smoothDivScroll({
        autoScrollingMode: "always"
    });
});
