<?php

$command = "export DISPLAY=:0 && xdotool getactivewindow && wmctrl -r $(xdotool getwindowfocus getwindowname) -e '0,11,188,1280,742' && wmctrl -r $(xdotool getwindowfocus getwindowname) -b add,above ";

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
