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
		'http://tech.octahedron.com.br/json?callback=?',
		function(data) {
			$("section#blog ul").hide();
			console.log(data);
			console.log(data.length);
			if (data.length != 0) {
				for (index in data) {
					$("section#blog ul").append("<li><a href=\"" + data[index].slug + "\">" + data[index].title + "</a></li>");
				}
			} else {
				$("section#blog ul").append("<li>Blog em andamento. Aguardem!</li>");
			}
			$("section#blog ul").fadeIn("slow");
	});
});

