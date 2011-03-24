$(document).ready(function() {
	var lang = $('html').attr('lang');
	var server_problem_messages = Array();
	var fill_form_messages = Array();
	fill_form_messages['pt-br'] = "Por favor, preencha o formulário corretamente."
	fill_form_messages['en'] = "Please, fill the form correctly."
	server_problem_messages['pt-br'] = "Problema com o servidor de email! Por favor, entre em contato via email."
	server_problem_messages['en'] = "Email server failed! Please, contact us via email."

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
						$("p.warning").html(fill_form_messages[lang]);
					}
				},
				error: function () {
					$("p.warning").html(server_problem_messages[lang]);
				}
			});
		} else {
			$("p.warning").html(fill_form_messages[lang]);
		}

		return false;
	});
});

