$(document).ready(function(){
	$.getJSON(
		'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=octahedronbr&include_rts=true&count=3&callback=?',
		function(data) {
			var img, i,
			twitter_container = $("section#twitter ul");
			
			twitter_container.hide();
			twitter_container.empty();
			for (i = 0; i < data.length; i += 1) {
				if (data[i].retweeted_status) {
					img = data[i].retweeted_status.user.profile_image_url;
				} else {
					img = data[i].user.profile_image_url;
				}
				twitter_container.append("<li><a href=\"http://twitter.com/#!/OctahedronBR/status/" + data[i].id_str + "\" target=\"_blank\"><img src=\""+img+"\" width=\"48px\" height=\"48px\"/></a>"+data[i].text.replace(/(http:\/\/[a-zA-Z0-9_\.\-\/]*)/g,'<a href="$1" target="_blank">$1</a>').replace(/@([a-zA-Z0-9_\.\-\/]*)/g,'@<a href="http://twitter.com/$1" target="_blank">$1</a>').replace(/#([a-zA-Z0-9_\.\-\/]*)/g,'#<a href="http://twitter.com/#search?q=%23$1" target="_blank">$1</a>')+"</li>");
			}
			twitter_container.fadeIn("slow");
	});

	$.getJSON(
		'http://blog.octahedron.com.br/json?callback=?',
		function(data) {
			var index, posts_container = $("section#blog ul");
			
			posts_container.hide();
			if (data.length != 0) {
				posts_container.empty();
				for (index = 0; index < data.length; index += 1) {
					posts_container.append("<li><a href=\"" + data[index].slug + "\">" + data[index].title + "</a> por " + data[index].author + "</li>");
				}
			} else {
				posts_container.append("<li>Blog em andamento. Aguardem!</li>");
			}
			posts_container.fadeIn("slow");
	});
});

