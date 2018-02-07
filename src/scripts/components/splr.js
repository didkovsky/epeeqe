(function($) {

  $('.spoiler-control').click(function() {
    var spoiler = $(this).parent();
    spoiler.toggleClass('active');
    spoiler.find('.spoiler-content').slideToggle();
  });

})(jQuery);
