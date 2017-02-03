<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
/*** begin the session ***/



        /*** connect to database ***/
        /*** mysql hostname ***/
        $mysql_hostname = 'localhost';

        /*** mysql username ***/
        $mysql_username = 'root';

        /*** mysql password ***/
        $mysql_password = 'root';

        /*** database name ***/
        $mysql_dbname = 'users';




$conn = new mysqli("localhost", "root", "root", "users");

$result = $conn->query("SELECT username FROM users");

$outp = "[";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "[") {$outp .= ",";}
    $outp .= '{"username":"'   . $rs["username"]     . '"}'; 
    
}
$outp .="]";

$conn->close();

echo($outp);

?>