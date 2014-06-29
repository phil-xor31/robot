<?php

// ***** SIGNATURE ***** //
// Connect to Database on Raspberry Pi. (we got it on Pi w mysqldump).
// Make a $query to return the sequence of mvmt cmds for pattern to run,
// that was sent by post request.
// Put $query results in assoc array.
// Get the list of cmds from DB (ie: $cmdResult['cmds'] & put it in a string.
// Loop the string, each char represents a py function,
// when get a match, the py function executes.


// Include Database Class
include('db.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
	//Connect to DB
	$connection = new DB("localhost", "root", "","robot");
	$patternToRun = $_POST['pattern'];
	$query = "SELECT movement.cmds from pattern INNER JOIN movement ON movement.pattern_id = pattern.pattern_id WHERE pattern.name LIKE '" . $patternToRun . "'";
	//Get my string of movement cmds to be executed by the robot
	$results = $connection->execute($query);
	//convert result into a php associative arraY
	$cmdResult = $results->fetch_assoc(); 
	$cmd = $cmdResult['cmds']; // cmd is a string containing "FLFLFLFL"


	echo $cmd; // return for debugging
	for ($i = 0; $i < strlen($cmd); $i++)
	{
		
		if ($cmd[$i] == 'F')
		{
			exec('sudo python /var/www/robot/python/rrForward.py'); //executes outside webserver enviro, so dont know dir wo full path.
		}
		else if ($cmd[$i] == 'B')
		{
			exec('sudo python python/rrBack.py');
		}
		else if ($cmd[$i] == 'L')
		{
			exec('sudo python python/rrLeft.py');
		}
		else if ($cmd[$i] == 'R')
		{
			exec('sudo python python/rrRight.py');
		}
	}
	
	// Old hardcoded stuff for testing.
	// if ($_POST['pattern'] == "Circle")
	// {
	// 	//exec('sudo python /var/www/robot/python/rrForward.py'); //executes outside webserver enviro, so dont know dir wo full path.
		
	// 	echo 'Ran Circle Pattern';
	// }
	// else if ($_POST['pattern'] == 'Figure8')
	// {
	// 	//exec('sudo python python/rrBack.py');
	// 	echo 'Ran Figure8 Pattern';
	// }
}


?>