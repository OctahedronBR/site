$(document).ready(function() {
	$('#submit').click(function() {
		$.ajax({
		  type: "POST",
		  url: "http://email.latest.octahedronpage.appspot.com/email",
		  data: "name=vitor&email=teste@teste.com&message=mensagem&jsoncallback=?",
		  success: function(data) {
		  	console.log(data);
		  }
		  dataType: "jsonp",
		  jsonp: '_jsonp'
		});

		return false;
	});
});

