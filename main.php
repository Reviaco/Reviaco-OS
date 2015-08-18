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

        <script src="//cdnjs.cloudflare.com/ajax/libs/annyang/1.6.0/annyang.min.js"></script>
        <script src="JS/Polymer/bower_components/webcomponentsjs/webcomponents.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/SVG-Morpheus/0.1.8/svg-morpheus.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/angular-material-icons/0.5.0/angular-material-icons.min.js"></script>
        <script src="JS/Polymer/bower_components/polymer/polymer.html"></script>
        <script src="JS/Polymer/bower_components/webcomponentsjs/webcomponents.js"></script>
        <link rel="import" href="JS/Polymer/bower_components/font-roboto/roboto.html">
        <link rel="import" href="JS/Polymer/bower_components/paper-header-panel/paper-header-panel.html">
        <link rel="import" href="JS/Polymer/bower_components/paper-styles/paper-styles.html">
        <link rel="import" href="JS/Polymer/bower_components/paper-scroll-header-panel/paper-scroll-header-panel.html">
        <link rel="import" href="JS/Polymer/bower_components/paper-toolbar/paper-toolbar.html">
        <link rel="import" href="JS/Polymer/bower_components/paper-tabs/paper-tabs.html">
        <link rel="import" href="JS/Polymer/bower_components/paper-icon-button/paper-icon-button.html">
        <link rel="import" href="JS/Polymer/bower_components/iron-pages/iron-pages.html">
        <link rel="import" href="JS/Polymer/bower_components/paper-tabs/paper-tabs.html">
        <link rel="import" href="JS/Polymer/bower_components/iron-a11y-keys/iron-a11y-keys.html">
        <link rel="import" href="JS/Polymer/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html">


        <link rel="stylesheet" href="CSS/demo.css">


        <link rel="import" href="JS/Polymer/bower_components/paper-menu/paper-menu.html">


        <script src="JS/common/modernizr.js"></script>
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

        <link rel="import" href="JS/Polymer/bower_components/paper-item/paper-item.html">

        <link rel="import" href="JS/Polymer/bower_components/paper-slider/paper-slider.html">
        <link rel="import" href="JS/Polymer/bower_components/paper-header-panel/paper-header-panel.html">
        <link rel="import" href="JS/Polymer/bower_components/paper-scroll-header-panel/paper-scroll-header-panel.html">
        <link rel="import" href="JS/Polymer/bower_components/font-roboto/roboto.html">
        <link rel="import" href="JS/Polymer/bower_components/paper-fab/paper-fab.html">
        <link rel="import" href="JS/Polymer/bower_components/paper-menu-button/paper-menu-button.html">
        <link rel="import" href="JS/Polymer/bower_components/paper-icon-button/paper-icon-button.html">
        <link rel="import" href="JS/Polymer/bower_components/paper-spinner/paper-spinner.html">
        <link rel="import" href="JS/Polymer/bower_components/paper-toast/paper-toast.html">
        <link rel="import" href="JS/Polymer/bower_components/iron-iconset-svg/iron-iconset-svg.html">
        <link rel="import" href="JS/Polymer/bower_components/iron-iconset/iron-iconset.html">
        <link rel="import" href="JS/Polymer/bower_components/iron-icons/iron-icons.html">
        <link rel="import" href="JS/Polymer/bower_components/iron-icon/iron-icon.html">
        <link rel="import" href="JS/Polymer/bower_components/paper-drawer-panel/paper-drawer-panel.html">
        <link rel="import" href="JS/Polymer/bower_components/paper-button/paper-button.html">
        <link rel="import" href="JS/Polymer/bower_components/paper-dialog/paper-dialog.html">
        <link rel="import" href="JS/Polymer/bower_components/paper-dialog-behavior/paper-dialog-behavior.html">
        <script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>

        <link href="CSS/Normalize/normalize.css" rel="stylesheet" />
        <link href="CSS/Start Screen/Settings Sidebar.css" rel="stylesheet" />
        <link href="CSS/Start Screen/ahmed sidebar.css" rel="stylesheet" />
        <link href="CSS/Start Screen/Background.css" rel="stylesheet" />
        <link href="CSS/Start Screen/Packery.css" rel="stylesheet" />
        <link href="CSS/Start Screen/Sidebar.css" rel="stylesheet" />
        <link href="CSS/Start Screen/Iframes.css" rel="stylesheet" />
        <link href="CSS/Start Screen/Text.css" rel="stylesheet" />
        <link href="JS/angular-material-icons.css" rel="stylesheet" />
        <link href="CSS/Start Screen/Tiles.css" rel="stylesheet" />
        <link href="CSS/Metro UI/metro-bootstrap-responsive.min.css" rel="stylesheet" />
        <link href="CSS/Metro UI/metro-bootstrap.min.css" rel="stylesheet" />
        <link href="CSS/Metro UI/iconFont.min.css" rel="stylesheet" />
        <link href="CSS/Kendo UI/kendo.common.min.css" rel="stylesheet" />
        <link href="CSS/Kendo UI/kendo.metro.min.css" rel="stylesheet" />
        <link href="CSS/Animate/animate.css" rel="stylesheet" />
        <link href="CSS/Epoch/epoch.min.css" rel="stylesheet" />
        <link href="JS/md-date-time.css" rel="stylesheet" />
        <link href="JS/textillate/animate.css" rel="stylesheet" />
        <link href="JS/textillate/style.css" rel="stylesheet" />
        <script src="JS/Jquery/jquery-1.11.1.min.js"></script>
        <script src="JS/Jquery/jquery.color.plus-names-2.1.2.min.js"></script>
        <script src="JS/Knob/jquery.knob.min.js"></script>
        <script src="JS/Elevate Zoom/jquery.elevateZoom-3.0.8.min.js"></script>
        <script src="JS/Jquery/jquery-migrate-1.2.1.min.js"></script>
        <script src="JS/Voix/voix.min.js"></script>
        <script src="JS/Packery/draggabilly.pkgd.min.js"></script>
        <script src="JS/ThreeJS/three.min.js"></script>
        <script src="JS/Kreate/kreate.min.js"></script>
        <script src="JS/Rainy Day/rainyday.min.js"></script>

        <script src="JS/Sticker/sticker.min.js"></script>
        <script src="JS/Retina/retina.min.js"></script>
        <script src="JS/Smooth Scroll/jquery.smooth-scroll.min.js"></script>
        <script src="JS/Random Colour/randomColor.js"></script>
        <script src="JS/Packery/packery.pkgd.min.js"></script>
        <script src="JS/Packery/draggabilly.pkgd.min.js"></script>
        <script src="http://h123.ru/js/DOMEventsLevel3.shim.js?1"></script>
        <script src="http://h123.ru/js/a.js"></script>
        <script src="http://h123.ru/js/microdata-js.js"></script>
        <script src="JS/Anijs/anijs-helper-scrollreveal-min.js"></script>
        <script src="JS/Anijs/anijs-jquery-event-system-min.js"></script>
        <script src="JS/Anijs/anijs-min.js"></script>
        <script src="JS/Downloader/download.min.js"></script>
        <script src="JS/CM Rotate/CMRotate.js"></script>
        <script src="JS/Kendo UI/kendo.ui.core.min.js"></script>
        <script src="JS/CreateJS/createjs-2013.12.12.min.js"></script>
        <script src="JS/Sidebar/modernizr.custom.js"></script>
        <script src="JS/Epoch/epoch.min.js"></script>
        <script src="JS/Gesture Kit/gesturekit.min.js"></script>

        <script src="JS/Metro UI/jquery.dataTables.js"></script>
        <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
        <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
        <link rel="stylesheet" href="CSS/materialize1.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.96.1/js/materialize.min.js"></script>
        <link rel="stylesheet" href="CSS/style.min.css">
        <script src="JS/materialMenu.min.js"></script>
        <script src="JS/demo11.js"></script>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

        <link href="lib/jasmine.css" type="text/css" rel="stylesheet">

        <script src="lib/jquery-1.10.2.js"></script>
        <script src="lib/jquery.simulate.js"></script>
        <script src="lib/jasmine.js"></script>
        <script src="lib/jasmine-jsreporter.js"></script>
        <script src="lib/jasmine-html.js"></script>
        <script src="lib/jasmine-jquery.js"></script>

        <link href="src/dragdealer.css" type="text/css" rel="stylesheet">
        <script src="src/dragdealer.js"></script>

        <script src="spec/helpers.js"></script>
        <script src="spec/matchers.js"></script>
        <script src="spec/optionsSpec.js"></script>
        <script src="spec/draggingSpec.js"></script>
        <!--[if gt IE 9]><!-->
        <script src="spec/touchDraggingSpec.js"></script>
        <!--<![endif]-->
        <script src="spec/callbacksSpec.js"></script>
        <script src="spec/apiSpec.js"></script>
        <script src="spec/resizingSpec.js"></script>
        <script src="spec/eventsSpec.js"></script>
        <script src="spec/setup.js"></script>
        <script src="spec/browser-runner.js"></script>

        <link href="demo/style/index.css" type="text/css" rel="stylesheet">
        <link href="demo/style/jasmine-reporter.css" type="text/css" rel="stylesheet">
        <link href="demo/style/demos.css" type="text/css" rel="stylesheet">
        <script src="demo/script/index.js"></script>
        <script src="demo/script/demos.js"></script>
  


        <link rel="import" href="JS/Polymer/bower_components/neon-animation/animations/scale-up-animation.html">
        <link rel="import" href="JS/Polymer/bower_components/neon-animation/animations/fade-out-animation.html">
        <link rel="import" href="JS/Polymer/bower_components/paper-radio-button/paper-radio-button.html">
        <link rel="import" href="JS/Polymer/bower_components/paper-radio-group/paper-radio-group.html">
        <script type="text/javascript" src="https://www.google.com/jsapi"></script>
        <script type="text/javascript" src="JS/keypress.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/annyang/2.0.0/annyang.min.js"></script>
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
                        },
                        delay: 10
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
            .current  {
            }
            
            .command {
                display: none;
            }
        </style>
        <style>
