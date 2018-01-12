(function($) {

  $('.form-spoiler .ad-rm').click(function() {
    var spoiler = $(this).parent();
    spoiler.toggleClass('active');
    spoiler.find('.spoiler-content').slideToggle();
    spoiler.find('.description').toggleClass('visible');
  });

})(jQuery);
