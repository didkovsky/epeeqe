(function($) {

  $('.spoiler-control').click(function(e) {
    e.preventDefault();
    var spoiler = $(this).parent();
    spoiler.toggleClass('spoiler-active');
    spoiler.find('.spoiler-content').slideToggle();
  });

})(jQuery);
