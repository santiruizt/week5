$(document).on('ready', function () {
console.log("me he cargado")	
});


$('delete').on('click', function(){
	var evr = $("container:not(.delete)")
	evr.remove();
})

