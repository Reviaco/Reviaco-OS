<?php

/*** begin our session ***/
session_start();

/*** set a form token ***/
$form_token = md5( uniqid('auth', true) );

/*** set the session form token ***/
$_SESSION['form_token'] = $form_token;
$df = disk_free_space("C:");
$ds = disk_total_space("C:");
?>
<!DOCTYPE html>
<html>
<head>
    <link href="../../Res.html" rel="import">
    <link href="polymer-style.html" rel="import">
    <link href="style.css" rel="stylesheet">
    <script src="script.js">
    </script>
    <script>
    var config = {
        type: 'pie',
        data: {
            datasets: [{
                data: [
                    '<?php echo $df; ?>',
                    2000,
                    1000,
                    500,
                    102544123445,
                    121152654,
                ],
                backgroundColor: [
                    "#FF1744",
                    "##2962FF",
                    "#FFAB00",
                    "#455A64",
                    "#00C853",
                    "#FF5722",
                ],
            }, {

                data: [
                    '<?php echo $ds; ?>',
                    14554,
                    412,
                    4544,
                    200000000,
                    121152654,
                ],
                backgroundColor: [
                    "#FF1744",
                    "#2962FF",
                    "#FFAB00",
                    "#455A64",
                    "#00C853",
                    "#FF5722",
                ],
            }],
            labels: [
                "/",
                "/usr",
                "/tmp",
                "/var",
                "/home",
                "/boot"
            ]
        },
        options: {
            responsive: true
        }
    };


            $(document).on('click', '#Storage', function (event) {
                var ctx = document.getElementById("storage-chart").getContext("2d");
                window.myPie = new Chart(ctx, config);
            });
            
                var config1 = {
        type: 'pie',
        data: {
            datasets: [{
                data: [
                    '<?php echo $df; ?>',
                    2000,
                    1000,
                    500,
                    102544123445,
                    121152654,
                ],
                backgroundColor: [
                    "#FF1744",
                    "##2962FF",
                    "#FFAB00",
                    "#455A64",
                    "#00C853",
                    "#FF5722",
                ],
            }, {

                data: [
                    '<?php echo $ds; ?>',
                    14554,
                    412,
                    4544,
                    200000000,
                    121152654,
                ],
                backgroundColor: [
                    "#FF1744",
                    "#2962FF",
                    "#FFAB00",
                    "#455A64",
                    "#00C853",
                    "#FF5722",
                ],
            }],
            labels: [
                "/",
                "/usr",
                "/tmp",
                "/var",
                "/home",
                "/boot"
            ]
        },
        options: {
            responsive: true
        }
    };


            $(document).on('click', '.app', function (event) {
                var ctx1 = document.getElementById("app-chart").getContext("2d");
                window.myPie = new Chart(ctx1, config1);
            });
    </script>

    <title>
    </title>
</head>

