(function($) {

  $('[data-toggle="view-replies"]').click(function(e) {
    e.preventDefault();
    var c_id = $(this).data('commentId');
    $('[data-toggle="comment-replies"][data-comment-id="' + c_id + '"]').slideToggle();
    console.log(c_id);
  });

})(jQuery);
