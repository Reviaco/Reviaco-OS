<?php

$conn=mysqli_connect('localhost','root','root','sarah');
// Let's pretend these values were passed by a form
$files = scandir ('c:\xampp\htdocs'); 
$arrlength = count($files);

for($x = 0; $x <  $arrlength; $x++) {
     echo $files[$x];
     echo "<br>";
// Insert all the values of $_POST into the database table `artists`, except
// for $_POST['submit'].  Remember, field names are determined by array keys!
$sql = "INSERT INTO music_app (Name)
VALUES ('$files[$x]')";
}


if ($conn->multi_query($sql) === TRUE) {
    echo "New records created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


?>