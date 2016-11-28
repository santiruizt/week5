
function showartist(response) {
  console.log(response);
  $('.js-artist li').remove();
  response.artists.items.forEach(function(theartist){
    if (theartist.images.length > 0) {
    var html = `
    <div class="artist" id="${theartist.id}">
    <li>
    <img src= '${theartist.images[0].url}'>
    ${theartist.name}</li>
    <br>
    </div>
    `;
    $('.js-artist').append(html);
    }
  });
}

function handleError(error){
  console.log("Error!");
  console.log(error.reponseText);
}

function getArtist(event) {
  event.preventDefault()
  var artistName = $('#name').val();
  console.log(artistName);
  $.ajax({
    type: "GET",
    url: "https://api.spotify.com/v1/search?type=artist&query=" + artistName,
    success: showartist,
    error: handleError
  });

}

function showAlbums(response) {
  console.log(response);
  var albums = response.items;

  albums.forEach(function (album) {
    var html= `
    <li>${album.name}</li>
    <li><img src= "${album.images[0].url}"></li>
    `;

    $('.js-albums').append(html);

  })
}

function getAlbums(event) {
  var artist_id = event.currentTarget.id;
  console.log(event);
  $.ajax({
    type: "GET",
    url: "https://api.spotify.com/v1/artists/" + artist_id + "/albums",
    success: showAlbums,
    error: handleError
  });
}

$(document).ready(function(){
	$('.js-form').submit(getArtist);
  $(".js-artist").on('click', ".artist", getAlbums);

})
