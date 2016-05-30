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
        <link rel="import" href="System/Res.html">
        <style>
            /* Prevents slides from flashing */
            
            #slides {
                display: none;
            }
            
            .bottom {
                position: fixed;
                width: 100%;
                bottom: 0%;
                height: 40px;
            }
            
            .back {
                left: 0%;
            }
            
            .home {
                left: 50%
            }
            
            .menu {
                left: 100%;
            }
            
            .background {
                position: fixed;
                height: 100%;
                width: 100%;
                z-index: 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
                -webkit-filter: blur(20px);
            }
            
            .mySlides {
                display: none;
            }
            
            .now_container {
                position: absolute;
                top: 15%;
            }
            
            .muck-up {
                width: 310px;
                height: 100%;
                position: fixed;
                overflow: hidden;
            }
            
            .overlay {
                background: url(https://raw.githubusercontent.com/arjunamgain/FilterMenu/master/images/header.jpg) no-repeat top /contain;
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
            }
            
            .overlay:after {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                background: rgba(71, 32, 84, 0.5);
            }
            
            .muck-up > .top {
                position: relative;
                min-height: 240px;
                padding: 15px;
                color: #fff;
            }
            
            .user-profile {
                margin-top: 90px;
            }
            
            .user-profile img {
                height: 45px;
                width: 45px;
                border-radius: 50%;
                float: left;
                margin-right: 24px;
            }
            
            .user-details p {
                font-size: 11px;
            }
            
            .user-details {
                float: left;
                margin-top: 5px;
                vertical-align: bottom;
            }
            
            .user-details h4 {
                font-size: 18px;
            }
            
            .filter-btn {
                position: absolute;
                z-index: 2;
                right: 0;
                width: 40px;
                height: 40px;
                transition: all 0.4s ease-in-out 0s;
            }
            
            .filter-btn span {
                width: 40px;
                height: 40px;
                background: #FA396B;
                display: block;
                position: absolute;
                right: 25px;
                top: -46px;
                text-align: center;
                color: #fff;
                line-height: 40px;
                border-radius: 50%;
                font-size: 22px;
                z-index: 999;
            }
            
            .filter-btn a {
                position: absolute;
                width: 40px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                right: 25px;
                display: block;
                top: -46px;
                color: #fff;
                z-index: 99;
                font-size: 22px;
                transition: all .4s cubic-bezier(.68, 1, .265, 1)
            }
            
            .filter-btn:after {
                height: 170px;
                width: 170px;
                content: '';
                background-color: #FA396B;
                position: absolute;
                top: -110px;
                right: -40px;
                border-radius: 50%;
                transform: scale(0);
                transition: all 0.3s ease-in-out 0s;
            }
            
            .filter-btn.open span.toggle-btn.ion-android-funnel {
                background-color: #DE3963;
            }
            
            .filter-btn.open .ion-android-funnel:before {
                content: "\f2d7";
            }
            
            .open:after {
                transform: scale(1);
            }
            
            .filter-btn.open a:nth-child(1) {
                transform: translate(9px, -62px);
            }
            
            .filter-btn.open a:nth-child(2) {
                transform: translate(-50px, -34px);
            }
            
            .filter-btn.open a:nth-child(3) {
                transform: translate(-56px, 25px);
            }
            
            .filter-btn.open a:nth-child(4) {
                transform: translate(5px, 61px);
            }
            
            .muck-up .bottom {
                background-color: #fff;
                min-height: 303px;
                z-index: 1;
                padding: 35px;
                position: relative;
                color: #222;
                padding-top: 0px;
                height: 100%;
            }
            
            .bottom:after {
                content: '';
                position: absolute;
                top: -46px;
                background: #fff;
                left: -22px;
                right: 0;
                height: 100px;
                transform: rotate(10deg);
                width: 337px;
                z-index: -1;
            }
            
            .bottom .title {
                margin-bottom: 20px;
            }
            
            .bottom .title h3 {
                font-size: 22px;
                margin-bottom: 5px;
            }
            
            .title small {
                font-size: 10px;
                color: #888;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            
            ul.tasks .task-title {
                font-size: 13px;
                display: inline-block;
            }
            
            ul.tasks .task-time {
                float: right;
                font-size: 10px;
                color: #888;
            }
            
            ul.tasks .task-cat {
                font-size: 10px;
                display: block;
                color: #888;
            }
            
            ul.tasks li {
                margin-bottom: 16px;
                position: relative;
                z-index: 8;
            }
            
            ul.tasks li:after {
                content: '';
                position: absolute;
                left: -18px;
                top: 8px;
                height: 8px;
                width: 8px;
                border-radius: 50%;
            }
            
            ul.tasks li.red:after {
                background: #FF3163;
            }
            
            ul.tasks li.green:after {
                background: #54D6C7;
            }
            
            ul.tasks li.yellow:after {
                background: #EAB429;
            }
            
            ul.tasks::after {
                content: '';
                position: absolute;
                height: 400px;
                width: 1px;
                background: #eee;
                left: 20px;
                top: -68px;
            }
            
            ul li.hang {
                margin-bottom: 48px;
            }
            
            ul li.hang img {
                float: left;
                height: 20ox;
                width: 20px;
                border-radius: 50%;
                margin-right: 8px;
            }
        </style>
        <script>
            $(function () {

                $('.toggle-btn').click(function () {
                    $('.filter-btn').toggleClass('open');

                });

                $('.filter-btn a').click(function () {
                    $('.filter-btn').removeClass('open');

                });

            });

            $('#all').click(function () {

                $('ul.tasks li').slideDown(300);

            });

            $('#one').click(function () {
                $('.tasks li:not(.one)').slideUp(300, function () {
                    $('.one').slideDown(300);

                });
            });

            $('#two').click(function () {
                $('.tasks li:not(.two)').slideUp(300, function () {
                    $('.two').slideDown(300);

                });
            });
            $('#three').click(function () {
                $('.tasks li:not(.three)').slideUp(300, function () {
                    $('.three').slideDown(300);

                });
            });
        </script>

        <script>
            var xmlhttp = new XMLHttpRequest();
            var url = "http://localhost/Reviaco-OS/Customers_MYSQL23.php";

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
                var out = "<div class=\"now_container\"" + ">";

                for (i = 0; i < arr.length; i++) {


                    out += "<div class=\"mySlides w3-animate-fading " + arr[i].Name + "\"" + "><paper-card heading=\"" + arr[i].Name + "\"" + "image=\"Apps/" + arr[i].Name + "/Media/icon.png\"" + " class=\"lime\"" + "><div class=\"card-content\"" + ">" + arr[i].Description + "</div></paper-card></div>";

                }
                out += "</div>";
                $("body").append(out);
            }
        </script>
        <script>
            var myIndex = 0;
            carousel();

            function carousel() {
                var i;
                var x = document.getElementsByClassName("mySlides");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                myIndex++;
                if (myIndex > x.length) {
                    myIndex = 1
                }
                x[myIndex - 1].style.display = "block";
                setTimeout(carousel, 5000);
            }
        </script>


    </head>

    <body onload="carousel();">
        <img class="background" src="System/Media/Backgrounds/3.jpg"></img>
        <div class="muck-up">
            <div class="overlay"></div>
            <div class="top">

                <div class="user-profile">
                    <img src="https://raw.githubusercontent.com/arjunamgain/FilterMenu/master/images/profile.jpg">
                    <div class="user-details">
                        <h4><?php echo $message; ?></h4>
                        <p>Web/Front-end Designer</p>
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
                    <h3>My Tasks</h3>
                    <small>February 8,2015</small>
                </div>
                <ul class="tasks">
                    <li class="one red">
                        <span class="task-title">Make New Icon</span>
                        <span class="task-time">5pm</span>
                        <span class="task-cat">Web App</span>

                    </li>
                    <li class="one red">
                        <span class="task-title">Catch up with Brian</span>
                        <span class="task-time">3pm</span>
                        <span class="task-cat">Mobile Project</span>

                    </li>
                    <li class="two green">
                        <span class="task-title">Design Explorations</span>
                        <span class="task-time">2pm</span>
                        <span class="task-cat">Company Web site</span>

                    </li>
                    </li>
                    <li class="tow green hang">
                        <span class="task-title">Team Meeting</span>
                        <span class="task-time">2pm</span>
                        <span class="task-cat">Hangouts</span>
                        <img src="https://raw.githubusercontent.com/arjunamgain/FilterMenu/master/images/2.jpg">
                        <img src="https://raw.githubusercontent.com/arjunamgain/FilterMenu/master/images/3.jpg">
                        <img src="https://raw.githubusercontent.com/arjunamgain/FilterMenu/master/images/profile.jpg">
                    </li>
                    <li class="three yellow">
                        <span class="task-title">New Projects</span>
                        <span class="task-time">2pm</span>
                        <span class="task-cat">Starting</span>


                    </li>

                    <li class="three yellow">
                        <span class="task-title">Lunch with Mary</span>
                        <span class="task-time">2pm</span>
                        <span class="task-cat">Grill House</span>
                    </li>
                    <li class="three yellow">
                        <span class="task-title">Team Meeting</span>
                        <span class="task-time">2pm</span>
                        <span class="task-cat">Hangouts</span>
                    </li>

                </ul>
            </div>
        </div>
        <h1>Start</h1>





        <div class="bottom">
            <img class="back" src="System/Media/Framework/Back.png"></img>
            <img class="home" src="System/Media/Framework/Home.png"></img>
            <img class="menu" src="System/Media/Framework/Menu.png"></img>
        </div>


    </body>

    </html>