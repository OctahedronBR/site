$(document).ready(function() {
	$('#submit').click(function() {
		$.ajax({
		  type: "POST",
		  url: "http://email.latest.octahedronpage.appspot.com/email",
		  data: "name=vitor&email=teste@teste.com&message=mensagem",
		  success: function(data) {
		  	alert(data);
		  }
		});

		return false;
	});
});

