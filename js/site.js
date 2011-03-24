$(document).ready(function() {
	$("header#top").css("background-image", "url(http://www.octahedron.com.br/images/headers/" + (Math.floor(Math.random() * 13 - 0.0001) + 1) + ".jpg)");

	var quotes = {
		'pt-br': [
			"O melhor jeito de prever o futuro é inventá-lo. (Alan Kay)",
			"Estamos apostando todas as fichas na nuvem. (Steve Ballmer)", 
			"Para começar, pare de falar e comece a fazer. (Walt Disney)",
			"Você torna-se aquilo em que pensa. (Earl Nightingale)",
			"Eu descobri que sempre tenho escolhas. E muitas vezes, trata-se apenas de uma escolha de atitude. (Judith M. Knowlton)",
			"Quando você inovar, você tem que estar preparado para as pessoas dizendo que você é louco. (Larry Ellison)",
			"Servir nossos usuários finais está no coração do que fazemos e continua a ser nossa prioridade número um. (Larry Page)"],
		en: [
			"Serving our end users is at the heart of what we do and remains our number one priority. (Larry Page)",
			"Success cannot come from standstill men. Methods change and men must change with them.  (James Cash Penney)",
			"You can’t have a better tomorrow if you are thinking about yesterday all the time. (Charles F. Kettering)",
			"The hardest thing about decision making is not taking things personally. (Kevin Hale)",
			"The idea of an entrepreneur is really thinking out of the box and taking risks and stepping up to major challenges. (Steve Case)",
			"Reduce. Do as little as possible to get what you have to get done. (Joshua Schachter)",
			"When you innovate, you’ve got to be prepared for people telling you that you are nuts. (Larry Ellison)",
			"Best startups generally come from somebody needing to scratch an itch. (Michael Arrington)",
			"It’s not just about being small, it’s about doing more with less. (Greg McAdoo)"]
	};

	if ($("p#quote").length != 0) {
		var lang = $('html').attr('lang');
		var randomQuote = Math.floor(Math.random() * quotes[lang].length - 0.0001);
		$("p#quote").html(quotes[lang][randomQuote]);
	}
});

