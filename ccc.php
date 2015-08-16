<?php

$conn=mysqli_connect('localhost','root','root','sarah');
// Let's pretend these values were passed by a form
$dir    = 'C:\xampp\htdocs\Sunshine OS\JS';
$data = glob("*.css");
$images = glob("Images\Covers{*.jpg,*.gif,*.png}", GLOB_BRACE);
print_r($images);
// Insert all the values of $_POST into the database table `artists`, except
// for $_POST['submit'].  Remember, field names are determined by array keys!
$sql = "INSERT INTO music_app (Name)
VALUES ('$data[0]');";
$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[1]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[2]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[3]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[4]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[5]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[6]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[7]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[8]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[9]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[10]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[11]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[12]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[13]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[14]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[15]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[16]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[17]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[18]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[19]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[20]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[21]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[22]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[23]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[24]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[25]');";$sql .= "INSERT INTO music_app (Name)
VALUES ('$data[26]')";


if ($conn->multi_query($sql) === TRUE) {
    echo "New records created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


?>