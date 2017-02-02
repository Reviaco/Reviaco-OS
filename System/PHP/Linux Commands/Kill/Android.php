<?php
    $stringData = $_POST['dataString']; 





$command = "export DISPLAY=:1 && adb shell am force-stop $stringData";




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
