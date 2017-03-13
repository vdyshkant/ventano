/* .modal-content.modal-home
  ================================================ */
(function($) {
  if($('body').is('.page-index')){

    if($('section').is('.modal-home')){
      showMainModal();

      closeMainModal();

      hideMainOverlay();


      $('html body').on('keyup', function(e) {
        if (e.keyCode === 27) {
            $('.modal-content').fadeOut(300);
            $('.modal-home-overlay').fadeOut(300);
        }
      });
    }
  }
})(jQuery); // eof autoFunction

function showMainModal() {
    $('#invoke_modal, #floating-callback').click(function() {
        $('.modal-content').fadeIn(300);
        $('.modal-home-overlay').fadeIn(300);
    });
}

function closeMainModal() {
    $('.modal-content-close').click(function() {
        $('.modal-content').fadeOut(300);
        $('.modal-home-overlay').fadeOut(300);
    });
}

function hideMainOverlay() {
    $('.modal-home-overlay').click(function() {
        $('.modal-content').fadeOut(300);
        $('.modal-home-overlay').fadeOut(300);
    });
}

/* eof ^^^ */
