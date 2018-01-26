(function($) {

  $('.open-spoiler').click(function(e) {
    e.preventDefault();
    var section = $(this).parent().parent();
    var spoiler = section.find('.card-spoiler').toggleClass('open');
  });

})(jQuery);
