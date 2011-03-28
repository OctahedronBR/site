$(document).ready(function(){
	$.getJSON(
		'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=octahedronbr&include_rts=true&count=3&callback=?',
		function(data) {
			var img;
			$("section#twitter ul").hide();
			for (index in data) {
				if (data[index].retweeted_status) {
					img = data[index].retweeted_status.user.profile_image_url;
				} else {
					img = data[index].user.profile_image_url;
				} 
				$("section#twitter ul").append("<li><img src=\""+img+"\" width=\"48px\" height=\"48px\"/>"+data[index].text.replace(/(http:\/\/[a-zA-Z0-9_\.\-\/]*)/g,'<a href="$1" target="_blank">$1</a>').replace(/@([a-zA-Z0-9_\.\-\/]*)/g,'@<a href="http://twitter.com/$1" target="_blank">$1</a>').replace(/#([a-zA-Z0-9_\.\-\/]*)/g,'#<a href="http://twitter.com/#search?q=%23$1" target="_blank">$1</a>')+"</li>");
			}
			$("section#twitter ul").fadeIn("slow");
	});

	$.getJSON(
		'http://blog.octahedron.com.br/json?callback=?',
		function(data) {
			$("section#blog ul").hide();
			if (data.length != 0) {
				for (index in data) {
					$("section#blog ul").append("<li><a href=\"" + data[index].slug + "\">" + data[index].title + "</a> por " + data[index].author + "</li>");
				}
			} else {
				$("section#blog ul").append("<li>Blog em andamento. Aguardem!</li>");
			}
			$("section#blog ul").fadeIn("slow");
	});
});

