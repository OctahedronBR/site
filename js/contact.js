$(document).ready(function() {
	$('#submit').click(function() {
		var name = $("input#name").val();
		var email = $("input#email").val();
		var message =  $("textarea").val();

		if (name.length != 0 && email.length != 0 && message.length != 0) {
			$.ajax({
				type: "POST",
				url: "http://www.octahedron.com.br/email",
				data: "name=" + name + "&email=" + email + "&message=" + message + "&callback=?",
				dataType: "json",
				success: function(data) {
					console.log(data);
					console.log(data.status);
					console.log(data[status]);
					if (data.status == "ok") {
						$("p.warning").html("Contato feito com sucesso!");
						$("textarea").empty();
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

