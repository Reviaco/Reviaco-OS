<?php

$stringData = $_POST['dataString'];
$servername = "reviaco.os";
$username = "root";
$password = "root";
$dbname = "users";
$dir = "../../../../Users/$stringData";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // sql to delete a record
    $sql1 = "DELETE FROM users WHERE username='$stringData'";
    $sql2 = "DROP DATABASE $stringData";
    // use exec() because no results are returned
    $conn->exec($sql1);
    $conn->exec($sql2);
    $it = new RecursiveDirectoryIterator($dir, RecursiveDirectoryIterator::SKIP_DOTS);
    $files = new RecursiveIteratorIterator($it,
    RecursiveIteratorIterator::CHILD_FIRST);
    foreach($files as $file) {
    if ($file->isDir()){
        rmdir($file->getRealPath());
    } else {
        unlink($file->getRealPath());
    }
}
rmdir($dir);
    shell_exec("sudo userdel $dataString");
    shell_exec("sudo rm -rf /home/$dataString");
    echo "Record deleted successfully";
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?>
