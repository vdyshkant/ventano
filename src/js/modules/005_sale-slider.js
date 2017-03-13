// slider

// $( document ).ready(function() {
$(window).load(function() {

	if($('body').is('.page-index')){
		if($('section').is('.slider-sales')){
      $("ul#slider1").bxSlider({
          // http://stackoverflow.com/a/20342392
          // BxSlider displayes last slide as first slide | dublicating ids

  		    speed: 300,
  		    pager: true,
  		    nextText: '',
  		    prevText: '',
  				prevSelector: ('.slider-sales-controls__left'),
  				nextSelector: ('.slider-sales-controls__right'),

          // looping
  					        // auto: true,
  					        // infiniteLoop: true,
  					        // pause: 5000
  		    //  onSlideBefore:function($slideElement, oldIndex, newIndex){
  		    //    changeRealThumb(realThumbSlider,newIndex);
  		    //
  		    //  }

  		});


    	$('.slider-sales .range').mouseenter(function() {
    		$('.slider-sales-controls').fadeIn(300);

    			// console.info('.nextend-arrow).fade IN;');

    	}).mouseleave(function() {
    			$('.slider-sales-controls').fadeOut(300);

    			// console.info('.nextend-arrow).fade OUT;');

    	});
		}
    // // get the children behind
    // var $prependedChildren = getArraySample($children, 0, options.moveSlideQty, 'backward');
    //
    // // add each prepended child to the back of the original element
    // $.each($prependedChildren, function(index) {
    //     $parent.prepend($(this));
    // });
	}

}); // eof .ready

// slider end
