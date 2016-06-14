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
        <link href="style.css" rel="stylesheet">
        <link rel="import" href="./polymer-style.html">

    </head>

    <body onload="carousel();">


        <img class="background" src="../../Media/Backgrounds/3.jpg"></img>

        <div id="notification_centre_show" class="notification_centre_show"></div>
        <div id="notification_centre" class="notification_centre">
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
            <img id="back" class="back" src="../../Media/Framework/Back.png" width="50" height="50"></img>
            <img id="home" class="home" src="../../Media/Framework/Home.svg" width="50" height="50"></img>
            <img id="menu" class="menu" src="../../Media/Framework/Menu.png" width="50" height="50"></img>
            <img id="restart_btn" class="power_ctrl restart_btn" src="../../Media/Framework/Restart.png" width="50" height="50"></img>
            <img id="poweroff_btn" class="power_ctrl poweroff_btn" src="../../Media/Framework/Shutdown.png" width="50" height="50"></img>
            <div class="bubbleback"></div>
            <div class="bubble"><i class="material-icons power_btn_icon">power_settings_new</i></div>
            <div class="bubble-wrap">

            </div>
        </div>
        <div class="status_bar">
            <div id="clock" class="clock"></div>
        </div>
        <div id="sound_hud" class="sound_hud">
            <div>Sound Volume</div>
            <paper-slider id="volume_slider" class="red" value="" max="100" editable></paper-slider>
        </div>

        <div id="recent_panel" class="recent_panel">

        </div>
        <div id="appbook-viewport" class="appbook-viewport">
            <div class="container">
                <div class="appbook">

                    iv>
                    <div class="page"><b class="a">A</b><div id="app_list" class="app_list"><div id="gimp" class=""><img width="50" width="50" src="../../../Users/default/Apps/Linux Apps/Icons/gimp.png" /><div class="app_title"><h4 class="app_title">Gimp</h4></div></div></div>
                    </div>
                    <div class="page"><b class="index_letter">B</b></div>
                    <div class="page"><b class="index_letter">C</b></div>
                    <div class="page"><b class="index_letter">D</b></div>
                    <div class="page"><b class="index_letter">E</b></div>
                    <div class="page"><b class="index_letter">F</b></div>
                    <div class="page"><b class="index_letter">G</b></div>
                    <div class="page"><b class="index_letter">H</b></div>
                    <div class="page"><b class="index_letter">I</b></div>
                    <div class="page"><b class="index_letter">J</b></div>
                    <div class="page"><b class="index_letter">K</b></div>
                    <div class="page"><b class="index_letter">L</b></div>
                    <div class="page"><b class="index_letter">M</b></div>
                    <div class="page"><b class="index_letter">N</b></div>
                    <div class="page"><b class="index_letter">O</b></div>
                    <div class="page"><b class="index_letter">P</b></div>
                    <div class="page"><b class="index_letter">Q</b></div>
                    <div class="page"><b class="index_letter">R</b></div>
                    <div class="page"><b class="index_letter">S</b></div>
                    <div class="page"><b class="index_letter">T</b></div>
                    <div class="page"><b class="index_letter">U</b></div>
                    <div class="page"><b class="index_letter">V</b></div>
                    <div class="page"><b class="index_letter">W</b></div>
                    <div class="page"><b class="index_letter">X</b></div>
                    <div class="page"><b class="index_letter">Y</b></div>
                    <div class="page"><b class="index_letter">Z</b></div>
                </div>
            </div>
        </div>
    </body>

    </html>