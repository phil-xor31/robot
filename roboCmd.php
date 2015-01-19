<?php


if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
	$pipe = fopen("/home/pi/robot/python/CMD_PIPE","w");

	if ($_POST['motion'] == 'fwd')
	{
		fwrite($pipe, "FWD\n");
		echo 'FWD';
	}
	else if ($_POST['motion'] == 'back')
	{
		fwrite($pipe, "BACK\n");
		echo 'BACK';
	}
	else if ($_POST['motion'] == 'left')
	{
		fwrite($pipe, "LEFT\n");
		echo 'LEFT';
	}
	else if ($_POST['motion'] == 'right')
	{
		fwrite($pipe, "RIGHT\n");
		echo 'RIGHT';
	}
	else if ($_POST['motion'] == 'stop')
	{
		fwrite($pipe, "STOP\n");
		echo 'STOP';
	}

    fclose($pipe);
}
?>
