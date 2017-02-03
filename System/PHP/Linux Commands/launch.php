<?php
$app_name = $_POST['app_name'];
$type = $_POST['type'];

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
/*** begin the session ***/
session_start();

if(!isset($_SESSION['user_id']))
{
    $message = 'You must be logged in to access this page';
}
else
{
    try
    {
        /*** connect to database ***/
        /*** mysql hostname ***/
        $mysql_hostname = 'localhost';

        /*** mysql username ***/
        $mysql_username = 'root';

        /*** mysql password ***/
        $mysql_password = 'root';

        /*** database name ***/
        $mysql_dbname = 'users';


        /*** select the users name from the database ***/
        $dbh = new PDO("mysql:host=$mysql_hostname;dbname=$mysql_dbname", $mysql_username, $mysql_password);
        /*** $message = a message saying we have connected ***/

        /*** set the error mode to excptions ***/
        $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        /*** prepare the insert ***/
        $stmt = $dbh->prepare("SELECT username FROM users 
        WHERE id = :id");

        /*** bind the parameters ***/
        $stmt->bindParam(':id', $_SESSION['user_id'], PDO::PARAM_INT);

        /*** execute the prepared statement ***/
        $stmt->execute();

        /*** check for a result ***/
        $username = $stmt->fetchColumn();

        /*** if we have no something is wrong ***/
        if($username == false)
        {
            $message = 'Access Error';
        }
        else
        {
            $message = 'Welcome '.$username;
        }
    }
    catch (Exception $e)
    {
        /*** if we are here, something is wrong in the database ***/
        $message = 'We are unable to process your request. Please try again later"';
    }
}

if ($type == "Linux") {

$command = "export DISPLAY=:1 && sudo -u $username $app_name";

} elseif ($type == "Lutro") {

$command = "export DISPLAY=:1 && sudo -u $username retroarch -L /usr/lib/i386-linux-gnu/libretro/ /var/www/html/Reviaco-OS/Users/$username/Apps/SNES/$app_name/launch.lutro";

} elseif ($type == "NXEngine") {

$command = "export DISPLAY=:1 && sudo -u $username retroarch -L /usr/lib/i386-linux-gnu/libretro/ /var/www/html/Reviaco-OS/Users/$username/Apps/SNES/$app_name/launch.exe";

} elseif ($type == "Sega") {

$command = "export DISPLAY=:1 && sudo -u $username retroarch -L /usr/lib/i386-linux-gnu/libretro/genesis_plus_gx_libretro.so /var/www/html/Reviaco-OS/Users/$username/Apps/SNES/$app_name/launch.md";

} elseif ($type == "SNES") {

$command = "export DISPLAY=:1 && sudo -u $username retroarch -L /usr/lib/libretro/snes9x2010_libretro.so /var/www/html/Reviaco-OS/Users/$username/Apps/SNES/$app_name/launch.sfc";

} elseif ($type == "Chrome") {

$command = "export DISPLAY=:1 && sudo -u $username google-chrome-unstable --load-and-launch-app=/var/www/html/Reviaco-OS/Users/$username/Apps/Chrome/$app_name";

} elseif ($type == "TyrQuake") {

$command = "export DISPLAY=:1 && sudo -u $username retroarch -L /usr/lib/i386-linux-gnu/libretro/ /var/www/html/Reviaco-OS/Users/$username/Apps/SNES/$app_name/launch.pak";

} elseif ($type == "VB") {

$command = "export DISPLAY=:1 && sudo -u $username retroarch -L /usr/lib/i386-linux-gnu/libretro/ /var/www/html/Reviaco-OS/Users/$username/Apps/SNES/$app_name/launch.vb";

} elseif ($type == "Windows") {

$command = "export DISPLAY=:1 && sudo -u $username wine /var/www/html/Reviaco-OS/Users/$username/Apps/Windows/$app_name/$app_name.exe";

} elseif ($type == "AndroidPhone") {

$command = "export DISPLAY=:1 && sudo -u $username adb shell am start -n com.google.android.apps.maps/com.google.android.maps.MapsActivity";

} else {

$command = "export DISPLAY=:1 && sudo -u $username retroarch -L /usr/lib/i386-linux-gnu/libretro/ /var/www/html/Reviaco-OS/Users/$username/Apps/Game&Watch/$app_name/launch.mgw";

}





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