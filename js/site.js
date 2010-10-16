$(document).ready(function() {
	$("header#top").css("background-image", "url(http://www.octahedron.com.br/images/header" + (Math.floor(Math.random() * 13 - 0.0001) + 1) + ".jpg)");

	var quotes = new Array(
		"O melhor jeito de prever o futuro é inventá-lo. (Alan Kay)",
		"Estamos apostando todas as fichas na nuvem.(Steve Ballmer)" 
		"Para começar, pare de falar e comece a fazer. (Walt Disney)",
		"Você torna-se aquilo em que pensa. (Earl Nightingale)",
		"Eu descobri que sempre tenho escolhas. E muitas vezes, trata-se apenas de uma escolha de atitude. (Judith M. Knowlton)",
	);

	if ($("p#quote").length != 0) {
		var randomQuote = Math.floor(Math.random() * quotes.length - 0.0001);
		$("p#quote").html(quotes[randomQuote]);
	}
});

