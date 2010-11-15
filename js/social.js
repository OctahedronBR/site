$(document).ready(function(){
	$.getJSON(
		'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=octahedronbr&include_rts=true&count=5&callback=?',
		function(data) {
			$("section#twitter ul").hide();
			for (index in data) {
				$("section#twitter ul").append("<li>"+data[index].text.replace(/(http:\/\/[a-zA-Z0-9_\.\-\/]*)/g,'<a href="$1" target="_blank">$1</a>').replace(/@([a-zA-Z0-9_\.\-\/]*)/g,'@<a href="http://twitter.com/$1" target="_blank">$1</a>').replace(/#([a-zA-Z0-9_\.\-\/]*)/g,'#<a href="http://twitter.com/#search?q=%23$1" target="_blank">$1</a>')+"</li>");
			}
			$("section#twitter ul").fadeIn("slow");
	});

	$.getJSON(
		'http://blog.octahedron.com.br/json?callback=?',
		function(data) {
			alert('a');
			$("section#twitter ul").hide();
			if (data.length != 0) {
				for (index in data) {
					$("section#twitter ul").append("<li>" + data[index].title + "</li>");
				}
			} else {
				$("section#twitter ul").append("<li>Blog em andamento. Aguardem!</li>");
			}
			alert('b');
			$("section#twitter ul").fadeIn("slow");
	});
});

