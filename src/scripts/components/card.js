(function($) {

  $('.public-card .description').hover(function() {
    $(this).popover("show");
  }, function() {$(this).popover("hide");});

})(jQuery);
