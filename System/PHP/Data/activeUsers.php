<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
/*** begin the session ***/
session_start();

$conn = new mysqli("reviaco.os", "root", "root", "users");

$result = $conn->query("SELECT username FROM users WHERE active LIKE '1'");

$outp = "[";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "[") {$outp .= ",";}
    $outp .= '{"username":"'   . $rs["username"]        . '",';
    $outp .= '"running":"'. $rs["running"]     . '"}'; 
}
$outp .="]";

$conn->close();

echo($outp);

?>