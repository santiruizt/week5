$.ajax({
	type: "GET",
	url: "https://ironhack-characters.herokuapp.com/characters",
	success: showCharacters,
	error: handleError
});

function showCharacters (response) {
	var charactersArray = response;
	$('.Display').on('click', function(showCharacters){
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
	});
}

function handleError (error) {
	console.log("Error!");
	console.log(error.reponseText);
}

$('.Display').on('click', function(showCharacters){});

function addCharacter (){
	var newCharacter = 

}

$('.addCharacter').append()


