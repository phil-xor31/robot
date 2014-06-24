<?php

error_reporting(E_ALL);
ini_set('display_errors', 'on');


//************	START: DB Connection Check


class DB {
	
	private $link;
	public $connected = "DB is connected";

	public function __construct($db_host, $db_username,$pwd, $db_name)  {
		
		$this->link = new mysqli($db_host, $db_username,$pwd, $db_name);

		if ($this->link->connect_errno) {
		    die('Connection Error: ' . $link->connect_error);
		}
		else {
			// echo "Connected to ".$db_host . "<br>";
		}
	} //end __construct







?>