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
        $mysql_dbname = 'phpro_auth';


        /*** select the users name from the database ***/
        $dbh = new PDO("mysql:host=$mysql_hostname;dbname=$mysql_dbname", $mysql_username, $mysql_password);
        /*** $message = a message saying we have connected ***/

        /*** set the error mode to excptions ***/
        $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        /*** prepare the insert ***/
        $stmt = $dbh->prepare("SELECT phpro_username FROM phpro_users 
        WHERE phpro_user_id = :phpro_user_id");

        /*** bind the parameters ***/
        $stmt->bindParam(':phpro_user_id', $_SESSION['user_id'], PDO::PARAM_INT);

        /*** execute the prepared statement ***/
        $stmt->execute();

        /*** check for a result ***/
        $phpro_username = $stmt->fetchColumn();

        /*** if we have no something is wrong ***/
        if($phpro_username == false)
        {
            $message = 'Access Error';
        }
        else
        {
            $message = 'Welcome '.$phpro_username;
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
        <script>
            angular.module('demoapp', ['ngMdIcons'])
                .controller('democtrl', function ($scope) {

                    $scope.clickIcon = 'network_wifi';
                    $scope.clickIconMorph9 = function () {


                        $scope.clickIcon = 'info';


                    }
                    $scope.clickIconMorph1 = function () {


                        $scope.clickIcon = 'accessibility';


                    }
                    $scope.clickIconMorph2 = function () {


                        $scope.clickIcon = 'access_time';


                    }
                    $scope.clickIconMorph3 = function () {


                        $scope.clickIcon = 'apps';


                    }


                });
        </script>




        <link href="CSS/Start Screen/Settings Sidebar.css" rel="stylesheet" />

        <link href="CSS/Start Screen/ahmed sidebar.css" rel="stylesheet" />
        <link href="CSS/Start Screen/Background.css" rel="stylesheet" />
        <link href="CSS/Start Screen/Packery.css" rel="stylesheet" />
        <link href="CSS/Start Screen/Sidebar.css" rel="stylesheet" />
        <link href="CSS/Start Screen/Iframes.css" rel="stylesheet" />
        <link href="CSS/Start Screen/Text.css" rel="stylesheet" />


        <script src="https://raw.githubusercontent.com/pisi/Longclick/master/jquery.longclick-min.js"></script>
        <script>
            function UpdateTime() {
                var today = new Date();
                var hour = today.getHours();
                var mins = today.getMinutes();
                var secs = today.getSeconds();

                if (secs <= 9) {
                    secs = "0" + secs
                }

                var out = hour + ":" + mins + ":" + secs;



                setTimeout("UpdateTime()", 1000)



                document.getElementById("clock").innerHTML = out;
            }
        </script>


        <script>
            $(document).ready(function () {
                $(function () {
                    $('.tlt').textillate({ in : {
                            effect: 'rollIn'
                        }
                        , delay: 10
                    });
                });
            });
        </script>


        <style>
            .Button {
                position: realtive;
                width: 100%;
                margin-left: 0px;
            }
            
            .bottom {
                position: fixed;
                bottom: 0px;
                width: 100%;
                height: 20%;
                background: #ffffff;
                z-index: 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
                display: none;
            }
            
            .set {
                position: fixed;
                z-index: 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
                width: 100%;
                height: 100%;
                top: 0px;
                left: 0px;
                display: none;
                background-color: white;
            }
            
            .backgroundS {
                position: relative;
                top: 30%;
                background-image: url('Images/background.png');
                width: 70px;
                height: 70px;
                left: 5%;
                background-size: 100% 100%;
            }
            
            .Button1 {
                float: left;
                clear: both;
                padding: 0 5px 5px 5px;
                text-align: left;
                margin: 0 0 10px 0;
            }
            
            .ul1 {
                margin-top: 13%;
            }
            
            .power {
                z-index: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999;
                position: fixed;
                left: 35%;
                top: 30%;
                width: 28%;
                height: 45%;
                display: none;
            }
            
            .splash {
                position: fixed;
                width: 100%;
                height: 100%;
                background-color: #00bcd4;
            }
            
            h1 {
                position: absolute;
                left: 40%;
                top: 45%;
                color: #ffffff;
                font-size: 50px;
            }
            
            .foldUnfold {
                -webkit-animation: foldUnfold 2000ms linear both;
                animation: foldUnfold 2000ms linear both;
            }
            
            .back {
                background-image: url('images/triangle.png');
                height: 20px;
                width: 17px;
                position: fixed;
                bottom: 3%;
                display: flex;
                z-index: 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
                left: 15%;
            }
            
            .home {
                background-image: url('images/circle.png');
                height: 18px;
                width: 19px;
                position: fixed;
                bottom: 3%;
                display: flex;
                z-index: 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
                left: 48%;
            }
            
            .bar {
                background-image: url('images/gradient.png');
                height: 64px;
                width: 100%;
                position: fixed;
                bottom: 0%;
                display: flex;
                z-index: 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
            }
            
            .bar1 {
                background-image: url('images/gradient.png');
                height: 30px;
                width: 100%;
                position: fixed;
                top: 0%;
                display: flex;
                z-index: 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
                transform: rotate(180deg);
            }
            
            .menu {
                background-image: url('images/square.png');
                height: 16px;
                width: 17px;
                position: fixed;
                bottom: 3%;
                display: flex;
                z-index: 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
                right: 15%;
            }
            
            .status_bottom {
                background-color: #263238;
                border-redius: 3px;
                position: fixed;
                height: 461px;
                right: 0px;
                top: 10%;
                width: 344px;
                display: flex;
                z-index: 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
            }
            
            .status_topA {
                position: fixed;
                width: 95%;
                height: 100px;
                display: flex;
                z-index: 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
                top: 20px;
                Left: 2.5%;
                Right: 2.5%;
            }
            
            .status_topB {
                background-color: #384248;
                position: fixed;
                box-shadow: 0px 1px 5px 0.00px rgba(0, 0, 0, 0.5);
                width: 95%;
                height: 100px;
                display: flex;
                z-index: 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
                top: -25px;
                Left: 2.5%;
                Right: 2.5%;
            }
            
            .clockA {
                height: 11px;
                left: 50px;
                width: 38px;
                position: absolute;
                top: 25%;
                color: #ffffff;
            }
            
            .date {
                height: 14px;
                left: 50px;
                width: 135px;
                position: absolute;
                top: 50%;
                color: #ffffff;
            }
            
            .splat {
                -webkit-animation: splat 865ms linear both;
                animation: splat 865ms linear both;
            }
            
            .spalsh {}
            
            .contents {
                display: none;
            }
            
            .power_cover {
                position: relative;
                width: 100%;
                height: 40%;
                background: tomato;
            }
            
            .power_menu {
                position: absolute;
                width: 100%;
                height: 60%;
                top: 165px;
                left: 0px;
                background: #eeeeee;
            }
            
            .current {}
            
            .command {
                display: none;
            }
        </style>
        <style>
            .command {
                display: none;
            }
            
            p {
                color: white;
            }
            
            .clock {
                position: relative;
                width: 350px;
                height: 350px;
                background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjUwJSIgY3k9IiIgcj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2U5MWU2MyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2U5MWU2MyIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
                background-size: 100%;
                background-image: -webkit-radial-gradient(center, ellipse cover, #e91e63 0%, #e91e63 100%);
                background-image: radial-gradient(ellipse cover at center, #e91e63 0%, #e91e63 100%);
                border-radius: 100%;
                box-shadow: 2px 3px 10px #bbb;
                -ms-transform: rotate(180deg);
                -webkit-transform: rotate(180deg);
                transform: rotate(180deg);
                margin: auto;
                border: 35px solid #9c27b0;
                right: 0;
                top: 10px;
            }
            
            .clock:after {
                content: '';
                position: absolute;
                width: 55px;
                height: 55px;
                border-radius: 100%;
                margin: auto;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                background: #6237B4;
            }
            
            .minute,
            .hour {
                position: absolute;
                width: 30px;
                background: #fff;
                height: 125px;
                border-radius: 30px;
                -webkit-transition: 0.3s;
                transition: 0.3s;
                box-shadow: -1px 0 #7E5FBE, -5px 0px 10px #7E5FBE;
                -ms-transform-origin: 50% 0%;
                -webkit-transform-origin: 50% 0%;
                transform-origin: 50% 0%;
                left: 0;
                margin: auto;
                right: 0;
                top: 50%;
            }
            
            .hour {
                height: 95px;
            }
            /*clock version 2 */
            
            .clock2 {
                position: relative;
                width: 350px;
                height: 350px;
                background: rgba(212, 212, 212, 0.5);
                /*rgba to change only background opacity instead of all the object, using alpha property, you can change the last value (0-1), that is the alpha value*/
                background-size: 100%;
                background-image: -webkit-radial-gradient(center, ellipse cover, #e91e63 0%, #e91e63 100%);
                background-image: radial-gradient(ellipse cover at center, #e91e63 0%, #e91e63 100%);
                border-radius: 100%;
                -ms-transform: rotate(180deg);
                -webkit-transform: rotate(180deg);
                transform: rotate(180deg);
                margin: auto;
                border: 17px solid #00ACC1;
                /* clock margin (color study) */
                right: 0;
                top: 10px;
            }
            
            .clock2:after {
                content: '';
                position: absolute;
                width: 34px;
                /* joiner radius smaller thahn preview*/
                height: 34px;
                border-radius: 100%;
                margin: auto;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                background: #ffffff;
                /* clock pointers joiner (circle)*/
                box-shadow: -1px 0 #676E75, -5px 0px 10px #676E75;
            }
            
            .minute2,
            .hour2 {
                position: absolute;
                width: 15px;
                /* thin sticks give a better look than preview*/
                background: #fff;
                height: 120px;
                /* large sticks contrast with width*/
                border-radius: 0px;
                /* sticks rounded border equal=o material design style */
                -webkit-transition: 0.3s;
                transition: 0.3s;
                box-shadow: -1px 0 #676E75, -5px 0px 10px #676E75;
                -ms-transform-origin: 50% 0%;
                -webkit-transform-origin: 50% 0%;
                transform-origin: 50% 0%;
                left: 0;
                margin: auto;
                right: 0;
                top: 50%;
            }
            
            .hour2 {
                height: 95px;
            }
            /*clock3.0 starts here (google style)*/
            
            .clock3 {
                position: relative;
                width: 350px;
                height: 350px;
                background: #8FA3FE;
                background-size: 100%;
                background-image: -webkit-radial-gradient(center, ellipse cover, #e91e63 0%, #e91e63 100%);
                background-image: radial-gradient(ellipse cover at center, #e91e63 0%, #e91e63 100%);
                border-radius: 100%;
                -ms-transform: rotate(180deg);
                -webkit-transform: rotate(180deg);
                transform: rotate(180deg);
                margin: auto;
                border: 20px solid #CED8DA;
                /* clock margin (color study), color look diferent from hexadecimal to screen check on high resolution screen (macbook) */
                right: 0;
                top: 10px;
            }
            
            .clock3:after {
                content: '';
                position: absolute;
                width: 26px;
                /* joiner radius smaller thahn preview*/
                height: 26px;
                border-radius: 100%;
                margin: auto;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                box-shadow: -1px 0 #676E75, -5px 0px 15px #676E75;
                background: #ffffff;
                /* clock pointers joiner (circle)*/
            }
            
            .minute3,
            .hour3 {
                /* ask ahmed javascript hours*degres(between seconds and minutes) + radius different color (+opacity 0.7 darker color ex:#31373F */
                position: absolute;
                width: 14.5px;
                /* thin sticks give a better look than preview*/
                background: #FFFFFF;
                /*aproximar mais de branco*/
                height: 176px;
                /* large sticks contrast with width*/
                border-radius: 0px;
                /* sticks rounded border equal=o material design style */
                -webkit-transition: 0.3s;
                transition: 0.3s;
                box-shadow: -1px 0 #51585f, -5px 0px 10px #51585f;
                -ms-transform-origin: 50% 0%;
                -webkit-transform-origin: 50% 0%;
                transform-origin: 50% 0%;
                left: 0;
                margin: auto;
                right: 0;
                top: 50%;
            }
            
            .hour3 {
                height: 125px;
            }
            
            .seconds3 {
                /*make seconds pointer move*/
                position: absolute;
                width: 10px;
                /* thin sticks give a better look than preview*/
                background: #FFFFFF;
                /*aproximar mais de branco*/
                height: 176px;
                /* large sticks contrast with width*/
                border-radius: 0px;
                /* sticks rounded border equal=o material design style */
                -webkit-transition: 0.3s;
                transition: 0.3s;
                box-shadow: -1px 0 #51585f, -5px 0px 10px #51585f;
                -ms-transform-origin: 50% 0%;
                -webkit-transform-origin: 50% 0%;
                transform-origin: 50% 0%;
                left: 0;
                margin: auto;
                right: 0;
                top: 50%;
            }
        </style>
        <style type="text/css">
            body {
                background-size: 100% 100%;
                background-repeat: no-repeat;
            }
            
            .bg0 {
                background-image: url('Backgrounds/1.jpg');
            }
            
            bg2 {
                background-image: url('Backgrounds/2.jpg');
                background-size: 100% 100%;
            }
            
            #demo {
                width: 100%;
                height: 100%;
                visibility: hidden;
                cursor: hand;
                cursor: -moz-grab;
                cursor: -webkit-grab;
                cursor: grab;
            }
            
            #dragend {
                position: absolute;
                bottom: 50px;
                right: 50px;
                padding: 18px;
                color: #fff;
                border-radius: 3px;
                width: 150px;
                font-size: 15px;
            }
            
            #dragend h1 {
                font-size: 15px;
                font-weight: normal;
                margin-bottom: 12px;
            }
            
            #dragend a {
                text-decoration: underline;
                color: #fff
            }
            
            .hg {
                position: fixed;
                left: 30px;
                bottom: 100px;
                margin: auto;
                z-index: 9999999999999999999999999999999999999999999999;
            }
            
            iframe {
                position: fixed;
                top: 0px;
                width: 100%;
                height: 100%;
                margin: auto auto auto 0;
                z-index: 999;
                border-style: solid;
                border-width: 10px;
            }
            
            ul {}
            
            #li {
                float: left;
                width: 25%;
                height: 25%;
                margin: 10px;
            }
            
            .li_anim {
                transform: scale(0);
                -o-transform: scale(0);
                -ms-transform: scale(0);
                -moz-transform: scale(0);
                -webkit-transform: scale(0);
                animation: display 0.3s;
                animation-fill-mode: forwards;
            }
            
            @keyframes display {
                0% {
                    transform: scale(0);
                }
                100% {
                    transform: scale(1);
                }
            }
            
            #li_anim:nth-child(2) {
                animation-delay: .2s;
                -o-animation-delay: .2s;
                -ms-animation-delay: .2s;
                -moz-animation-delay: .2s;
                -webkit-animation-delay: .2s;
            }
            
            #li_anim:nth-child(3) {
                animation-delay: .3s;
                -o-animation-delay: .3s;
                -ms-animation-delay: .3s;
                -moz-animation-delay: .3s;
                -webkit-animation-delay: .3s;
            }
            
            #li_anim:nth-child(4) {
                animation-delay: .4s;
                -o-animation-delay: .4s;
                -ms-animation-delay: .4s;
                -moz-animation-delay: .4s;
                -webkit-animation-delay: .4s;
            }
            
            #li_anim:nth-child(5) {
                animation-delay: .5s;
                -o-animation-delay: .5s;
                -ms-animation-delay: .5s;
                -moz-animation-delay: .5s;
                -webkit-animation-delay: .5s;
            }
            
            #li_anim:nth-child(6) {
                animation-delay: .6s;
                -o-animation-delay: .6s;
                -ms-animation-delay: .6s;
                -moz-animation-delay: .6s;
                -webkit-animation-delay: .6s;
            }
            
            #li_anim:nth-child(7) {
                animation-delay: .7s;
                -o-animation-delay: .7s;
                -ms-animation-delay: .7s;
                -moz-animation-delay: .7s;
                -webkit-animation-delay: .7s;
            }
            
            #li_anim:nth-child(8) {
                animation-delay: .8s;
                -o-animation-delay: .8s;
                -ms-animation-delay: .8s;
                -moz-animation-delay: .8s;
                -webkit-animation-delay: .8s;
            }
        </style>
        <style>
            .bg {
                position: relative;
                width: 100%;
                height: 100%;
            }
            
            .bg1 {
                background-image: url('Backgrounds/1.jpg');
                background-size: 100% 100%;
            }
        </style>
        <link href="CSS/Normalize/normalize.css" rel="stylesheet" />




    </head>

    <body class="bg0" onload="UpdateTime(); UpdateDate();" onkeypress="my()" ng-app="demoapp" ng-controller="democtrl" class="ng-scope">
        <div class="bottom">
            <div class="backgroundS"></div>

        </div>
        <div class="set">
            <paper-toolbar>
                <paper-icon-button icon="menu" on-tap="menuAction"></paper-icon-button>
                <div class="title">Background</div>
                <paper-icon-button icon="more-vert" on-tap="moreAction"></paper-icon-button>
            </paper-toolbar>
            <ul>
                <li id="li bg1" class="li_anim" class="li_anim">
                    <paper-material elevation="3">

                        <div class="bg bg1"></div>
                </li>
                <li id="li bg2" class="li_anim">
                    <paper-material elevation="3">

                        <div class="bg bg2"></div>
                </li>
                <li id="li" class="li_anim">
                    <paper-material elevation="3">

                        <div class="bg bg1"></div>
                </li>
                <li id="li" class="li_anim">
                    <paper-material elevation="3">

                        <div class="bg bg1"></div>
                </li>
                <li id="li" class="li_anim">
                    <paper-material elevation="3">

                        <div class="bg bg1"></div>
                </li>
                <li id="li" class="li_anim">
                    <paper-material elevation="3">

                        <div class="bg bg1"></div>
                </li>
            </ul>
            </paper-material>
        </div>
        <div class="splash">

            <h1 class="tlt"><?php echo $message; ?></h1>
        </div>
        <div class="power">
            <div class="power_cover"></div>
            <iron-a11y-keys target="{{}}" keys="up down left right" on-keys-pressed="myFunction()"></iron-a11y-keys>
            <div class="power_menu">
                <ul>
                    <ul class="ul1">
                        <li>

                            <paper-button class="Button" id="power_off" type="submit">
                                <p class="power_off command">sudo init 0</p>
                                <div class="Button1">
                                    <ng-md-icon icon="settings_power" style="fill: #2196f3" size="25"></ng-md-icon>Power off</div>
                            </paper-button>
                        </li>
                        <li>
                            <paper-button class="Button" id="reboot" name="reboot">
                                <p class="reboot command">shutdown -r</p>
                                <div class="Button1">
                                    <ng-md-icon icon="refresh" style="fill: orange" size="25"></ng-md-icon>Reboot</div>
                            </paper-button>
                        </li>
                        <li>
                            <paper-button class="Button" id="sleep" value="start notepad">
                                <p class="sleep command">gnome-session-quit</p>
                                <div class="Button1">
                                    <ng-md-icon icon="snooze" style="fill: grey" size="25"></ng-md-icon>Log out</div>
                            </paper-button>
                        </li>
                    </ul>
            </div>
        </div>
        <div class="contents">


            <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>



            <p id="level"></p>




            <div class="bar">
                <div class="back"></div>
                <div class="home">
                    <paper-ripple>
                        <div id="background" class="style-scope paper-ripple" style="opacity: 0.00279999999329447;"></div>
                        <div id="waves" class="style-scope paper-ripple"></div>
                    </paper-ripple>
                </div>
                <div class="menu"></div>
            </div>

            <div class="bar1"></div>

            <div id="content-scroller" class="dragdealer">
                <div class="handle status_topA">

                    <div class="handle status_topB">
                        <div id="clock" class="clockA">
                        </div>



                        <div id="date" class="date">
                        </div>
                    </div>

                </div>


            </div>

            <div id="frame-id">
                <div id="audio"></div>
                <hgg></hgg>
                <script>
                    (function () {
                        var ct, cth, ctm, d, h, m, s, setTime;
                        d = new Date();
                        h = d.getHours();
                        m = d.getMinutes();
                        s = d.getSeconds();
                        ct = function (v) {
                            var t;
                            t = v * 360 / 60;
                            return t;
                        };
                        ctm = function (v) {
                            var t;
                            t = v * 360 / 60 + 6 * ct(s) / 360;
                            return t;
                        };
                        cth = function (v) {
                            var t;
                            t = v * 360 / 12 + 30 * ct(m) / 360;
                            return t;
                        };
                        setTime = function () {
                            $('.minute').css('transform', 'rotate(' + ctm(m) + 'deg)');
                            return $('.hour').css('transform', 'rotate(' + cth(h) + 'deg)');
                        };
                        $(document).ready(function () {
                            return setTime();
                        });
                    }.call(this));
                </script>

                <div id="demo">

                    <div class="first dragend-page">
                        <div id="hg" class="hg"></div>
                        <div class="clock">
                            <div class="minute"></div>
                            <div class="hour"></div>
                        </div>


                    </div>
                    <script src="JS/dragend.js"></script>
                    <script>
                        document.addEventListener("DOMContentLoaded", function () {
                            var container = document.getElementById("demo");
                            dragend = new Dragend(container, {
                                afterInitialize: function () {
                                    container.style.visibility = "visible";
                                }
                            });
                        }, false)
                        var _gaq = _gaq || [];
                        _gaq.push(['_setAccount', 'UA-219062-10']);
                        _gaq.push(['_trackPageview']);
                        (function () {
                            var ga = document.createElement('script');
                            ga.type = 'text/javascript';
                            ga.async = true;
                            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                            var s = document.getElementsByTagName('script')[0];
                            s.parentNode.insertBefore(ga, s);
                        })();
                        // document.body.addEventListener('mousemove', function(){
                        //   console.log('bodymousemove')
                        // })
                    </script>
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

                                out += "<img id=\"" + arr[i].Name + "\"" + " src=\"Images/" + arr[i].Name + ".png\"" + " width=\"60px\"" + "><p>" + arr[i].Name + "</p><p class=\"" + arr[i].Name + " command\"" + ">" + arr[i].Name + "</p></img>";

                            }
                            out += "</img></div>";
                            document.getElementById("hg").innerHTML = out;
                        }
                    </script>

                    <script>
                        $(document).on("click", "Musicc", function (event) {
                            event.stopPropagation();
                            $('#app').addClass('animated bounceIn');
                            $("#app").fadeIn(400);
                            $("iframe").css({
                                display: "flex"
                            });


                        });
                        $(document).on("click", "settings", function (event) {
                            event.stopPropagation();
                            $('#app1').addClass('animated bounceIn');
                            $("#app1").fadeIn(400);



                        });
                    </script>
                    <script>
                        $(document).ready(function () {
                            $(document).on("click", "img", function (event) {

                                $("hgg").append("<iframe  class=\"current\"" + "id=\"" + event.currentTarget.id + "_iframe\"" + "src=\"http://localhost/Apps/" + event.currentTarget.id + "/\"" + "></iframe>");

                                $("#" + event.currentTarget.id + "_iframe").addClass('animated bounceIn');
                                $("#" + event.currentTarget.id + "_iframe").fadeIn(400);


                                var htmlString = $("." + event.currentTarget.id + "").html();
                                $.ajax({
                                        method: "POST"
                                        , url: "backend/ajax.php"
                                        , data: {
                                            dataString: htmlString
                                        }
                                    })
                                    .done(function (msg) {
                                        alert("Data Saved: " + msg);
                                    });




                            });
                        });
                    </script>

                    <script>
                        if (annyang) {
                            // Let's define our first command. First the text we expect, and then the function it should call
                            var commands = {
                                'launch *term': function (term) {
                                    var u = new SpeechSynthesisUtterance('Launching' + term);
                                    speechSynthesis.speak(u);
                                    $("hgg").append("<iframe  id=\"" + term + "_iframe\"" + "src=\"http://localhost/Apps/" + term + "/\"" + "></iframe>");

                                    $("#" + term + "_iframe").addClass('animated bounceIn');
                                    $("#" + term + "_iframe").fadeIn(400);
                                    $.ajax({
                                            method: "POST"
                                            , url: "backend/ajax.php"
                                            , data: {
                                                dataString: term
                                            }
                                        })
                                        .done(function (msg) {
                                            alert("Data Saved: " + msg);
                                        });
                                }

                            };


                            // Add our commands to annyang
                            annyang.addCommands(commands);

                            // Start listening. You can call this here, or attach this call to an event, button, etc.
                            annyang.start();
                        }
                    </script>
                    <script>
                        if (annyang) {
                            // Let's define our first command. First the text we expect, and then the function it should call
                            var commands = {

                                'kill *terms': function (terms) {
                                    var u = new SpeechSynthesisUtterance('Killing' + terms);
                                    speechSynthesis.speak(u);
                                    $("#" + terms + "_iframe").remove();

                                    $("#" + terms + "_iframe").addClass('bounceOut');
                                    $("#" + terms + "_iframe").fadeOut(400);

                                    var kill = "killall " + terms;
                                    $.ajax({
                                            method: "POST"
                                            , url: "backend/ajax.php"
                                            , data: {
                                                dataString: kill
                                            }
                                        })
                                        .done(function (msg) {
                                            alert("Data Saved: " + msg);
                                        });
                                }
                            };


                            // Add our commands to annyang
                            annyang.addCommands(commands);

                            // Start listening. You can call this here, or attach this call to an event, button, etc.
                            annyang.start();
                        }
                    </script>
                </div>
            </div>
            <script>
                var numberUpdates = 0;
                var battery;

                function batterySuccess(batteryManager) {
                    battery = batteryManager;
                    document.getElementById("promiseStatus").innerHTML = "success";
                    updateBatteryInformation();
                    battery.addEventListener('chargingchange', updateBatteryInformation);
                    battery.addEventListener('chargingtimechange', updateBatteryInformation);
                    battery.addEventListener('dischargingtimechange', updateBatteryInformation);
                    battery.addEventListener('levelchange', updateBatteryInformation);
                }

                function batteryFailure() {
                    document.getElementById("promiseStatus").innerHTML = "failed";
                }

                function ConvertToHMS(durationInSeconds) {
                    if (!isFinite(durationInSeconds)) return "";
                    var hours = Math.floor(durationInSeconds / 3600);
                    var seconds = durationInSeconds % 60;
                    var minutes = Math.floor((durationInSeconds - hours * 3600 - seconds) / 60);
                    return " (" + hours + "h:" + minutes + "m:" + seconds + "s)";
                }

                function updateBatteryInformation() {
                    document.getElementById("charging").innerHTML = battery.charging;
                    document.getElementById("chargingTime").innerHTML = battery.chargingTime + ConvertToHMS(battery.chargingTime);
                    document.getElementById("dischargingTime").innerHTML = battery.dischargingTime + ConvertToHMS(battery.dischargingTime);
                    document.getElementById("level").innerHTML = battery.level;
                    numberUpdates++;
                    document.getElementById("numberUpdates").innerHTML = numberUpdates;
                }

                document.getElementById("promiseStatus").innerHTML = "pending";
                document.getElementById("numberUpdates").innerHTML = numberUpdates;
                navigator.getBattery().then(batterySuccess, batteryFailure);
            </script>


            <script type="text/javascript">
                function my() {
                    var listener = new window.keypress.Listener();
                    listener.simple_combo("shift s", function () {
                        console.log("You pressed shift and s");
                        $('.power').toggleClass('bounceIn bounceOut');
                    });
                }
            </script>

            <script>
                $(document).ready(function () {
                    $('paper-button').click(function () {
                        var htmlString = $("." + event.currentTarget.id + "").html();
                        $.ajax({
                                method: "POST"
                                , url: "backend/ajax.php"
                                , data: {
                                    dataString: htmlString
                                }
                            })
                            .done(function (msg) {
                                alert("Data Saved: " + msg);
                            });
                    });

                });
            </script>
            <script>
                if (annyang) {
                    // Let's define our first command. First the text we expect, and then the function it should call
                    var commands = {
                        'shutdown': function () {
                            var htmlString = sudo init 0;
                            $.ajax({
                                    method: "POST"
                                    , url: "backend/ajax.php"
                                    , data: {
                                        dataString: htmlString
                                    }
                                })
                                .done(function (msg) {
                                    alert("Data Saved: " + msg);
                                });
                        }
                    };

                    // Add our commands to annyang
                    annyang.addCommands(commands);

                    // Start listening. You can call this here, or attach this call to an event, button, etc.
                    annyang.start();
                }
            </script>

            <script>
                $(document).ready(function () {

                    $("body > *").not("body > .splash").css({
                        display: "none"
                    });

                });

                $(window).load(function () {


                    $("body > *").not("body > script, style, .splash, .set, .bottom").css({
                        display: "block"
                    });;
                    $(".splash").remove();


                });
            </script>
            <script src="http://jschr.github.io/textillate/assets/jquery.lettering.js"></script>
            <script src="http://jschr.github.io/textillate/jquery.textillate.js"></script>
            <script>
                function UpdateDate() {
                    var month = new Array();
                    month[0] = "January";
                    month[1] = "February";
                    month[2] = "March";
                    month[3] = "April";
                    month[4] = "May";
                    month[5] = "June";
                    month[6] = "July";
                    month[7] = "August";
                    month[8] = "September";
                    month[9] = "October";
                    month[10] = "November";
                    month[11] = "December";
                    var d = new Date();
                    var n = d.getDate();
                    var y = month[d.getMonth()];
                    var z = d.getFullYear();
                    if (n < 10) {
                        n = '0' + n
                    }

                    if (y < 10) {
                        y = '0' + y
                    }

                    var out = n + ',' + y + ',' + z;







                    document.getElementById("date").innerHTML = out;
                }
            </script>
        </div>
        <script>
            $(document).ready(function () {
                $(".home").click(function () {

                    $("iframe").removeClass('bounceIn');

                    $(".current").addClass('animated fadeOutDownBig');
                    var i = localStorage.getItem("top");
                    var y = parseInt(i) + 15;
                    $(".current").css({
                        width: "50%"
                        , height: "50%"
                        , left: "25%"
                        , right: "25%"
                        , top: y

                    });
                    $(".current").removeClass('current');
                    localStorage.setItem("top", y);
                });
                localStorage.setItem("top", "30");
            });
        </script>
        <script>
            $(document).ready(function () {
                $(".home").click(function () {

                    $(".set").removeClass('bounceIn');

                    $(".set").addClass('animated fadeOutDownBig');

                    $("#li").removeClass('li_anim')

                });

            });
        </script>
        <script>
            $(document).ready(function () {
                var interval;
                $(".menu").mousedown(function () {
                    interval = setInterval(performWhileMouseDown, 1500);
                }).mouseup(function () {
                    clearInterval(interval);
                });

                function performWhileMouseDown() {

                    $("iframe").removeClass('fadeOutDownBig');

                    $("iframe").addClass('animated fadeInUpBig');
                    $(document).ready(function () {
                        $("iframe").click(function () {

                            var d = document.getElementById(event.currentTarget.id);
                            d.className = " current ";
                            var a = localStorage.getItem("top");
                            var z = parseInt(a) - 15;
                            localStorage.setItem("top", z);
                            $("#" + event.currentTarget.id + "").animate({
                                width: "100%"
                                , height: "100%"
                                , left: "0px"
                                , right: "0px"
                                , top: "0px"
                                , bottom: "0px"

                            });
                            $("iframe:not(.current)").removeClass('fadeInUpBig').addClass('fadeOutDownBig');
                        });
                    });

                };
            });
        </script>

        <script>
            $(document).ready(function () {
                var interval;
                $(".back").mousedown(function () {
                    interval = setInterval(performWhileMouseDown, 1500);
                }).mouseup(function () {
                    clearInterval(interval);
                });

                function performWhileMouseDown() {
                    $(".bottom").css({
                        display: "block"
                    });
                    $(".bottom").addClass('animated slideInUp');
                    $(".bottom").removeClass('animated slideOutDown').addClass('animated slideInUp');

                }

            });
            $(document).ready(function () {
                $(".backgroundS").click(function () {
                    $(".set").css({
                        display: "block"
                    });
                    $(".bottom").removeClass('animated slideInUp').addClass('animated slideOutDown');
                    $(".set").addClass('animated bounceIn');
                    $("#li").addClass('li_anim');
                });
            });
        </script>
        <script>
            $(document).ready(function () {
                $("#li").click(function () {
                    $("body").removeAttr('class');
                    $("body").addClass("" + event.currentTarget.id + "");
                    window.alert(event.currentTarget.id);
                });
            });
        </script>
        </div>
    </body>

    </html>