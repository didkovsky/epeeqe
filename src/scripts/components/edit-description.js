(function($) {
  $(".edit-description").click(function(e) {
    e.preventDefault();
    $("#field-description").fadeToggle(100).focus();
    console.log("click log");
  });

  $("#field-description").blur(function() {
    $("#field-description").fadeToggle(100);
  });
  
})(jQuery);
