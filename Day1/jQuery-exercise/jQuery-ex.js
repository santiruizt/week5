var phrases = [
	'I like pie.',
	'I am a Real Madrid fan.',
	'I also think Tesla is the present future.'
]

function randomPhrase(){
	var randphrases = phrases[Math.floor(Math.random() * phrases.length)];
	$('.container p').text(randphrases);
}

$(document).on('ready', randomPhrase)

$('.Refresh').on('click', randomPhrase);

function addText(){
	var newPhrase = $('.input').val();
	phrases.push(newPhrase);
}
