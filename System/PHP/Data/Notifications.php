<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("reviaco.os", "root", "root", file_get_contents('current_user.txt'));

$result = $conn->query("SELECT title, description, CURRENT_TIMESTAMP FROM notifications");

$outp = "[";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "[") {$outp .= ",";}
    $outp .= '{"Title":"'   . $rs["title"]        . '",';
    $outp .= '"Description":"'   . $rs["description"]        . '",';
    $outp .= '"Time":"'. $rs["CURRENT_TIMESTAMP"]     . '"}'; 
}
$outp .="]";

$conn->close();

echo($outp);

?>