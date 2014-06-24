//TOBOR JQ

$(function () {
$.ajaxSetup({
		type: 'POST',
		dataType: 'JSON',
		cache: false
	});


$('#fwd').on('click', function() {
	// AJAX calls in here
	console.log("Forward was clicked");

});

$('#back').on('click', function() {
	// AJAX calls in here
	console.log("Back was clicked");
});

$('#left').on('click', function() {
	// AJAX calls in here
	console.log("Left was clicked");
});

$('#right').on('click', function() {
	// AJAX calls in here
	console.log("Right was clicked");
});




	
});





