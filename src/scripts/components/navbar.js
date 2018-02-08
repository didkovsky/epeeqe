(function($) {

	$('#mobile-search, #close-search').click( function(e) {
		$('.navbar-mobile-search').fadeToggle();
	});

	$('.tooltip-hover').hover(function() {
		$(this).tooltip('show');
	});

	$(document).on("click.bs.dropdown.data-api", ".noclose", function(e) { e.stopPropagation() });

})(jQuery);
