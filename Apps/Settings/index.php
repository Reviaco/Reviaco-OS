<?php
$a = filesize("c:/xampp/htdocs/SunshineOS/AHmedd/Data");
$b = filesize("c:/xampp/htdocs/SunshineOS/AHmedd/Pictures");
$c = filesize("c:/xampp/htdocs/SunshineOS/AHmedd/Sounds");
$d = filesize("c:/xampp/htdocs/SunshineOS/AHmedd/Videos");
$e = filesize("c:/xampp/htdocs/SunshineOS/AHmedd/Documents");
$f = filesize("c:/xampp/htdocs/SunshineOS/AHmedd/Downloads");
$g = filesize("c:/xampp/htdocs/SunshineOS/AHmedd/Files");
settype($a, "integer");
$data = $a;
settype($b, "integer");
$pics = $b;
settype($c, "integer");
$sounds = $c;
settype($d, "integer");
$videos = $d;
settype($e, "integer");
$docs = $e;
settype($f, "integer");
$downloads = $f;
settype($g, "integer");
$files = $g;
?>
    <html>

    <head>
        <script src="//cdnjs.cloudflare.com/ajax/libs/annyang/1.6.0/annyang.min.js"></script>
        <script src="../../JS/Polymer/bower_components/webcomponentsjs/webcomponents.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.2/angular.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/SVG-Morpheus/0.1.8/svg-morpheus.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/angular-material-icons/0.5.0/angular-material-icons.min.js"></script>
        <script src="../../JS/Polymer/bower_components/polymer/polymer.html"></script>
        <script src="../../JS/Polymer/bower_components/webcomponentsjs/webcomponents.js"></script>
        <link rel="import" href="../../JS/Polymer/bower_components/font-roboto/roboto.html">
        <link rel="import" href="../../JS/Polymer/bower_components/paper-header-panel/paper-header-panel.html">
        <link rel="import" href="../../JS/Polymer/bower_components/paper-styles/paper-styles.html">
        <link rel="import" href="../../JS/Polymer/bower_components/paper-scroll-header-panel/paper-scroll-header-panel.html">
        <link rel="import" href="../../JS/Polymer/bower_components/paper-toolbar/paper-toolbar.html">
        <link rel="import" href="../../JS/Polymer/bower_components/paper-tabs/paper-tabs.html">
        <link rel="import" href="../../JS/Polymer/bower_components/paper-icon-button/paper-icon-button.html">
        <link rel="import" href="../../JS/Polymer/bower_components/iron-pages/iron-pages.html">
        <link rel="import" href="../../JS/Polymer/bower_components/paper-tabs/paper-tabs.html">


        <link rel="stylesheet" href="../../CSS/demo.css">


        <link rel="import" href="../../JS/Polymer/bower_components/paper-menu/paper-menu.html">


        <script src="../../JS/common/modernizr.js"></script>
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
        <script>
        </script>
        <link rel="import" href="../../JS/Polymer/bower_components/paper-item/paper-item.html">
        <link rel="import" href="../../JS/Polymer/bower_components/paper-slider/paper-slider.html">
        <link rel="import" href="../../JS/Polymer/bower_components/paper-header-panel/paper-header-panel.html">
        <link rel="import" href="../../JS/Polymer/bower_components/paper-scroll-header-panel/paper-scroll-header-panel.html">
        <link rel="import" href="../../JS/Polymer/bower_components/font-roboto/roboto.html">
        <link rel="import" href="../../JS/Polymer/bower_components/paper-fab/paper-fab.html">
        <link rel="import" href="../../JS/Polymer/bower_components/paper-menu-button/paper-menu-button.html">
        <link rel="import" href="../../JS/Polymer/bower_components/paper-icon-button/paper-icon-button.html">
        <link rel="import" href="../../JS/Polymer/bower_components/paper-spinner/paper-spinner.html">
        <link rel="import" href="../../JS/Polymer/bower_components/paper-toast/paper-toast.html">
        <link rel="import" href="../../JS/Polymer/bower_components/iron-iconset-svg/iron-iconset-svg.html">
        <link rel="import" href="../../JS/Polymer/bower_components/iron-iconset/iron-iconset.html">
        <link rel="import" href="../../JS/Polymer/bower_components/iron-icons/iron-icons.html">
        <link rel="import" href="../../JS/Polymer/bower_components/iron-icon/iron-icon.html">
        <link rel="import" href="../../JS/Polymer/bower_components/paper-drawer-panel/paper-drawer-panel.html">
        <link rel="import" href="../../JS/Polymer/bower_components/paper-button/paper-button.html">
        <link rel="import" href="../../JS/Polymer/bower_components/paper-dialog/paper-dialog.html">
        <link rel="import" href="../../JS/Polymer/bower_components/paper-dialog-behavior/paper-dialog-behavior.html">
        <script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
        <script src="http://www.wavesurfer.fm/dist/wavesurfer.min.js"></script>
        <link href="../../CSS/Normalize/normalize.css" rel="stylesheet" />
        <link href="../../CSS/Start Screen/Settings Sidebar.css" rel="stylesheet" />
        <link href="../../JS/Start Screen/ahmed sidebar.css" rel="stylesheet" />
        <link href="../../JS/Start Screen/Background.css" rel="stylesheet" />
        <link href="../../JS/Start Screen/Packery.css" rel="stylesheet" />
        <link href="../../JS/Start Screen/Sidebar.css" rel="stylesheet" />
        <link href="../../JS/Start Screen/Iframes.css" rel="stylesheet" />
        <link href="../../CSS/Start Screen/Text.css" rel="stylesheet" />
        <link href="../../CSS/angular-material-icons.css" rel="stylesheet" />
        <link href="../../CSS/Start Screen/Tiles.css" rel="stylesheet" />
        <link href="../../CSS/Metro UI/metro-bootstrap-responsive.min.css" rel="stylesheet" />
        <link href="../../CSS/Metro UI/metro-bootstrap.min.css" rel="stylesheet" />
        <link href="../../CSS/Metro UI/iconFont.min.css" rel="stylesheet" />
        <link href="../../CSS/Kendo UI/kendo.common.min.css" rel="stylesheet" />
        <link href="../../CSS/Kendo UI/kendo.metro.min.css" rel="stylesheet" />
        <link href="../../CSS/Animate/animate.css" rel="stylesheet" />
        <link href="../../CSS/Epoch/epoch.min.css" rel="stylesheet" />
        <link href="../../CSS/md-date-time.css" rel="stylesheet" />
        <script src="../../JS/Jquery/jquery-1.11.1.min.js"></script>
        <script src="../../JS/Jquery/jquery.color.plus-names-2.1.2.min.js"></script>
        <script src="../../JS/Knob/jquery.knob.min.js"></script>
        <script src="../../JS/Elevate Zoom/jquery.elevateZoom-3.0.8.min.js"></script>
        <script src="../../JS/Jquery/jquery-migrate-1.2.1.min.js"></script>
        <script src="../../JS/Voix/voix.min.js"></script>
        <script src="../../JS/Packery/draggabilly.pkgd.min.js"></script>
        <script src="../../JS/ThreeJS/three.min.js"></script>
        <script src="../../JS/Kreate/kreate.min.js"></script>
        <script src="../../JS/Rainy Day/rainyday.min.js"></script>
        <script src="../../JS/Polymer/bower_components/webbower_componentsjs/webbower_components.js"></script>
        <script src="../../JS/Sticker/sticker.min.js"></script>
        <script src="../../JS/Retina/retina.min.js"></script>
        <script src="../../JS/Smooth Scroll/jquery.smooth-scroll.min.js"></script>
        <script src="../../JS/Random Colour/randomColor.js"></script>
        <script src="../../JS/Packery/packery.pkgd.min.js"></script>
        <script src="../../JS/Packery/draggabilly.pkgd.min.js"></script>

        <script src="../../JS/Anijs/anijs-helper-scrollreveal-min.js"></script>
        <script src="../../JS/Anijs/anijs-jquery-event-system-min.js"></script>
        <script src="../../JS/Anijs/anijs-min.js"></script>
        <script src="../../JS/Downloader/download.min.js"></script>
        <script src="../../JS/CM Rotate/CMRotate.js"></script>
        <script src="../../JS/Kendo UI/kendo.ui.core.min.js"></script>
        <script src="../../JS/CreateJS/createjs-2013.12.12.min.js"></script>
        <script src="../../JS/Sidebar/modernizr.custom.js"></script>
        <script src="../../JS/Epoch/epoch.min.js"></script>
        <script src="../../JS/Gesture Kit/gesturekit.min.js"></script>
        <script src="../../JS/Metro UI/jquery.widget.min.js"></script>
        <script src="../../JS/Metro UI/jquery.mousewheel.js"></script>
        <script src="../../JS/Metro UI/jquery.easing.1.3.min.js"></script>
        <script src="../../JS/Metro UI/holder.js"></script>
        <script src="../../JS/Metro UI/metro.min.js"></script>
        <script src="../../JS/Metro UI/jquery.dataTables.js"></script>
        <script src="../../JS/id3/id3-minimized.js"></script>
        <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
        <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
        <link rel="stylesheet" href="../../CSS/materialize1.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.96.1/js/materialize.min.js"></script>
        <link rel="stylesheet" href="../../CSS/style.min.css">
        <script src="../../JS/materialMenu.min.js"></script>
        <script src="../../JS/demo11.js"></script>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <script src="http://fian.my.id/Waves/static/waves.min.js?v=0.7.1"></script>
        <link href="http://fian.my.id/Waves/static/waves.min.css?v=0.7.2" rel="stylesheet">
        <link href="https://raw.githubusercontent.com/T00rk/bootstrap-material-datetimepicker/gh-pages/css/bootstrap-material-datetimepicker.css" rel="stylesheet">
        <script src="https://fb.me/react-0.13.3.min.js"></script>
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

        <!-- Optional theme -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="https://raw.githubusercontent.com/FezVrasta/bootstrap-material-design/master/dist/css/material-fullpalette.min.css">
        <link rel="stylesheet" href="https://raw.githubusercontent.com/FezVrasta/bootstrap-material-design/master/dist/css/material.min.css">
        <!-- Latest compiled and minified JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        <script src="http://momentjs.com/downloads/moment.min.js"></script>
        <script src="https://raw.githubusercontent.com/T00rk/bootstrap-material-datetimepicker/gh-pages/js/bootstrap-material-datetimepicker.js"></script>
        <script src="https://raw.githubusercontent.com/FezVrasta/bootstrap-material-design/master/dist/js/material.min.js"></script>
        <script src="https://raw.githubusercontent.com/FezVrasta/bootstrap-material-design/master/dist/js/ripples.min.js"></script>
        <link rel="import" href="../../JS/Polymer/bower_components/neon-animation/animations/scale-up-animation.html">
        <link rel="import" href="../../JS/Polymer/bower_components/neon-animation/animations/fade-out-animation.html">
        <link rel="import" href="../../JS/Polymer/bower_components/paper-radio-button/paper-radio-button.html">
        <link rel="import" href="../../JS/Polymer/bower_components/paper-radio-group/paper-radio-group.html">
        <script type="text/javascript" src="https://www.google.com/jsapi"></script>

        <script type="text/javascript">
            google.load("visualization", "1", {
                packages: ["corechart"]
            });
            google.setOnLoadCallback(drawChart);

            function drawChart() {
                var game = "80";
                var data = google.visualization.arrayToDataTable([
          ['Tasks', 'Hours per Day'],
          ['Apps', <?php echo $data ?>],
          ['Pictures', <?php echo $pics ?>],
          ['Sounds', <?php echo $sounds ?>],
          ['Videos', <?php echo $videos ?>],
          ['Documents', <?php echo $docs ?>],
          ['Downloads', <?php echo $downloads ?>],
          ['Files', <?php echo $files ?>]
        ]);

                var options = {
                    title: 'Internal Storage'
                };

                var chart = new google.visualization.PieChart(document.getElementById('piechart'));

                chart.draw(data, options);
            }
        </script>
        <script type="text/javascript">
            google.load("visualization", "1", {
                packages: ["corechart"]
            });
            google.setOnLoadCallback(drawChart);

            function drawChart() {

                var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Apps', 11],
          ['Pictures', 2],
          ['Vedios', 2],
          ['Sounds', 2],
          ['Misc', 7]
        ]);

                var options = {
                    title: 'External Storage'
                };

                var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

                chart.draw(data, options);
            }
        </script>
        <script type="text/javascript">
            google.load('visualization', '1.5', {
                packages: ['line']
            });
            google.setOnLoadCallback(drawChart);

            function drawChart() {

                var data = new google.visualization.DataTable();
                data.addColumn('number', 'Day');
                data.addColumn('number', 'Guardians of the Galaxy');
                data.addColumn('number', 'The Avengers');
                data.addColumn('number', 'Transformers: Age of Extinction');

                data.addRows([
        [1, 37.8, 80.8, 41.8],
        [2, 30.9, 69.5, 32.4],
        [3, 25.4, 57, 25.7],
        [4, 11.7, 18.8, 10.5],
        [5, 11.9, 17.6, 10.4],
        [6, 8.8, 13.6, 7.7],
        [7, 7.6, 12.3, 9.6],
        [8, 12.3, 29.2, 10.6],
        [9, 16.9, 42.9, 14.8],
        [10, 12.8, 30.9, 11.6],
        [11, 5.3, 7.9, 4.7],
        [12, 6.6, 8.4, 5.2],
        [13, 4.8, 6.3, 3.6],
        [14, 4.2, 6.2, 3.4]
      ]);

                var options = {
                    chart: {
                        title: 'Battery Usage',
                        subtitle: 'in mAH'
                    },
                    width: 900,
                    height: 500
                };

                var chart = new google.charts.Line(document.getElementById('line_top_x'));

                chart.draw(data, options);
            }
        </script>

        <style type="text/css">
            iron-selector.paper-drawer-panel > #drawer.paper-drawer-panel {
                background-color: #eeeeee;
                width: 250px;
            }
            
            h2 {
                position: relative;
                margin: 12px;
                font-style: roboto-thin;
                color: white;
            }
            
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
            
            #demo {
                position: relative;
                width: 100%;
                height: 65%;
                top: 255px;
                visibility: hidden;
                background: #457;
                cursor: hand;
                cursor: -moz-grab;
                cursor: -webkit-grab;
                cursor: grab;
            }
            
            #demo li.first {
                background: #FFFFFF;
            }
            
            #demo li.middle {
                background: #FFFFFF;
            }
            
            #demo li.last {
                background: #e8b;
            }
            
            #dragend {
                position: absolute;
                bottom: 50px;
                right: 50px;
                background: #345;
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
            
            #h11 {
                font-family: roboto-thin;
                color: cyan;
                font-size: 80px;
                margin: 15px;
            }
            
            .butt {
                overflow: hidden;
                display: inline-block;
                position: relative;
                width: 100%;
                height: 60px;
                line-height: 32px;
                border-radius: 2px;
                font-size: 0.9em;
                color: #646464;
                float: left;
                padding: 0 5px 5px 5px;
                text-align: left;
                margin: 0 0 10px 0;
            }
            
            .buttu {
                overflow: hidden;
                display: inline-block;
                position: relative;
                width: 10%;
                height: 35px;
                line-height: 32px;
                border-radius: 2px;
                font-size: 0.9em;
                color: #646464;
                float: right;
                padding: 0 5px 5px 5px;
                margin: 5 0 10px 0;
            }
            
            button:focus {
                background: transparent;
            }
            
            #title {
                font-size: 20px;
            }
            
            #version {
                margin-top: -35px;
                position: fixed;
            }
            
            p {
                margin-bottom: 0px;
            }
            
            .okey {
                position: absolute;
                left: 0px;
                width: 100%;
                height: 30%;
                overflow: hidden;
            }
            
            .pllayer {
                position: fixed;
                z-index: 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
                top: 63%;
                left: 0px;
                width: 100%;
                height: 20%;
                overflow: hidden;
                display: none;
            }
            
            .okey2 {
                position: absolute;
                left: 0px;
                top: 18%;
                z-index: 1000000;
                transition: background 1s linear;
            }
            
            .okey22 {
                position: relative;
                left: 0px;
                top: 22%;
                z-index: 1000000;
                transition: background 1s linear;
            }
            
            .okey222 {
                position: fixed;
                left: 0px;
                top: 62.5%;
                width: 100%;
                height: 25%;
                z-index: 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
                overflow: hidden;
                display: none;
            }
            
            .okey1 {
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: #2196f3;
                z-index: 100;
                transition: background 1s linear;
            }
            
            .okey2222 {
                position: relative;
                width: 140px;
                left: 40%;
                top: 55;
                height: 140px;
            }
            
            .modal23 {
                z-index: 1003;
                display: none;
                opacity: 1;
                transform: scaleX(1);
                top: 10%;
                position: relative;
            }
            
            paper-tabs {
                background: transparent;
                z-index: 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
                top: 40%;
                right: 0px;
                width: 80%;
                position: absolute;
            }
            
            paper-tab {
                color: #ffffff;
            }
            
            [type="checkbox"] + label {
                position: fixed;
                left: 950;
                top: 25;
            }
        </style>
    </head>

    <body ng-app="demoapp" ng-controller="democtrl" class="ng-scope">
        <paper-drawer-panel>
            <paper-header-panel drawer>
                <paper-toolbar>
                    <div>Application</div>
                </paper-toolbar>
                <div id="drawer-panel">
                    <paper-material>
                        <ul>
                            <li>
                                <h2>Wireless & Networks</h2></li>
                            <ul>
                                <li>
                                    <paper-button id="Wifi" class="Button">
                                        <div class="Button1">
                                            <ng-md-icon icon="network_wifi" style="fill: #2196f3" size="25"></ng-md-icon>Wifi</div>
                                    </paper-button>
                                    <li>
                                        <paper-button id="Wifi" class="Button">
                                            <div class="Button1">
                                                <ng-md-icon icon="network_cell" style="fill: grey" size="25"></ng-md-icon>Mobile Data</div>
                                        </paper-button>
                                        <paper-button id="Wifi" class="Button">
                                            <div class="Button1">
                                                <ng-md-icon icon="data_usage" style="fill: grey" size="25"></ng-md-icon>Data usage</div>
                                        </paper-button>
                                    </li>
                            </ul>
                    </paper-material>
                    <ul>
                        <li>
                            <h2>Device</h2></li>
                        <ul>
                            <li>
                                <paper-button id="Wifi" class="Button">
                                    <div class="Button1">
                                        <ng-md-icon icon="audiotrack" style="fill: grey" size="25"></ng-md-icon>Audio</div>
                                </paper-button>
                                <paper-material>
                                    <li>
                                        <paper-button id="Wifi" class="Button">
                                            <div class="Button1">
                                                <ng-md-icon icon="settings_display" style="fill: grey" size="25"></ng-md-icon>Display</div>
                                        </paper-button>
                                        <paper-button id="Wifi" class="Button">
                                            <div class="Button1">
                                                <ng-md-icon icon="storage" style="fill: grey" size="25"></ng-md-icon>Storage</div>
                                        </paper-button>
                                    </li>
                                    <paper-button id="Wifi" class="Button">
                                        <div class="Button1">
                                            <ng-md-icon icon="battery_50" style="fill: grey" size="25"></ng-md-icon>Battery</div>
                                    </paper-button>
                            </li>
                            <paper-button id="apps" class="Button" ng-click="clickIconMorph3()">
                                <div class="Button1">
                                    <ng-md-icon icon="apps" style="fill: #e91e63" size="25"></ng-md-icon>Apps</div>
                            </paper-button>
                            </li>
                        </ul>
                        </paper-material>
                        <paper-material>
                            <ul>
                                <li>
                                    <h2>Accounts</h2></li>
                                <li>
                                    <paper-button id="Wifi" class="Button">
                                        <div class="Button1">
                                            <ng-md-icon icon="account_circle" style="fill: grey" size="25"></ng-md-icon>Add account</div>
                                    </paper-button>
                                </li>
                            </ul>
                        </paper-material>
                        <ul>
                            <li>
                                <h2>System</h2></li>
                            <ul>
                                <li>
                                    <paper-button id="Date_Time" class="Button" ng-click="clickIconMorph2()">
                                        <div class="Button1">
                                            <ng-md-icon icon="access_time" style="fill: #ffeb3b" size="25"></ng-md-icon>Date & Time</div>
                                    </paper-button>
                                    </paper-button>
                                </li>
                                <paper-button id="accessibility" class="Button" ng-click="clickIconMorph1()">
                                    <div class="Button1">
                                        <ng-md-icon icon="accessibility" style="fill: #ff9800" size="25"></ng-md-icon>Accessibility</div>
                                </paper-button>
                                </paper-button>
                                </li>
                                <paper-button id="2" class="Button" ng-click="clickIconMorph9()" color="red">
                                    <div class="Button1">
                                        <ng-md-icon icon="info" style="fill: #8bc34a" size="25"></ng-md-icon>About</div>
                                </paper-button>
                                </paper-button>
                                </li>
                            </ul>
                </div>
            </paper-header-panel>
            <paper-header-panel main>
                <paper-toolbar>
                    <paper-icon-button icon="menu" paper-drawer-toggle></paper-icon-button>
                    <div></div>
                </paper-toolbar>
                <div id="body" class="okey">


                    <hh id="header" class="okey1"></hh>


                    <div>
                        <ng-md-icon class="okey2" icon="{{clickIcon}}" style="fill: white" size="220" options='{"duration": 375, "rotation": "none"}'>

                    </div>
                </div>
                <div id="demo">
                    <li class="first dragend-page">
                        <button class="butt raised">

                            <p id="title">Vibrate</p>
                            <br>
                            <p id="version">Vibrate device for incoming calls and messages</p>
                            <paper-ripple>
                                <div id="background" class="style-scope paper-ripple" style="opacity: 0.00279999999329447;"></div>
                                <div id="waves" class="style-scope paper-ripple"></div>
                            </paper-ripple>
                            <p>
                                <input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" />
                                <label for="filled-in-box"></label>
                            </p>

                        </button>
                    </li>
                    <li class="middle dragend-page ii">
                        <table>
                            <tr>
                                <td>Battery Status API</td>
                                <td width="250px"></td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <hr>
                                </td>
                            </tr>
                            <tr>
                                <td>charging</td>
                                <td id="charging"></td>
                            </tr>
                            <tr>
                                <td>chargingTime</td>
                                <td id="chargingTime"></td>
                            </tr>
                            <tr>
                                <td>dischargingTime</td>
                                <td id="dischargingTime"></td>
                            </tr>
                            <tr>
                                <td>battery level</td>
                                <td id="level"></td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <hr>
                                </td>
                            </tr>
                            <tr>
                                <td>promise status</td>
                                <td id="promiseStatus"></td>
                            </tr>
                            <tr>
                                <td>number of updates</td>
                                <td id="numberUpdates"></td>
                            </tr>
                        </table>
                        <div id="line_top_x"> </div>

                    </li>
                    <li class="middle dragend-page">
                        <button class="butt raised">
                            <p id="title">Software version</p>
                            <br>
                            <p id="version"></p>
                            <paper-ripple>
                                <div id="background" class="style-scope paper-ripple" style="opacity: 0.00279999999329447;"></div>
                                <div id="waves" class="style-scope paper-ripple"></div>
                            </paper-ripple>
                        </button>

                    </li>
                    <li class="middle dragend-page ii">
                        <div id="line_top_x"></div>
                        <div id="piechart" style="width: 900px; height: 500px;"></div>
                        <div id="piechart1" style="width: 900px; height: 500px;"></div>

                        <div class="fixed-action-btn" style="bottom: 45px; right: 1080px;">
                            <a class="btn-floating btn-large red">
                                <i class="large material-icons">mode_edit</i>
                            </a>
                            <ul>
                                <li><a class="btn-floating red"><i class="material-icons">search</i></i></a></li>
                                <li><a class="btn-floating yellow darken-1"><i class="material-icons">delete</i></a></li>

                            </ul>
                        </div>
                    </li>
                    <li class="middle dragend-page">
                        <button class="butt raised" id="set">
                            <p id="title">Time Zone</p>
                            <br>
                            <p id="zone"></p>
                            <paper-ripple>
                                <div id="background" class="style-scope paper-ripple" style="opacity: 0.00279999999329447;"></div>
                                <div id="waves" class="style-scope paper-ripple"></div>
                            </paper-ripple>
                        </button>
                        <div id="modal2" class="modal modal-fixed-footer modal23">
                            <div class="modal-content">
                                <h4>Set time zone:</h4>
                                <form action="#">
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test3" />
                                        <label for="test3">Honolulu</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test4" />
                                        <label for="test4">Anchorage</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test5" />
                                        <label for="test5">Vancouver</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test6" />
                                        <label for="test6">San Francisco</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test7" />
                                        <label for="test7">Seattle</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test8" />
                                        <label for="test8">Los Angeles</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test9" />
                                        <label for="test9">Las Vegas</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test10" />
                                        <label for="test10">Phoenix</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test11" />
                                        <label for="test11">Calgary</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test12" />
                                        <label for="test12">Edmonton</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test13" />
                                        <label for="test13">Salt Lake City</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test14" />
                                        <label for="test14">Denver</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test15" />
                                        <label for="test15">Guatemala</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test16" />
                                        <label for="test16">San Salvador</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test17" />
                                        <label for="test17">Tegucigalpa</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test18" />
                                        <label for="test18">Managua</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test19" />
                                        <label for="test19">Mexico City</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test20" />
                                        <label for="test20">Winnipeg</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test21" />
                                        <label for="test21">Green</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test22" />
                                        <label for="test22">Green</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test23" />
                                        <label for="test23">Green</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test24" />
                                        <label for="test24">Green</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test25" />
                                        <label for="test25">Green</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test26" />
                                        <label for="test26">Green</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test27" />
                                        <label for="test27">Green</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test28" />
                                        <label for="test28">Green</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test29" />
                                        <label for="test29">Green</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test30" />
                                        <label for="test30">Green</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test31" />
                                        <label for="test31">Green</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test32" />
                                        <label for="test32">Green</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test33" />
                                        <label for="test33">Green</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test34" />
                                        <label for="test34">Green</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test35" />
                                        <label for="test35">Green</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test36" />
                                        <label for="test36">Green</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test37" />
                                        <label for="test37">Green</label>
                                    </p>
                                    <p>
                                        <input class="with-gap" name="group1" type="radio" id="test38" />
                                        <label for="test38">Green</label>
                                    </p>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button id="modal2_coniform" href="#!" class="buttu modal-action ">OK
                                    <paper-ripple>
                                        <div id="background" class="style-scope paper-ripple" style="opacity: 0.00279999999329447;"></div>
                                        <div id="waves" class="style-scope paper-ripple"></div>
                                    </paper-ripple>
                                </button>
                                <button id="modal2_coniform" href="#!" class="buttu modal-action ">Cancel
                                    <paper-ripple>
                                        <div id="background" class="style-scope paper-ripple" style="opacity: 0.00279999999329447;"></div>
                                        <div id="waves" class="style-scope paper-ripple"></div>
                                    </paper-ripple>
                                </button>
                            </div>
                        </div>

                    </li>
                    <li class="first dragend-page">

                        <div id="hg"></div>
                    </li>
                </div>
            </paper-header-panel>
        </paper-drawer-panel>
        <script src="http://stereobit.github.io/dragend/dragend.js"></script>
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
        </script>
        <script>
            var xmlhttp = new XMLHttpRequest();
            var url = "backend/0/Customers_MYSQL.php";

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


                for (i = 0; i < arr.length; i++) {
                    var colors = randomColor({
                        hue: 'random',
                        luminosity: 'light'
                    });
                    var colors = ["gold", "tomato", "aqua", "deepskyblue", "lime", "magenta", "cyan"];
                    var random = Math.floor((Math.random() * colors.length) + .0000000009),
                        color = colors[random];
                    out = arr[i].Name;

                }

                document.getElementById("version").innerHTML = out;
            }
        </script>
        <script>
            $("demo").dragend();
            $(document).ready(function () {

                $("button").click(function () {
                    $("#app").fadeIn(400);

                });


            });
            $(document).ready(function () {

                $(document).on("click", "paper-button", function (event) {



                    $("#demo").dragend({
                        scrollToPage: event.currentTarget.id
                    });

                    $("#header").css({
                        background: event.currentTarget.color
                    });

                });

            });
            $(document).ready(function () {

                $("#accessibility").click(function () {

                    $("#demo").dragend({
                        scrollToPage: 2
                    });

                    $("#header").css({
                        background: "#ff9800"
                    });

                });

            });
            $(document).ready(function () {

                $("#Date_Time").click(function () {

                    $("#demo").dragend({
                        scrollToPage: 2
                    });

                    $("#header").css({
                        background: "#ffeb3b"

                    });

                });

            });
            $(document).ready(function () {

                $("#apps").click(function () {

                    $("#demo").dragend({
                        scrollToPage: 2
                    });

                    $("#header").css({
                        background: "#e91e63"

                    });

                });

            });

            $(document).ready(function () {

                $(document).on("click", "#set", function (event) {
                    event.stopPropagation();
                    $("#modal2").removeClass("animated bounceOut");
                    $("#modal2").addClass('animated bounceIn');


                });

            });
            $(document).ready(function () {

                $(document).on("click", "#modal2_coniform", function (event) {
                    event.stopPropagation();
                    $("#modal2").removeClass("animated bounceIn");
                    $("#modal2").addClass('animated bounceOut');

                });

            });
        </script>
        <script>
            $(document).ready(function () {
                if (annyang) {
                    // Let's define our first command. First the text we expect, and then the function it should call
                    var commands = {
                        'show about': function () {
                            $("#demo").dragend({
                                scrollToPage: 2
                            });

                            $("#header").css({
                                background: "#8bc34a"
                            });
                        }
                    };

                    // Add our commands to annyang
                    annyang.addCommands(commands);

                    // Start listening. You can call this here, or attach this call to an event, button, etc.
                    annyang.start();
                }
            });
        </script>
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
        <script>
            var xmlhttp = new XMLHttpRequest();
            var url = "../../backend/Customers_MYSQL23.php";

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

                var out = "<ul>";
                for (i = 0; i < arr.length; i++) {

                    out += "<img id=\"" + arr[i].Name + "\"" + " src=\"../../" + arr[i].Icon + "\"" + " width=\"60px\"" + "></img><p>" + arr[i].Name + "</p>";

                }
                out += "</ul>";
                document.getElementById("hg").innerHTML = out;
            }
        </script>
        <script>
            var terms = $('#my_select option:selected').attr('id');
                var kill = "sudo timedatectl set-timezone" + terms;
            $.ajax({
                    method: "POST",
                    url: "backend/ajax.php",
                    data: {
                        dataString: kill
                    }
                })
                .done(function (msg) {
                    alert("Data Saved: " + msg);
                });
        </script>
    </body>

    </html>   