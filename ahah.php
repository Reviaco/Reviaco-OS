<?php

$conn=mysqli_connect('localhost','root','root','sarah');
// Let's pretend these values were passed by a form
$dir    = 'C:\xampp\htdocs\SunshineOS\JS';
$data = glob("*.css");
$images = glob("Images\Covers{*.jpg,*.gif,*.png}", GLOB_BRACE);
print_r($images);
// Insert all the values of $_POST into the database table `artists`, except
// for $_POST['submit'].  Remember, field names are determined by array keys!
$sql = "INSERT INTO music_app (Name)
VALUES ('$data[i]')";


if ($conn->multi_query($sql) === TRUE) {
    echo "New records created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


?>