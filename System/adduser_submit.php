<?php
/*** begin our session ***/
session_start();

/*** first check that both the username, password and form token have been sent ***/
if(!isset( $_POST['phpro_username'], $_POST['phpro_password'], $_POST['form_token']))
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
    $phpro_username = filter_var($_POST['phpro_username'], FILTER_SANITIZE_STRING);
    $phpro_password = filter_var($_POST['phpro_password'], FILTER_SANITIZE_STRING);

    /*** now we can encrypt the password ***/
    $phpro_password = sha1( $phpro_password );
    
    /*** connect to database ***/
    /*** mysql hostname ***/
    $mysql_hostname = 'localhost';

    /*** mysql username ***/
    $mysql_username = 'root';

    /*** mysql password ***/
    $mysql_password = 'root';

    /*** database name ***/
    $mysql_dbname = 'phpro_auth';
    $mysql_dbnew = $phpro_username ;

    try
    {
        $dbh = new PDO("mysql:host=$mysql_hostname;dbname=$mysql_dbname", $mysql_username, $mysql_password);

        /*** $message = a message saying we have connected ***/

        /*** set the error mode to excptions ***/
        $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        /*** prepare the insert ***/
        $stmt = $dbh->prepare("INSERT INTO phpro_users (phpro_username, phpro_password ) VALUES (:phpro_username, :phpro_password )");


        /*** bind the parameters ***/
        $stmt->bindParam(':phpro_username', $phpro_username, PDO::PARAM_STR);
        $stmt->bindParam(':phpro_password', $phpro_password, PDO::PARAM_STR, 40);

        /*** execute the prepared statement ***/
        $stmt->execute();
        /*** unset the form token session variable ***/
        unset( $_SESSION['form_token'] );

        /*** if all is done, say thanks ***/
        $message = 'New user added';
        $sql = "CREATE DATABASE $phpro_username";
        $dbh->exec($sql); 
        $connn = new PDO("mysql:host=$mysql_hostname;dbname=$phpro_username", $mysql_username, $mysql_password);

    $sql2 = "CREATE TABLE Apps (
ID int(11) NOT NULL auto_increment,
Name varchar(20) NOT NULL,
Icon char(40) NOT NULL,
PRIMARY KEY (ID),
UNIQUE KEY phpro_username (Name),
    reg_date TIMESTAMP
)";
    $connn->exec($sql2);
mkdir("./Users/$phpro_username");
mkdir("./Users/$phpro_username/Documents");
mkdir("./Users/$phpro_username//Pictures");
mkdir("./Users/$phpro_username/Sounds");
mkdir("./Users/$phpro_username/Vedios");
mkdir("./Users/$phpro_username/Data");
mkdir("./Users/$phpro_username/Downlods");
mkdir("./Users/$phpro_username/Files");
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

<html>
<head>
<title>PHPRO Login</title>
</head>
<body>
<p><?php echo $message; ?>
</body>
</html>
