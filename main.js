//TOBOR JQ

$(function () {

  //
  // MJPEG Webcam interface
  //
  var mjpeg_img;
 
  function reload_img () {
    mjpeg_img.prop('src', 'cam_pic.php?time=' + new Date().getTime());
  }

  function error_img () {
    setTimeout("mjpeg_img.prop('src', 'cam_pic.php?time=' + new Date().getTime());", 100);
  }

  function init() {

    // mjpeg
    mjpeg_img = $("#mjpeg_dest");
    mjpeg_img.load(reload_img);
    mjpeg_img.error(error_img);
    reload_img();
  
  }


  init();

  // End of Webcam interface

	var currentState = 'stopped';

	$.ajaxSetup({
			type: 'POST',
			dataType: 'JSON',
			cache: false
		});


	$('#fwd').on('click', function() {
		// AJAX calls in here
		console.log("Forward was clicked");
		currentState = "running";

		$.ajax({
			url: 'roboCmd.php',
			type: 'POST',
			dataType: 'TEXT',
			cache: false,
			data: {motion: 'fwd', state: currentState},
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
		currentState = "running";

		$.ajax({
			url: 'roboCmd.php',
			type: 'POST',
			dataType: 'TEXT',
			cache: false,
			data: {motion: 'back', state: currentState},
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
			url: 'roboCmd.php',
			type: 'POST',
			dataType: 'TEXT',
			cache: false,
			data: {motion: 'left', state: currentState},
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
			url: 'roboCmd.php',
			type: 'POST',
			dataType: 'TEXT',
			cache: false,
			data: {motion: 'right', state: currentState},
			success: function(returnData) {
				// just expecting a string to be returned for debugging only
				console.log("success");
				console.log(returnData);
			}
		});
	}); // end right

	$('#stop').on('click', function() {
		// AJAX calls in here
		console.log("Stop was clicked");
		currentState = 'stopped';
		
		$.ajax({
			url: 'roboCmd.php',
			type: 'POST',
			dataType: 'TEXT',
			cache: false,
			data: {motion: 'stop'},
			success: function(returnData) {
				// just expecting a string to be returned for debugging only
				console.log("success");
				console.log(returnData);
			}
		});
	}); // end stop


	
}); //end of file





