$(document).ready(function() {

	// define objects
	$viewport = $(window);
	$master = $('#master');
	$name = $master.find('#name');
	$info = $master.find('#info');

	// fade in / fade out links on hover (including social media icons)
	$('a').fadeTo(0, 0.618).hover(
		function() { $(this).stop(true,true).fadeTo(250, 1.000); },
		function() { $(this).stop(true,true).fadeTo(250, 0.618); }
	);

});

$(window).load(function() {

	// make $name and $info same height
	maxHeight = Math.max( $name.height(), $info.height() );
	$name.height( maxHeight );
	$info.height( maxHeight );

});

// center align $master in $viewport on window load and resize
$(window).bind('load resize', function() {
	vCenter($master, $viewport);
});

function vCenter($object, $reference) {
	$object.css('top', ( $reference.height() - $object.outerHeight(true) ) / 2);
}

