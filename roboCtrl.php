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
