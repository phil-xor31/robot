<?php
echo $_POST['motion'];

if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
	if ($_POST['motion'] == 'fwd')
	{
		echo 'Forward Received';
	}

}



?>