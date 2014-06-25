<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
	if ($_POST['motion'] == 'fwd')
	{
		echo 'Forward Received';
	}
	else if ($_POST['motion'] == 'back')
	{
		echo 'Backward Received';
	}
	else if ($_POST['motion'] == 'left')
	{
		echo 'Left Received';
	}
	else if ($_POST['motion'] == 'right')
	{
		echo 'Right Received';
	}

}



?>
