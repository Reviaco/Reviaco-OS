<?php

/*** begin the session ***/
session_start();

if(!isset($_SESSION['user_id']))
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
        $stmt->bindParam(':id', $_SESSION['user_id'], PDO::PARAM_INT);

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
            $message = $username;
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
        <link rel="import" href="../../Res.html">
        <script src="./script.js"></script>
        <link href="./style.css" rel="stylesheet">
        <link rel="import" href="./polymer-style.html">

    </head>

    <body onload="carousel();">
        
        <img class="background" src="../../Media/Backgrounds/3.jpg"></img>

        <div class="notification_centre_show" onmouseover="notification_centre_toggle();"></div>
        <div class="notification_centre" onmouseout="notification_centre_toggle();">
            <div class="overlay"></div>
            <div class="top">

                <div class="user-profile">
                    <img src="../../Media/Avatars/6.svg">
                    <div class="user-details">
                        <h4><?php echo $message; ?></h4>
                        <p>
                            <?php echo $message; ?>
                        </p>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="filter-btn">
                <a id="one" href="#"><i class="ion-ios-checkmark-outline"></i></a>
                <a id="two" href="#"><i class="ion-ios-alarm-outline"></i></a>
                <a id="three" href="#"><i class="ion-ios-heart-outline"></i></a>
                <a id="all" href="#"><i class="ion-ios-star-outline"></i></a>
                <span class="toggle-btn ion-android-funnel"></span>
            </div>
            <div class="clearfix"></div>
            <div class="bottom">
                <div class="title">
                    <h3>Notifications</h3>
                    <small>February 8,2015</small>
                </div>
                <ul class="tasks">

                </ul>
            </div>
        </div>


        <div class="nav_bar">
            <img class="back" src="../../Media/Framework/Back.png"></img>
            <img class="home" src="../../Media/Framework/Home.png"></img>
            <img class="menu" src="../../Media/Framework/Menu.png"></img>
            <i class="material-icons power_ctrl restart_btn">replay</i>
            <i class="material-icons power_ctrl poweroff_btn">power_settings_new</i>

            <div class="bubbleback"></div>
            <div class="bubble"><i class="material-icons power_btn_icon">power_settings_new</i></div>
            <div class="bubble-wrap">

            </div>
        </div>
        <div class="status_bar"></div>
<div id="sound_hud" class="sound_hud">
            <div>Sound Volume</div>
            <paper-slider id="volume_slider" class="red" value="" max="100" editable></paper-slider>
        </div>

    </body>

    </html>