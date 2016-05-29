<?php

/*** begin the session ***/
session_start();

if(!isset($_SESSION['id']))
{
    $message = 'You must be logged in to access this page';
}
else
{
    try
    {
        /*** connect to database ***/
        /*** mysql hostname ***/
        $mysql_hostname = 'localhost';

        /*** mysql username ***/
        $mysql_username = 'root';

        /*** mysql password ***/
        $mysql_password = 'root';

        /*** database name ***/
        $mysql_dbname = 'users';


        /*** select the users name from the database ***/
        $dbh = new PDO("mysql:host=$mysql_hostname;dbname=$mysql_dbname", $mysql_username, $mysql_password);
        /*** $message = a message saying we have connected ***/

        /*** set the error mode to excptions ***/
        $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        /*** prepare the insert ***/
        $stmt = $dbh->prepare("SELECT username FROM users 
        WHERE id = :id");

        /*** bind the parameters ***/
        $stmt->bindParam(':id', $_SESSION['id'], PDO::PARAM_INT);

        /*** execute the prepared statement ***/
        $stmt->execute();

        /*** check for a result ***/
        $username = $stmt->fetchColumn();

        /*** if we have no something is wrong ***/
        if($username == false)
        {
            $message = 'Access Error';
        }
        else
        {
            $message = 'Welcome '.$username;
        }
    }
    catch (Exception $e)
    {
        /*** if we are here, something is wrong in the database ***/
        $message = 'We are unable to process your request. Please try again later"';
    }
}

?>
<html>
<head>
<link rel="import" href="System/Res.html">
  <style>
    /* Prevents slides from flashing */
    #slides {
      display:none;
    }
.bottom  {
          position: fixed;
          width: 100%;
          bottom: 0%;
height: 40px;

}
.back  {
left: 0%;
}
.home  {
left: 50%
}
.menu  {
left: 100%;
}
.background {
position: fixed;
height: 100%;
width: 100%;
z-index: 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
-webkit-filter: blur(20px);
}
  </style>
 <script>
    $(function() {
      $('#slides').slidesjs({
        width: 940,
        height: 528,
      navigation: false,
        play: {
          active: false,
          auto: true,
          interval: 4000,
          swap: true
        },
    pagination: {
      active: false
    }

      });
    });
  </script>
<script>
                    <script>
                        var xmlhttp = new XMLHttpRequest();
                        var url = "http://localhost/Customers_MYSQL23.php";

                        xmlhttp.onreadystatechange = function () {
                            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                                myFunction(xmlhttp.responseText);
                            }
                        }
                        xmlhttp.open("GET", url, true);
                        xmlhttp.send();

                        function myFunction(response) {
                            var arr = JSON.parse(response);
                            var i;

                            var out = "<div>";
                            for (i = 0; i < arr.length; i++) {

                                out += "<paper-card image=\"Apps/" + arr[i].Name + "/Media/icon.png\"" + " class=\"amber\"" + "><div class=\"card-content\"" + ">" + arr[i].Description + "</div>";

                            }
                            out += "</paper-card></div>";
                            document.getElementById("slides").innerHTML = out;
                        }
                    </script>

</head>
<body>
        <img class="background" src="System/Media/Backgrounds/3.jpg"></img>
<h1>Start</h1>
  <div id="slides">
<paper-card image="http://placehold.it/350x150/FFC107/000000" class="amber">

    <div class="card-content">New cafe opened on Valencia St.</div>
  </paper-card>

    <img src="http://placehold.it/940x528">
    <img src="http://placehold.it/940x528">
    <img src="http://placehold.it/940x528">
    <img src="http://placehold.it/940x528">
    <img src="http://placehold.it/940x528">
  </div>
<div class="bottom">
<img class="back" src="System/Media/Framework/Back.png"></img>
<img class="home" src="System/Media/Framework/Home.png"></img>
<img class="menu" src="System/Media/Framework/Menu.png"></img>
</div>
</body>
</html>