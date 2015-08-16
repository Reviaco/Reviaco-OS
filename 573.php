<?php
include "connect.php";
$dir    = 'c:';
$data = scandir($dir);


echo "<pre>";
print_r($data);
echo "</pre>";


?>