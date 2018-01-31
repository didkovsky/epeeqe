(function($) {

  $('[data-toggle="view-replies"]').click(function(e) {
    e.preventDefault();
    var c_id = $(this).data('commentId');
    $('[data-toggle="comment-replies"][data-comment-id="' + c_id + '"]').slideToggle();
    console.log(c_id);
  });

  $('[data-toggle="add-comment"]').click(function(e) {
    e.preventDefault();
    var c_id = $(this).data('commentId');
    var comment_block = '<div class="add-comment" data-toggle="comment-reply" data-comment-id="' + c_id + '">' +
      '<div class="icon">' +
        '<img src="../img/ava.png" alt="">' +
      '</div>' +
      '<div class="form-group">' +
        '<input type="text" class="form-control comment-field">' +
      '</div>' +
      '<div class="form-group text-right">' +
        '<a data-toggle="remove-reply" data-comment-id="' + c_id + '" href="#" class="btn btn-default">cancel</a>' +
        '<a href="#" class="btn btn-primary">add comment</a>' +
      '</div>' +
    '</div>';

    var replies = $('[data-toggle="comment-replies"][data-comment-id="' + c_id + '"]');
    replies.append(comment_block);
    replies.slideDown();
    replies.find('.comment-field').trigger('focus');

    $('[data-toggle="remove-reply"]').click(function(e) {
      e.preventDefault();
      var c_id = $(this).data('commentId');
      console.log(c_id);
      $('[data-toggle="comment-reply"][data-comment-id="' + c_id + '"]').remove();
    });
  });
})(jQuery);
