<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$stringData = $_POST['dataString'];
$filename = '../../../"$stringData"';

echo  filesize($filename);
?>

