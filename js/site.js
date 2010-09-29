$(document).ready(function() {

	$("header#top").css("background-image", "url(http://www.octahedron.com.br/images/header" + (Math.floor(Math.random() * 13 - 0.0001) + 1) + ".jpg)");

	/**
	 * Most jQuery.localScroll's settings, actually belong to jQuery.ScrollTo, check it's demo for an example of each option.
	 * @see http://flesler.demos.com/jquery/scrollTo/
	 * You can use EVERY single setting of jQuery.ScrollTo, in the settings hash you send to jQuery.LocalScroll.
	 */

	// The default axis is 'y', but in this demo, I want to scroll both
	// You can modify any default like this
	$.localScroll.defaults.axis = 'xy';

	// Scroll initially if there's a hash (#something) in the url
	$.localScroll.hash({
		target: '#multiple', // Could be a selector or a jQuery object too.
		queue: true,
		duration: 1500
	});

	/**
	 * NOTE: I use $.localScroll instead of $('#navigation').localScroll() so I
	 * also affect the >> and << links. I want every link in the page to scroll.
	 */
	$.localScroll({
		target: '#multiple', // could be a selector or a jQuery object too.
		queue:true,
		duration:1000,
		hash:true,
	});
});

