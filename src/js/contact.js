$(document).ready(function() {
	$('#submit').click(function() {
		var name = $("input#name").val();
		var email = $("input#email").val();
		var message =  $("textarea").val();
		var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

		if (name.length != 0 && email.length != 0 && message.length != 0 && emailPattern.test(email)) {
			$("p.warning").html("");
			$.ajax({
				type: "POST",
				url: "http://www.octahedron.com.br/email",
				data: "name=" + name + "&email=" + email + "&message=" + message,
				dataType: "json",
				success: function(data) {
					if (data != null && data.status == "ok") {
						$("p.warning").html("Contato feito com sucesso!");
						$("input[type=text]").val("");
						$("textarea").val("");
					} else {
						$("p.warning").html("Preencha o formulário corretamente!");
					}
				},
				error: function () {
					$("p.warning").html("Problema com o servidor de email! Por favor, entre em contato manualmente via email.");
				}
			});
		} else {
			$("p.warning").html("Preencha o formulário corretamente!");
		}

		return false;
	});
});

