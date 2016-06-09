<?php
    $stringData = $_POST['dataString'];

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "users";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // sql to delete a record
    $sql1 = "DELETE FROM users WHERE username='$stringData'";
$sql2 = "DROP DATABASE '$stringData'";
    // use exec() because no results are returned
    $conn->exec($sql1);
$conn->exec($sql2);
rmdir("../../../../Users/$stringData/");
    echo "Record deleted successfully";
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?>