<?php
    $stringData = $_POST['dataString']; 
    $command = "export DISPLAY=:1 && sudo killall $stringData";

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
