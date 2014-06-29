<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
	if ($_POST['motion'] == 'fwd')
	{
		exec('sudo python /var/www/robot/python/rrForward.py'); //executes outside webserver enviro, so dont know dir wo full path.
		echo 'Forward Received';
	}
	else if ($_POST['motion'] == 'back')
	{
		exec('sudo python python/rrBack.py');
		echo 'Backward Received';
	}
	else if ($_POST['motion'] == 'left')
	{
		exec('sudo python python/rrLeft.py');
		echo 'Left Received';
	}
	else if ($_POST['motion'] == 'right')
	{
		exec('sudo python python/rrRight.py');
		echo 'Right Received';
	}

}



?>
