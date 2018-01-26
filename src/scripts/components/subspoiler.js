(function($) {

  $('.open-spoiler, .close-spoiler').click(function(e) {
    e.preventDefault();
    var section = $(this).parent().parent().toggleClass('open');
  });

})(jQuery);
