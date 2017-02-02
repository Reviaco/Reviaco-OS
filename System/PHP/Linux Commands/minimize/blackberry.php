<?php
    $stringData = $_POST['dataString']; 





$command = 'export DISPLAY=:1 && fledge.exe /handheld=<handheld-id> /session=<session-name> /app=<simulator-folder-path>/Jvm.dll /automate && fledgecontroller.exe /session=<session-name> /execute=LoadCod("<path-to-cod>.cod")';




$pid = popen( $command,"r");


while( !feof( $pid ) )
{
 echo fread($pid, 256);
 flush();
 ob_flush();

 usleep(100000);
}
pclose($pid);


?>
