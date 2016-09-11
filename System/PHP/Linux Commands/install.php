<?php

$app = $_POST['app_name'];
$type = $_POST['type'];

header("Access-Control-Allow-Origin: *");

header("Content-Type: application/json; charset=UTF-8");

/*** begin the session ***/

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

$link = mysqli_connect("localhost", "root", "root", $username);

// Check connection

if($link === false){

die("ERROR: Could not connect. " . mysqli_connect_error());

}

// Attempt insert query execution

$sql = "INSERT INTO apps (name, type, description) VALUES ('$app', '$type', '$description')";

if(mysqli_query($link, $sql)){

echo "Records added successfully.";

} else{

echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);

}

// Close connection

mysqli_close($link);

if ($type == "Native") {

$command = "export DISPLAY=:0 && cd /var/www/html/Reviaco-OS/Users/$username/Downloads && wget https://github.com/Reviaco/Echo-Store/raw/master/Apps/$type/$app/main.zip && sudo -u $username mkdir -p /var/www/html/Reviaco-OS/Users/$username/Apps/$app && sudo -u $username unzip /var/www/html/Reviaco-OS/Users/$username/Downloads/main.zip -d /var/www/html/Reviaco-OS/Users/$username/Apps/$app && cd /var/www/html/Reviaco-OS/Users/$username/Apps/$app && wget https://github.com/Reviaco/Echo-Store/raw/master/Apps/$type/$app/icon.png && sudo -u $username rm -r -f /var/www/html/Reviaco-OS/Users/$username/Downloads/main.zip";

} elseif ($type == "Linux") {

$command = "export DISPLAY=:0 && sudo -u $username apt-get update && sudo -u $username apt-get -y install $app && sudo -u $username mkdir -p /var/www/html/Reviaco-OS/Users/$username/Apps/$app && cd /var/www/html/Reviaco-OS/Users/$username/Apps/$app && wget https://github.com/Reviaco/Echo-Store/raw/master/Apps/$type/$app/icon.png";

} elseif ($type == "Android") { 

$command = "export DISPLAY=:0 && cd /var/www/html/Reviaco-OS/Users/$username/Downloads && wget https://github.com/Reviaco/Echo-Store/raw/master/Apps/$type/$app/main.apk && sudo -u $username adb install main.apk && sudo -u $username mkdir -p /var/www/html/Reviaco-OS/Users/$username/Apps/$app && cd /var/www/html/Reviaco-OS/Users/$username/Apps/$app && wget https://github.com/Reviaco/Echo-Store/raw/master/Apps/$type/$app/icon.png && sudo -u $username rm -r -f /var/www/html/Reviaco-OS/Users/$username/Downloads/main.apk";

} else {

}


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

$conn->close();

?>

