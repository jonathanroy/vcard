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
	$loader = $("#loader");
	$master = $("#master");
	$name = $master.find("#name");
	$info = $master.find("#info");

	// center align $loader in $viewport
	vCenter($loader, $viewport);

	// hide $master (we will show it when everything is loaded)
	$master.css("top", -2 * $master.outerHeight(true)).hide();

	// fade in / fade out links on hover (including social media icons)
	$("a").fadeTo(0, 0.618).hover(
		function() { $(this).stop(true,true).fadeTo(250, 1.000); },
		function() { $(this).stop(true,true).fadeTo(250, 0.618); }
	);

});

$(window).load(function() {

	// make $name and $info same height
	MaxHeight = Math.max( $name.height(), $info.height() );
	$name.height( MaxHeight );
	$info.height( MaxHeight );

	// show $master with a slide in when everything is loaded
	$loader.fadeOut(2000);
	$master.show().animate({top: ( $viewport.height() - $master.outerHeight(true) ) / 2 + "px"}, 3000);

});

// center align $master in $viewport on resize
$(window).resize(function() {
	vCenter($master, $viewport);
});

function vCenter($object, $reference) {
	$object.css("top", ( $reference.height() - $object.outerHeight(true) ) / 2);
}
