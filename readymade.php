<?php



// Include Database Class
include('db.php');

//Connect to DB
$connection = new DB("localhost", "root", "","robot");
//Get a list of all the pattern names in the DB
$results = $connection->execute("SELECT pattern.name from pattern");

//Dump the result of the query into a PHP array
$readyptn = Array(); // empty array
// Dumping pattern names table into array one row at time
while ($row = $results->fetch_assoc()) {
	array_push($readyptn, $row['name']); // Ex: name is key, value is "Circle"
 }

//JSON encode the php array and return it to menu.js
echo json_encode($readyptn);

// the $readyptn array could be replaced with a mysql
// database. You can query the database for all the pattern
// names.



?>