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

    <body>
<div id="welcomeAnimation_bg" class="welcomeAnimation_bg">
<video id="welcomeAnimation" class="welcomeAnimation" src="random_src" type="video/mp4"  autoplay ></video>
</div>
        <div id="bg" class="bg"></div>

  <div id="div"></div>

        <div class="nav_bar">
            <img id="back" class="back" src="../../Media/Framework/Back.png" width="50" height="50"></img>
            <img id="home" class="home" src="../../Media/Framework/Home.svg" width="50" height="50"></img>
            <img id="menu" class="menu" src="../../Media/Framework/Menu.png" width="50" height="50"></img>
            <img id="restart_btn command_btn" class="power_ctrl restart_btn" src="../../Media/Framework/Restart.png" width="50" height="50" command="sudo reboot"></img>
            <img id="poweroff_btn command_btn" class="power_ctrl poweroff_btn" src="../../Media/Framework/Shutdown.png" width="50" height="50" command="sudo poweroff"></img>
            <img id="sleep_btn command_btn" class="power_ctrl sleep_btn" src="../../Media/Framework/Sleep.png" width="50" height="50" command="sudo systemctl suspend"></img>
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
                    <div id="pageA" class="page"><b class="a">A</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageB" class="page"><b class="index_letter">B</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageC" class="page"><b class="index_letter">C</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageD" class="page"><b class="index_letter">D</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageE" class="page"><b class="index_letter">E</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageF" class="page"><b class="index_letter">F</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageG" class="page"><b class="index_letter">G</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageH" class="page"><b class="index_letter">H</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageI" class="page"><b class="index_letter">I</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageJ" class="page"><b class="index_letter">J</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageK" class="page"><b class="index_letter">K</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageL" class="page"><b class="index_letter">L</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageM" class="page"><b class="index_letter">M</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageN" class="page"><b class="index_letter">N</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageO" class="page"><b class="index_letter">O</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageP" class="page"><b class="index_letter">P</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageQ" class="page"><b class="index_letter">Q</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageR" class="page"><b class="index_letter">R</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageS" class="page"><b class="index_letter">S</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageT" class="page"><b class="index_letter">T</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageU" class="page"><b class="index_letter">U</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageV" class="page"><b class="index_letter">V</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageW" class="page"><b class="index_letter">W</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageX" class="page"><b class="index_letter">X</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageY" class="page"><b class="index_letter">Y</b><div id="app_list" class="app_list"></div></div>
                    <div id="pageZ" class="page"><b class="index_letter">Z</b><div id="app_list" class="app_list"></div></div>
                </div>
            </div>
        </div>
    </body>

    </html>
