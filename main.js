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

	}); //end forward

	$('#back').on('click', function() {
		// AJAX calls in here
		console.log("Back was clicked");

		$.ajax({
			url: 'roboCtrl.php',
			type: 'POST',
			dataType: 'TEXT',
			cache: false,
			data: {motion: 'back'},
			success: function(returnData) {
				// just expecting a string to be returned for debugging only
				console.log("success");
				console.log(returnData);
			}
		});
	}); // end back


	$('#left').on('click', function() {
		// AJAX calls in here
		console.log("Left was clicked");
		$.ajax({
			url: 'roboCtrl.php',
			type: 'POST',
			dataType: 'TEXT',
			cache: false,
			data: {motion: 'left'},
			success: function(returnData) {
				// just expecting a string to be returned for debugging only
				console.log("success");
				console.log(returnData);
			}
		});
	}); // end left

	$('#right').on('click', function() {
		// AJAX calls in here
		console.log("Right was clicked");
		$.ajax({
			url: 'roboCtrl.php',
			type: 'POST',
			dataType: 'TEXT',
			cache: false,
			data: {motion: 'right'},
			success: function(returnData) {
				// just expecting a string to be returned for debugging only
				console.log("success");
				console.log(returnData);
			}
		});
	}); // end right


	
}); //end of file





