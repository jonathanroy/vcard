// Trigger Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-6167339-30']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

$(document).ready(function() {

	// define objects
	$viewport = $(window);
	$master = $('#master');
	$name = $master.find('#name');
	$info = $master.find('#info');

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

