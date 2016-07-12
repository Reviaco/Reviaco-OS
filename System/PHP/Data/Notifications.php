<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$username = file_get_contents('current_user.txt');

$conn = new mysqli("localhost", "root", "root", $username);

$result = $conn->query("SELECT title, description FROM notifications");

$outp = "[";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "[") {$outp .= ",";}
    $outp .= '{"title":"'   . $rs["title"]        . '",';
    $outp .= '"description":"'. $rs["description"]     . '"}'; 
}
$outp .="]";

$conn->close();

echo($outp);

?>

