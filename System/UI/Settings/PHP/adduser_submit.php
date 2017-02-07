<?php
/*** begin our session ***/
session_start();

/*** first check that both the username, password and form token have been sent ***/
if(!isset( $_POST['username'], $_POST['password'], $_POST['form_token']))
{
    $message = 'Please enter a valid username and password';
}
/*** check the form token is valid ***/
elseif( $_POST['form_token'] != $_SESSION['form_token'])
{
    $message = 'Invalid form submission';
}

else
{
    /*** if we are here the data is valid and we can insert it into database ***/
    $username = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
    $password = filter_var($_POST['password'], FILTER_SANITIZE_STRING);

    /*** now we can encrypt the password ***/
    $password = sha1( $password );
    
    /*** connect to database ***/
    /*** mysql hostname ***/
    $mysql_hostname = 'localhost';

    /*** mysql username ***/
    $mysql_username = 'root';

    /*** mysql password ***/
    $mysql_password = 'root';

    /*** database name ***/
    $mysql_dbname = 'users';
    $mysql_dbnew = $username ;

    try
    {
        $dbh = new PDO("mysql:host=$mysql_hostname;dbname=$mysql_dbname", $mysql_username, $mysql_password);

        /*** $message = a message saying we have connected ***/

        /*** set the error mode to excptions ***/
        $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        /*** prepare the insert ***/
        $stmt = $dbh->prepare("INSERT INTO users (username, password ) VALUES (:username, :password )");


        /*** bind the parameters ***/
        $stmt->bindParam(':username', $username, PDO::PARAM_STR);
        $stmt->bindParam(':password', $password, PDO::PARAM_STR, 40);

        /*** execute the prepared statement ***/
        $stmt->execute();
        /*** unset the form token session variable ***/
        unset( $_SESSION['form_token'] );

        /*** if all is done, say thanks ***/


        $message = 'New user added';
        $sql = "CREATE DATABASE $username";
        $dbh->exec($sql); 
        $connn = new PDO("mysql:host=$mysql_hostname;dbname=$username", $mysql_username, $mysql_password);

    $sql2 = "CREATE TABLE apps (
id int(11) NOT NULL auto_increment,
name varchar(20) NOT NULL,
description varchar(40) NOT NULL,
type varchar(40) NOT NULL,
PRIMARY KEY (id),
UNIQUE KEY username (name),
    reg_date TIMESTAMP
)";
$sql3 = "CREATE TABLE settings (
id int(11) NOT NULL auto_increment,
volume varchar(20) NOT NULL,
PRIMARY KEY (id),
UNIQUE KEY username (volume),
    reg_date TIMESTAMP
)";
        $sql4 = "CREATE TABLE notifications (
id int(11) NOT NULL auto_increment,
title varchar(20) NOT NULL,
description varchar(20) NOT NULL,
PRIMARY KEY (id),
UNIQUE KEY username (title),
    reg_date TIMESTAMP
)";
$connn->exec($sql2);
$connn->exec($sql3);
$connn->exec($sql4);
mkdir("../../../../Users/$username");
mkdir("../../../../Users/$username/Documents");
mkdir("../../../../Users/$username/Pictures");
mkdir("../../../../Users/$username/Sounds");
mkdir("../../../../Users/$username/Vedios");
mkdir("../../../../Users/$username/Data");
mkdir("../../../../Users/$username/Downlods");
mkdir("../../../../Users/$username/Files");
header("Location: https://localhost/Reviaco-OS/System/UI/Framework/");
die();
    }
    catch(Exception $e)
    {
        /*** check if the username already exists ***/
        if( $e->getCode() == 23000)
        {
            $message = 'Username already exists';  
        }
        else
        {
            /*** if we are here, something has gone wrong with the database ***/
            $message = 'We are unable to process your request. Please try again later"';
        }
    }

}
?>