.command  {
           display: none;
}
p  {
    color:white;
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

.minute, .hour {
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
</style>
  <style type="text/css">
body  {
               background-size: 100% 100%;
               background-repeat: no-repeat;
background-image: url(JS/2.jpg);
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

.hg  {
position : fixed;
left: 30px;
        bottom: 100px;
margin: auto;
z-index: 9999999999999999999999999999999999999999999999;
}
iframe  {
                 position: fixed;
                top: 0px;
                width: 100%;
                height: 100%;
                margin: auto auto auto 0;
                    z-index: 999;
}

            
  </style>
        <link href="CSS/Normalize/normalize.css" rel="stylesheet" />




    </head>

    <body onload="UpdateTime(); UpdateDate();" onkeypress="my()" ng-app="demoapp" ng-controller="democtrl" class="ng-scope">
        <div class="splash">

            <h1 class="tlt"><?php echo $message; ?></h1>
        </div>
        <div class="power bounceOut animated">
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




            <div class="bar">            <div class="back"></div>
            <div class="home">            <paper-ripple>
              <div id="background" class="style-scope paper-ripple" style="opacity: 0.00279999999329447;"></div>
              <div id="waves" class="style-scope paper-ripple"></div>
            </paper-ripple></div>
            <div class="menu"></div></div>

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
<hgg ></hgg>
<script>
(function() {
  var ct, cth, ctm, d, h, m, s, setTime;
  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();
  ct = function(v) {
    var t;
    t = v * 360 / 60;
    return t;
  };
  ctm = function(v) {
    var t;
    t = v * 360 / 60 + 6 * ct(s) / 360;
    return t;
  };
  cth = function(v) {
    var t;
    t = v * 360 / 12 + 30 * ct(m) / 360;
    return t;
  };
  setTime = function() {
    $('.minute').css('transform', 'rotate(' + ctm(m) + 'deg)');
    return $('.hour').css('transform', 'rotate(' + cth(h) + 'deg)');
  };
  $(document).ready(function() {
    return setTime();
  });
}.call(this));
</script>

  <div id="demo" >

      <div class="first dragend-page"><div id="hg" class="hg"></div><div class="clock">
  <div class="minute"></div>
  <div class="hour"></div>
</div>


  </div>
  <script src="JS/dragend.js"></script>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      var container = document.getElementById("demo");
      dragend = new Dragend(container, {
        afterInitialize: function() {
          container.style.visibility = "visible";
        }
      });
    }, false)
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-219062-10']);
    _gaq.push(['_trackPageview']);
    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
    // document.body.addEventListener('mousemove', function(){
    //   console.log('bodymousemove')
    // })
  </script>
    <script>
      var xmlhttp = new XMLHttpRequest();
      var url = "http://localhost/Customers_MYSQL23.php";

      xmlhttp.onreadystatechange = function() {
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

          out += "<img id=\"" + arr[i].Name + "\"" + " src=\"Images/" + arr[i].Name + ".png\"" + " width=\"60px\"" + "><p>" + arr[i].Name + "</p><p class=\"" + arr[i].Name + " command\""+">" + arr[i].Name + "</p>";

        }
        out += "</img></div>";
        document.getElementById("hg").innerHTML = out;
      }
    </script>