<body>
    <div id="main_page">
        <div class="bg-header" style="transform: translate3d(0px, 0px, 0px);">
        </div>


        <div class="content">
            <div class="card-content">
                Use cheaper Internet
            </div>


            <div class="card-content">
                Transfering has become easier
            </div>


            <div class="card-content">
                Use cheaper Internet
            </div>


            <div class="card-content">
                The best feature of Reviaco
            </div>


            <div class="card-content">
                Are you an alien ?!! No problem, your language is
                supported.....:)
            </div>


            <div class="card-content">
                This device isn't yours only, but it's also for your friends
            </div>


            <div class="card-content">
                Use cheaper Internet
            </div>


            <div class="card-content">
                Have your own friend
            </div>


            <div class="card-content">
                Use cheaper Internet
            </div>


            <div class="card-content">
                Use cheaper Internet
            </div>


            <div class="card-content">
                best Audio FX
            </div>


            <div class="card-content">
                With Reviaco 1GiB value is as 1TiB
            </div>


            <div class="card-content">
                Use cheaper Internet
            </div>


            <div class="card-content">
                Be always up-to-date
            </div>


            <div class="card-content">
                Learn more about your device !
            </div>
        </div>
    </div>


    <div class="setting_page" id="setting_page">
        <img class="setting_cover_icon" height="300" id="setting_cover_icon"
        src="" width="300"> 
    </div>


    <section class="Users_settings" id="Users_settings">
        <form action="PHP/adduser_submit.php" class="form" id="adduser_form"
        method="post" name="adduser_form">
            <div class="step">
                <h1>Add User</h1>
                <br>
                <br>
                <br>
            </div>
            <input name="form_token" type="hidden" value=
            "<?php echo $form_token; ?>"> Register Cancel
        </form>


        <div class="bubbleback">
        </div>


        <div class="bubble mdc-bg-purple-500">
            <i class="material-icons add_user_btn_icon" id=
            "add_user_btn_icon">add</i>
        </div>


        <div class="bubble-wrap">
        </div>


        <div id="users_listbox" role="listbox">
        </div>
    </section>


    <section class="Users_settings_sub" id="Users_settings_sub">
        <div id="users_listbox_sub" role="listbox">
            <h4>
            </h4>


            <div class="avatar blue">
            </div>


            <div>
                Delete Account
            </div>


            <div id="description">
            </div>
        </div>
    </section>


    <section class="Apps_settings" id="Apps_settings">
        <div id="apps_listbox" role="listbox">
        </div>
    </section>


    <section class="Users_settings_sub" id="Apps_settings_sub">
        <div id="apps_listbox_sub" role="listbox">
            <h4>
            </h4>


            <div class="avatar blue">
            </div>


            <div>
                Delete Account
            </div>


            <div id="description">
            </div>
        </div>
        <canvas height="100" id="app-chart" width="100"></canvas>
    </section>


    <section class="Storage_settings" id="Storage_settings">
        <canvas height="100" id="storage-chart" width="100"></canvas>
    </section>


    <section class="Apps_settings" id="Apps_settings">
        <div id="apps_listbox" role="listbox">
        </div>
    </section>


    <section class="About_settings" id="About_settings">
        <div id="about_listbox" role="listbox">
            <div class="avatar blue">
            </div>


            <div>
                Version
            </div>


            <div id="version">
            </div>


            <div class="avatar blue">
            </div>


            <div>
                Build Date
            </div>


            <div id="build_date">
            </div>
        </div>
    </section>


    <section class="Sound_settings" id="Sound_settings">
        <div id="sound_listbox" role="listbox">
            <div class="avatar blue">
            </div>


            <div>
                Sound Volumes
            </div>


            <div id="volume_tip">
                Loud sounds cause DEATH ;)
            </div>


            <div class="avatar blue">
            </div>


            <div>
                Ringtone
            </div>


            <div id="ringtone_tip">
                Keep yourself happy with out daily updated HD ringtones
            </div>
        </div>
    </section>


    <section class="WI-FI_settings" id="WI-FI_settings">
        <div class="wifi_not_supported_container" id=
        "wifi_not_supported_container">
            <img src="../../Media/Framework/confused.png" width="50">

            <div class="wifi_not_supported_container_text">
                <h4>Oops, It seems that your computer hasn't WI-FI
                interface.....!</h4>
            </div>
        </div>
    </section>
    allosaurus<br>
    brontosaurus<br>
    diplodocus

    <div class="volume_list" id="volume_list">
        <div>
            Ringtone
        </div>


        <div>
            Media
        </div>


        <div>
            Notifications
        </div>
    </div>


    <div class="style-scope app-header" id="background">
        <div class="style-scope app-header" id="backgroundRearLayer">
        </div>


        <div class="style-scope app-header" id="backgroundFrontLayer">
        </div>
    </div>


    <div id="contentContainer">
        <div id="title" title="">
            Settings
        </div>
    </div>
</body>
</html>
