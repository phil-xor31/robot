//TOBOR JQ

$(function () {

var motion = 'motion';

$.ajaxSetup({
		type: 'POST',
		dataType: 'JSON',
		cache: false
	});


$('#fwd').on('click', function() {
	// AJAX calls in here
	console.log("Forward was clicked");

	$.ajax({
		url: 'roboCtrl.php',
		type: 'POST',
		dataType: 'TEXT',
		cache: false,
		data: {motion: 'fwd'},
		success: function(returnData) {
			// just expecting a string to be returned for debugging only
			console.log("success");
			console.log(returnData);
		}
	});

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





