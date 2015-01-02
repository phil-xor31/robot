<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
	if ($_POST['motion'] == 'fwd')
	{
		exec('sudo python python/rrForward.py'); 
		echo 'Forward Received';
	}
	else if ($_POST['motion'] == 'back')
	{
		exec('sudo python python/rrBack.py');
		echo 'Backward Received';
	}
	else if ($_POST['motion'] == 'left')
	{
		exec('sudo python python/rrLeft.py 0.22');
		if ($_POST['state'] == "running") 
		{
			// resume forward movement
			exec('sudo python python/rrForward.py');
		}
		echo 'Left Received';
	}
	else if ($_POST['motion'] == 'right')
	{
		exec('sudo python python/rrRight.py 0.22');
		if ($_POST['state'] == "running") 
		{
			// resume forward movement
			exec('sudo python python/rrForward.py');
		}
		echo 'Right Received';
	}
	else if ($_POST['motion'] == 'stop')
	{
		exec('sudo python python/rrStop.py');
		echo 'Stop Received';
	}

}



?>
