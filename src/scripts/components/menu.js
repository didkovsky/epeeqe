(function($) {

  $('.nav-sidebar .spoiler .control').click(function() {
    var spoiler = $(this).parent();
    spoiler.find('ul').slideToggle();
    spoiler.find('.show-more').fadeToggle();
    spoiler.find('.control').toggleClass('active');
  });

})(jQuery);
