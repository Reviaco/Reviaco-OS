<?php





$command = "sleep 5 && export DISPLAY=:1 && wmctrl -r $(xdotool getwindowfocus getwindowname) -e '0,11,188,1280,742'";
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
