$(document).ready(function() {

	// define objects
	var $window = $(window);
	var $master = $('#master');
	var $name = $master.find('#name');
	var $info = $master.find('#info');
	var $anchor = $master.find('a');

	// fade in / fade out links on hover (including social media icons)
	$anchor.fadeTo(0, 0.618).hover(
		function() { $(this).stop(true,true).fadeTo(250, 1.000); },
		function() { $(this).stop(true,true).fadeTo(250, 0.618); }
	);
	
	$window.load(function() {

		// make $name and $info same height
		var maxHeight = Math.max( $name.height(), $info.height() );
		$name.height( maxHeight );
		$info.height( maxHeight );
	
	});
	
	// center align $master in $viewport on window load and resize
	$window.bind('load resize', function() {
		vCenter($master, $window);
	});

});

function vCenter($object, $reference) {
	if ( $object.size() && $reference.size() ) {
		$object.css('top', ( $reference.height() - $object.outerHeight(true) ) / 2);
	}
}

