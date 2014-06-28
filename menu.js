$(function() {

// This unhides the menu option readyMade button.
	// Is supposed to figure out WHICH <option> was selected.
	// .on('change') will make choice right away wo needing to choose menu <select>ion,
	// w a button (but I WANT to use a btn).
	$('#select').on('click', function() {

		var selection = $('#menu1').find(':selected').val();
		//alert(selection + " clicked");

		$('#trySome').addClass('inactive');
		$('#trySome').removeClass('active');


		if (selection == "free") {
			$('#ff_border').addClass('active');
			$('#ff_border').removeClass('inactive');
			console.log("freeform done");
		}

		if (selection == "ready") {
			$('#rdy').addClass('active');
			$('#rdy').removeClass('inactive');
			console.log("ready done");
		}

		if(selection == "own") {
			$('#ownptn').addClass('active');
			$('#ownptn').removeClass('inactive');
			console.log("own done");
		}

	});




}); // end menu.js