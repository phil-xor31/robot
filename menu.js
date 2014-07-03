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

			$('.btnHome').click(function() {
             location.reload();
       });
			console.log("freeform done");
		}

		else if (selection == "ready") {
			getPatternNames(); //AJAX call
			$('#rdy').addClass('active');
			$('#rdy').removeClass('inactive');

			$('.btnHome').click(function() {
             location.reload();
       });
			console.log("ready done");
		}

		else if (selection == "own") {
			$('#ownptn').addClass('active');
			$('#ownptn').removeClass('inactive');

			$('.btnHome').click(function() {
             location.reload();
       });
			console.log("own done");
		}

	});

// *********START MGMT READYMADE PATTERNS *************//

// This AJAX function is called above in the click handler for #selMenu1.
// See code: if (selection == "ready").
// It does Ajax call to Dynamically make the <option> tags from array $readyptn in readymade.php.
	var getPatternNames = function() {

		$.ajax(
		{
					url: 'readymade.php',
					type: 'POST',
					dataType: 'JSON',
					cache: false,
					data: {'rdymade': 'rdyptn'},
					success: function(data) //data = expecting array $readyptn from readymade.php
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

		// nxt: Do Ajax call to send the selected pattern,
		//from array $readyptn (in json format inside readymade.php) to runReadyMade.php.
		// runReadyMade.php will access mySQL & retrieve pattern assc w that pattern name.
		$.ajax({
			url: 'runReadyMade.php',
			type: 'POST',
			dataType: 'TEXT',
			cache: false,
			data: {"pattern": selection},
			success: function(returnData) {
				// just expecting a string to be returned for debugging only
				console.log("success");
				console.log(returnData);
			}
		});
	});


}); // end menu.js













