$(document).ready(function() {
	$("header#top").css("background-image", "url(http://www.octahedron.com.br/images/header" + (Math.floor(Math.random() * 13 - 0.0001) + 1) + ".jpg)");

	var quotes = new Array(
		"O tempo é sempre certo para fazer o que está certo. (Martin Luther King, Jr.)",
		"Obstáculos são as coisas assustadoras que encontra quando desvia os olhos do seu sonho. (Henry Ford)",
		"Para começar, pare de falar e comece a fazer. (Walt Disney)",
		"Você torna-se aquilo em que pensa. (Earl Nightingale)",
		"Se queres ser feliz amanhã, tenta hoje mesmo. (Liang Tzu)",
		"A vitória pertence ao mais perseverante. (Napoleão Bonaparte)",
		"Eu descobri que sempre tenho escolhas. E muitas vezes, trata-se apenas de uma escolha de atitude. (Judith M. Knowlton)",
		"Fazemos nossos caminhos e lhes chamamos destino. (Benjamin Disraeli)",
		"Grandes realizações não são feitas por impulso, mas por uma soma de pequenas realizações. (Vincent Van Gogh)"
	);

	if ($("p#quote").length != 0) {
		var randomQuote = Math.floor(Math.random() * quotes.length - 0.0001);
		$("p#quote").html(quotes[randomQuote]);
	}
});