<script>
    $(document).on("click", "Musicc", function(event){
        event.stopPropagation();
$('#app').addClass('animated bounceIn');
          $("#app").fadeIn( 400 );
            $("iframe").css({
              display: "flex"
            });


});
    $(document).on("click", "settings", function(event){
        event.stopPropagation();
$('#app1').addClass('animated bounceIn');
          $("#app1").fadeIn( 400 );



});
</script>
<script>

      $(document).ready(function() {
$(document).on("click", "img", function( event ){

$( "hgg" ).append( "<iframe  class=\"current\"" + "id=\""+ event.currentTarget.id + "_iframe\"" + "src=\"http://localhost/Apps/"+ event.currentTarget.id + "/\"" + "></iframe>" );

$("#"+ event.currentTarget.id + "_iframe").addClass('animated bounceIn');
          $("#"+ event.currentTarget.id + "_iframe").fadeIn( 400 );


  var htmlString = $("."+ event.currentTarget.id + "").html();
  $.ajax({
  method: "POST",
  url: "backend/ajax.php",
  data: { dataString: htmlString}
})
  .done(function( msg ) {
    alert( "Data Saved: " + msg );
  });




            });
            });
</script>

<script>
if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    'launch *term': function(term) {
    var u = new SpeechSynthesisUtterance('Launching' + term);
    speechSynthesis.speak(u);
$( "hgg" ).append( "<iframe  id=\""+ term + "_iframe\"" + "src=\"http://localhost/Apps/"+ term + "/\"" + "></iframe>" );

$("#"+ term + "_iframe").addClass('animated bounceIn');
          $("#"+ term + "_iframe").fadeIn( 400 );
  $.ajax({
  method: "POST",
  url: "backend/ajax.php",
  data: { dataString: term}
})
  .done(function( msg ) {
    alert( "Data Saved: " + msg );
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

    'kill *terms': function(terms) {
    var u = new SpeechSynthesisUtterance('Killing' + terms);
    speechSynthesis.speak(u);
$( "#"+ terms + "_iframe" ).remove();

$("#"+ terms + "_iframe").addClass('bounceOut');
          $("#"+ terms + "_iframe").fadeOut( 400 );

var kill = "killall " + terms ;
  $.ajax({
  method: "POST",
  url: "backend/ajax.php",
  data: { dataString: kill}
})
  .done(function( msg ) {
    alert( "Data Saved: " + msg );
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
                                method: "POST",
                                url: "backend/ajax.php",
                                data: {
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
                                    method: "POST",
                                    url: "backend/ajax.php",
                                    data: {
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

                    $("body > *").not("body > script, style, .splash").css({
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

      $(document).ready(function() {
 $(document).on("click", ".home", function(){

$("iframe").removeClass('bounceIn');

$( "iframe" ).addClass('animated fadeOutDownBig');
                 var i = localStorage.getItem("top");
var y = parseInt(i) + 5;
                 $("iframe").css({
              width: "50%",
                     height: "50%",
                     left: "25%",
                     right: "25%",
                top: y
                     
            });

localStorage.setItem("top", y);
    });
localStorage.setItem("top", "30");
            });
</script> 
            <script>

      $(document).ready(function() {
 $(document).on("click", ".menu", function(){

$("iframe").removeClass('fadeOutDownBig');

$("iframe").addClass('animated fadeInUpBig');
           $(document).ready(function() {
$('iframe').on('click', function( event ){
$("#"+ event.currentTarget.id + "").addClass('current');

                 $("#"+ event.currentTarget.id + "").animate({
              width: "100%",
                     height: "100%",
                     left: "0px",
                     right: "0px",
                top: "0px",
                     bottom: "0px"
                     
            });
              });
                         });

    });
            });
</script>
    </body>

    </html>