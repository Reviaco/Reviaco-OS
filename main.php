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


﻿<html>
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
      .controller('democtrl', function($scope) {

        $scope.clickIcon = 'network_wifi';
      $scope.clickIconMorph9 = function() {


            $scope.clickIcon = 'info';


        }
      $scope.clickIconMorph1 = function() {


            $scope.clickIcon = 'accessibility';


        }
      $scope.clickIconMorph2 = function() {


            $scope.clickIcon = 'access_time';


        }
      $scope.clickIconMorph3 = function() {


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




  <link rel="import" href="JS/Polymer/bower_components/neon-animation/animations/scale-up-animation.html">
  <link rel="import" href="JS/Polymer/bower_components/neon-animation/animations/fade-out-animation.html">
  <link rel="import" href="JS/Polymer/bower_components/paper-radio-button/paper-radio-button.html">
  <link rel="import" href="JS/Polymer/bower_components/paper-radio-group/paper-radio-group.html">
  <script type="text/javascript" src="https://www.google.com/jsapi"></script>
  <script type="text/javascript" src="JS/keypress.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/annyang/2.0.0/annyang.min.js"></script>
<script>            function UpdateTime(){
        var today = new Date();
        var hour = today.getHours();
        var mins = today.getMinutes();
        var secs = today.getSeconds();

        if (secs <=9){
            secs = "0" + secs
        }

        var out = hour + ":" + mins + ":" + secs;



        setTimeout("UpdateDate()", 1000) 



document.getElementById("clock").innerHTML = out;
}</script>


<script>
$(document).ready(function(){
$(function () {
$('.tlt').textillate({ in: { effect: 'rollIn' },
delay: 10 });
});
});
</script>


<style>
    .Button  {
    position: realtive;
    width:100%;
    margin-left: 0px;
    
    }
    .Button1  {
    
    float: left; 
        clear: both; 
        padding: 0 5px 5px 5px; 
        text-align: left;
        margin: 0 0 10px 0; 
    
    }
.ul1  {
margin-top: 13%;
}
.power  {
z-index: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999;
position: fixed;
left: 35%;
top: 30%;

width: 28%;
height: 45%;
display: none;
}

.splash  {
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
.back  {
    background-image: url('images/triangle.png');
    height:20px;
    width:17px;
    position: fixed;
    bottom:3%;
    display: flex;
    z-index: 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
    left: 15%;
    
}
    .home  {
        background-image: url('images/circle.png'); 

        
            height:18px;
    width:19px;
    position: fixed;
    bottom:3%;
    display: flex;
    z-index: 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
    left: 48%;
        
    }
    .bar  {
   
                background-image: url('images/gradient.png'); 

        
            height:64px;
    width:100%;
    position: fixed;
    bottom:0%;
    display: flex;
    z-index: 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;

    }
    
    .menu  {

                background-image: url('images/square.png'); 

        
            height:16px;
    width:17px;
    position: fixed;
    bottom:3%;
    display: flex;
    z-index: 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
    right: 15%;
    }
.status_bottom  {
        
    
        
    background-color: #263238;
    border-redius: 3px;
position: fixed;
    height: 461px;

    right: 0px;
    top:  10%;
    width:  344px;
    display: flex;
    z-index: 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
}


.status_top  {
    background-color: #384248;
    position: fixed;
    box-shadow: 0px 1px 5px 0.00px rgba(0, 0, 0, 0.5);
    width: 95%;
    height: 70px;
       display: flex;
    z-index: 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
    top: 0px;
    left: 2.5%;
    right: 2.5%;
    
    
}
    .clockA  {
          
        height: 11px;
        left:50px;
        width: 38px;
        position: absolute;
        top: 20%;
        color: #ffffff;
    }
.date  {
             height: 14px;
        left:50px;
        width: 135px;
        position: absolute;
        top: 25%;
        color: #ffffff;
    }

.splat {
  -webkit-animation: splat 865ms linear both;
  animation: splat 865ms linear both;
}



.spalsh  {


}
.contents  {
            display: none;
}
iframe  {
position: fixed;
top: 4%;
width: 100%;
height: 100%;
    margin:auto auto auto 0;
}
.power_cover  {
position: relative;
width: 100%;
height: 40%;
background: tomato;

}
.power_menu  {
position: absolute;
width: 100%;
height: 60%;
top: 165px;
left: 0px;
background: #eeeeee;
}
.command  {
display: none;
}
</style>
<link href="CSS/Normalize/normalize.css" rel="stylesheet" />



       
</head>
<body onload="UpdateTime(); UpdateDate();" onkeypress="my()" ng-app="demoapp" ng-controller="democtrl" class="ng-scope">
<div class="splash">

<h1 class="tlt"><?php echo $message; ?></h1>
</div>
<div class="contents">


<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>



        <p id="level"></p>

</x-foo-from-template>
    <div class="status_top"></div>
    <div class="back"></div>
        <div class="home"></div>
        <div class="menu"></div>
        <div class="bar"></div>
            <div class="status_top">
                <x-foo-from-template> 
        <clock-digital id="clock" class="clockA">
</clock-digital> 
                </x-foo-from-template>
    </div>
    <div id="date" class="date">
        </div>
<div class="power bounceOut animated"><div class="power_cover"></div><iron-a11y-keys target="{{}}" keys="up down left right" on-keys-pressed="myFunction()"></iron-a11y-keys>
<div class="power_menu"><ul>
            <ul class="ul1">
              <li>

                <paper-button  class="Button" id="power_off" type="submit">
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
            </ul></div>
</div>
<iframe id="frame-id" src="http://localhost/home.html">
</iframe>
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
listener.simple_combo("shift s", function() {
    console.log("You pressed shift and s");
$('.power').toggleClass('bounceIn bounceOut');
});
}
</script>

<script>

$(document).ready(function(){
    $('paper-button').click(function(){
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
    'shutdown': function() {
  var htmlString = sudo init 0;
  $.ajax({
  method: "POST",
  url: "backend/ajax.php",
  data: { dataString: htmlString}
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
      $(document).ready(function() {

       $("body > *").not("body > .splash").css({
              display: "none"
            });;


      });
      $( window ).load(function() {

       $("body > *").not("body > script, style, .splash").css({
              display: "block"
            });;
          $(".splash").remove();


      });

    </script>
  <script src="http://jschr.github.io/textillate/assets/jquery.lettering.js"></script>
<script src="http://jschr.github.io/textillate/jquery.textillate.js"></script>
<script>            function UpdateDate(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyy = today.getFullYear();
if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

        var out = mm+'/'+dd+'/'+yyyy;



        setTimeout("UpdateDate()", 1000) 



document.getElementById("date").innerHTML = d.toDateString();
}</script>
</body>
</html>
