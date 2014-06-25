$(function() {

var readyMade = function () {
	$('.rdy').show();
};

var ownPattern = function () {
	$('.ownptn').show();
};


// This unhides the menu option readyMade button.
// Is supposed to figure out WHICH <option> was selected tho!
$('#select').on('click', function() {

	console.log("readymade pattern clicked");

	$("#menu").change(function() {
		alert("Im in the change inactive to active");

		('.inactive .rdy').addClass('active');
		('.inactive .rdy').removeClass('inactive');
		$('.rdy').show();

	});
});




}); // end menu.js