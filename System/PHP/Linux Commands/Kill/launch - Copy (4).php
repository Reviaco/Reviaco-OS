﻿<?php
    $stringData = $_POST['dataString']; 





$command = "export DISPLAY=:1 && /opt/VirtualGL/bin/vglrun $stringData";
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
