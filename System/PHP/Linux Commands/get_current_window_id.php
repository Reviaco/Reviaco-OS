<?php

$command = "export DISPLAY=:0 && xdotool getactivewindow";

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
