$(function() {

// This unhides the menu option readyMade button.
	// Is supposed to figure out WHICH <option> was selected.
	// .on('change') will make choice right away wo needing to choose menu <select>ion,
	// w a button (but I WANT to use a btn).
	$('#selMenu1').on('click', function() {

		var selection = $('#menu1').find(':selected').val();

		$('#trySome').addClass('inactive');
		$('#trySome').removeClass('active');


		if (selection == "free") {
			$('#ff_border').addClass('active');
			$('#ff_border').removeClass('inactive');
			console.log("freeform done");
		}

		if (selection == "ready") {
			getPatternNames(); //AJAX call
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

// *********START MGMT READYMADE PATTERNS *************//

// This function is called above in the click handler for #selMenu1.
// See code: if (selection == "ready").
// It does Ajax call to make the <option> tags from array $readyptn in readymade.php.
	var getPatternNames = function() {

		$.ajax(
		{
					url: 'readymade.php',
					type: 'POST',
					dataType: 'JSON',
					cache: false,
					data: {'rdymade': 'rdyptn'},
					success: function(data)
					{
						// console.log(data);
						$('#menu2').html('');
						for (i in data)
						{
							$('#menu2').append('<option>' + data[i] + '</option>');
						}
					}
		}); //end of ajax
	};



// This does state changes for selMenu2 (readymade patterns)

$('#selMenu2').on('click', function() {

		var selection = $('#menu2').find(':selected').val();

		$('#rdy').addClass('inactive');
		$('#rdy').removeClass('active');

		// nxt: Do Ajax call to send the selected pattern
		//from array $readyptn (in json format inside readymade.php)to runReadyMade.php.
		// runReadyMade.php will access mySQL & retrieve pattern assc w that pattern name.

	});


}); // end menu.js