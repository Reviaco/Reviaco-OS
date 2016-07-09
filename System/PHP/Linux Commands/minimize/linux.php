<?php
    $stringData = $_POST['dataString']; 





$command = "export DISPLAY=:0 && $stringData --geometry=1280x765+14+245";
$command .= " $param1 $param2 $param3 2>&1";



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
