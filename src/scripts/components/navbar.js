(function($) {

	$('#mobile-search').click( function(e) {

		$(this).toggleClass('active');
		$('.mobile-search-form').toggleClass('active');

		$('.logo>img, .icon-ei-menu, .icon-ei-plus').fadeToggle(100);

		if($(this).hasClass('active')) {
			$(this).css({'left': '-100%'});
		} else {
			$(this).css({'left': 0});
		}
	});

	$('.tooltip-hover').hover(function() {
		$(this).tooltip('show');
	});

})(jQuery);
