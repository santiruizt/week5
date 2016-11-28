function sendCharacter(event){
	event.preventDefault();
	var newCharacter = {
		name: $('#name').val(),
		occupation: $('#occupation').val() ,
		weapon: $('#weapon').val()
	};
	$.ajax({
		url: "https://ironhack-characters.herokuapp.com/characters",
		type: 'post',
		data: newCharacter,
		success: appendCharacter,
		error: handleError
	})
}
function appendCharacter(response){
	console.log(response)
	$('.js-character-list').append('<li> name: ' + response.name +'</li>');
}
function showCharacters(response){
var charactersArray = response;
console.log(response);
	charactersArray.forEach(function (theCharacter){
		var html = `
		<li>
			<p>${theCharacter.name}</p>
			<ul>
				<li>${theCharacter.weapon}</li>
				<li>${theCharacter.occupation}</li>
			</ul>
		</li>
		`;
		$('.js-character-list').append(html);
	});
}

	function handleError(error){
		console.log("Error!");
		console.log(error.reponseText);
	}

function getCharacters(){
	$.ajax({
		type: "GET",
		url: "https://ironhack-characters.herokuapp.com/characters",
		success: showCharacters,
		error: handleError
	});
}

$(document).ready(function(){
	$('.Display').on('click', getCharacters);
	$('.js-form').on('submit', sendCharacter)
})
