
// CAROUSEL


/* miniFAQ:

проверить главный класс, установленный для родительского блока section
if на странице несколько одинаковых каруселей,
  меняем id слайдера: #carousel -- как в pug, так и в js,
  плюс !! чекаем стили в scss по этому id (его нужно поменять, если на стр. 2 карусели)


*/





// wide ver
$(document).ready(function() {
	if($('body').is('.page-index')){
	  if ((window.matchMedia("(min-width: 1360px)").matches)) {

      var carousel = $("#certification-carousel").waterwheelCarousel({
        // flankingItems: 0,
        movingToCenter: function($movingFromCenter) {


          // $newCenterItem is a jQuery wrapped object describing the image that was clicked.
          var height = $movingFromCenter.innerHeight();
          var position = $movingFromCenter.position();
              height = parseInt(height, 10);
              position = parseInt(position.top, 10);
          var num = height + position;
              num = position + (height / 2 - 180);

          // console.log($movingFromCenter + ' item height: ' + height);
          // console.log($movingFromCenter + ' item position.top: ' + position);
          // console.log('sum: ' + num);
          // setTimeout(function(){
          $( ".certification .slider-controls__arrow" ).css( "top", num);
					$( ".certification .slider-controls-divider" ).css( "top", num);
          // });

          // Now that we have the ID of the image, we can use jQuery to show the content corresponding to the tigerpicture.
        },
        sizeMultiplier: 0.43,
        autoPlay: 160000,
        separation: 400
  	    // flankingItems: 3,
  	    // smallFeatureWidth: 1,
  	    // smallFeatureOffset: 150,
  	    // startingFeature: 3
  	    // movingToCenter: function ($item) {
  	    //   $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
  	    // },
  	    // movedToCenter: function ($item) {
  	    //   $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
  	    // },
  	    // movingFromCenter: function ($item) {
  	    //   $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
  	    // },
  	    // movedFromCenter: function ($item) {
  	    //   $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
  	    // },
  	    // clickedCenter: function ($item) {
  	    //   $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
  	    // }
  	  });

  	  $('#certification-carousel-prev').bind('click', function () {
  	    carousel.prev();
  	    return false;
  	  });

  	  $('#certification-carousel-next').bind('click', function () {
  	    carousel.next();
  	    return false;
  	  });

  	  // $('#reload').bind('click', function () {
  	  //   newOptions = eval("(" + $('#newoptions').val() + ")");
  	  //   carousel.reload(newOptions);
  	  //   return false;
  	  // });

    } // eof matchMedia
  }		// eof ('body').is
}); // eof document READY

// tablet ver
$(document).ready(function() {
	if($('body').is('.page-index')){
	  if ((window.matchMedia("(min-width: 768px)").matches) && (window.matchMedia("(max-width: 1359px)").matches)) {
      var carousel = $("#certification-carousel").waterwheelCarousel({
  	    flankingItems: 0,
        movingToCenter: function($movingFromCenter) {


          // $newCenterItem is a jQuery wrapped object describing the image that was clicked.
          var height = $movingFromCenter.innerHeight();
          var position = $movingFromCenter.position();
              height = parseInt(height, 10);
              position = parseInt(position.top, 10);
          var num = height + position;
              num = position + (height / 2 - 180);

          // console.log($movingFromCenter + ' item height: ' + height);
          // console.log($movingFromCenter + ' item position.top: ' + position);
          // console.log('sum: ' + num);
          // setTimeout(function(){
          $( ".certification .slider-controls__arrow" ).css( "top", num);
          $( ".certification .slider-controls-divider" ).css( "top", num);
          // });

          // Now that we have the ID of the image, we can use jQuery to show the content corresponding to the tigerpicture.
        },
        sizeMultiplier: 0.2
        // horizon: 10,
        // horizonOffset: -50,
        // horizonOffsetMultiplier: .7
  	    // smallFeatureWidth: 1,
  	    // smallFeatureOffset: 150,
  	    // startingFeature: 3

  	  });

  	  $('#certification-carousel-prev').bind('click', function () {
  	    carousel.prev();
  	    return false;
  	  });

  	  $('#certification-carousel-next').bind('click', function () {
  	    carousel.next();
  	    return false;
  	  });

    } // eof matchMedia
  }		// eof ('body').is
}); // eof document READY

// mobile ver:
$(document).ready(function() {
	if($('body').is('.page-index')){
	  if ((window.matchMedia("(max-width: 767px)").matches)) {

      $('.certification .slider-item').css('max-width', '300px');

      // setPositinForControls();
      // function setPositinForControls() {
      //   var centerItem = $('.carousel-center');
      //   if (centerItem) {
      //     var height = centerItem.innerHeight();
      //         height = parseInt(height, 10);
      //
      //     var position = centerItem.offset();
      //     var top = parseInt(position.top, 10);
      //     var newtop = height + top;
      //         newtop = newtop - 71 + 'px';
      //
      //     $('.slider-controls').css( {
      //         'top': newtop
      //     });
      //   }
      // }



      var carousel = $("#certification-carousel").waterwheelCarousel({
  	    flankingItems: 0,
        sizeMultiplier: 1,
        movingToCenter: function($movingFromCenter) {


          // $newCenterItem is a jQuery wrapped object describing the image that was clicked.
          var height = $movingFromCenter.innerHeight();
          var position = $movingFromCenter.position();
              height = parseInt(height, 10);
              position = parseInt(position.top, 10);
      	  var num = height + position;

          // console.log($movingFromCenter + ' item height: ' + height);
          // console.log($movingFromCenter + ' item position.top: ' + position);
          // console.log('sum: ' + num);
          // setTimeout(function(){
          $( ".certification .slider-controls__arrow" ).css( "top", num - 71);
          // });

          // Now that we have the ID of the image, we can use jQuery to show the content corresponding to the tigerpicture.
        },

  	    // smallFeatureWidth: 1,
  	    // smallFeatureOffset: 150,
  	    // startingFeature: 3

  	  });

  	  $('#certification-carousel-prev').bind('click', function () {
  	    carousel.prev();
        // if we want to stop carousel from carouselling, use return below:
  	    // return false;
  	  });

  	  $('#certification-carousel-next').bind('click', function () {
  	    carousel.next();
  	    // return false;
  	  });

    } // eof matchMedia
  }		// eof ('body').is
}); // eof document READY


// CAROUSEL end
