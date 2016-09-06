<?php

$app = 'catt';

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

$sql = "INSERT INTO apps (name) VALUES ('$app')";

if(mysqli_query($link, $sql)){

echo "Records added successfully.";

} else{

echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);

}

// Close connection

mysqli_close($link);


$command = "export DISPLAY=:1 && sudo -u $username mkdir /var/www/html/Reviaco-OS/Users/$username/Downloads/$app/$app/ & sudo -u $username unzip /var/www/html/Reviaco-OS/Users/$username/Downloads/$app/catt.zip -d /var/www/html/Reviaco-OS/Users/$username/Downloads/$app/$app & sudo -u $username cp -a /var/www/html/Reviaco-OS/Users/$username/Downloads/$app/$app/ /var/www/html/Reviaco-OS/Users/$username/Apps/";

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

