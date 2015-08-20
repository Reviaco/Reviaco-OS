<?php
    $stringData = $_POST['dataString']; 





$command = "unzip /var/www/html/Users/Admin/Downloads/cat/catt.zip -d /var/www/html/Users/Admin/Downloads/cat/";
$command .= " $param1 $param2 $param3 2>&1";



$pid = popen( $command,"r");


while( !feof( $pid ) )
{
 fread($pid, 256);
 flush();
 ob_flush();
 usleep(100000);
}
pclose($pid);




?>