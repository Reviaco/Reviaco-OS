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
    <html>

    <head>





        <link rel="import" href="../../Res.html">
        <link rel="import" href="polymer-style.html">
        <link href="style.css" rel="stylesheet">
        <script src="script.js"></script>
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


    </head>

    <body>
        <div id="main_page">
            <div class="bg-header" style="transform: translate3d(0px, 0px, 0px);"></div>

            <div class="content">

                <paper-card id="WI-FI" class="card" heading="WI-FI">
                    <div class="card-content">Use cheaper Internet</div>
                </paper-card>
                <paper-card id="Bluetooth" class="card" heading="Bluetooth">
                    <div class="card-content">Transfering has become easier</div>
                </paper-card>
                <paper-card id="Ethernet" class="card" heading="Ethernet">
                    <div class="card-content">Use cheaper Internet</div>
                </paper-card>
                <paper-card id="Apps" class="card" heading="Apps">
                    <div class="card-content">The best feature of Reviaco</div>
                </paper-card>
                <paper-card id="" class="card" heading="Language and input">
                    <div class="card-content">Are you an alien ?!!
                    No problem, your language is supported.....:)</div>
                </paper-card>
                <paper-card id="Users" class="card" heading="Users">
                    <div class="card-content">This device isn't yours only, but it's also for your friends</div>
                </paper-card>
                <paper-card id="Accounts" class="card" heading="Accounts">
                    <div class="card-content">Use cheaper Internet</div>
                </paper-card>
<paper-card id="Brolucy" class="card" heading="Brolucy">
                    <div class="card-content">Have your own friend</div>
                </paper-card>
 
                <paper-card id="Security" class="card" heading="Security">
                    <div class="card-content">Use cheaper Internet</div>
                </paper-card>
                <paper-card id="Devices" class="card" heading="Devices">
                    <div class="card-content">Use cheaper Internet</div>
                </paper-card>
 <paper-card id="Sound" class="card" heading="Sound">
                    <div class="card-content">best Audio FX</div>
                </paper-card>
                <paper-card id="Storage" class="card" heading="Storage">
                    <div class="card-content">With Reviaco 1GiB value is as 1TiB</div>
                </paper-card>                <paper-card id="Accessibility" class="card" heading="Accessibility">
                    <div class="card-content">Use cheaper Internet</div>
                </paper-card>
                                <paper-card id="Updates" class="card" heading="Updates">
                    <div class="card-content">Be always up-to-date</div>
                </paper-card>
                                <paper-card id="About" class="card" heading="About">
                    <div class="card-content">Learn more about your device !</div>
                </paper-card>
            </div>

        </div>
        <div id="setting_page" class="setting_page">
            <paper-material elevation="1" class="setting_cover mdc-bg-blue-500">
                <img id="setting_cover_icon" class="setting_cover_icon" src="" width="300" height="300"></img>
            </paper-material>
        </div>
        <section id="Users_settings" class="Users_settings">
            <paper-material id="register_form_container" class="box" elevation="2">

                <form id="adduser_form" class="form" action="PHP/adduser_submit.php" method="post">

                    <div class="step">
                        <h1>Add User</h1>
                        <br>
                        <br>

                        <paper-input label="Username" id="username" name="username" value="" maxlength="20"></paper-input>
                        <br>
                        <paper-input type="password" label="Password" id="password" name="password" value="" maxlength="20"></paper-input>


                    </div>


                    <input type="hidden" name="form_token" value="<?php echo $form_token; ?>" />
                    <paper-button raised class="sumbit_parent" onclick="submitForm()">Register

                    </paper-button>
                    <paper-button raised class="sumbit_cancel">Cancel</paper-button>
                </form>
            </paper-material>
            <div class="bubbleback"></div>
            <div class="bubble mdc-bg-purple-500"><i id="add_user_btn_icon" class="material-icons add_user_btn_icon">add</i>

            </div>
            <div class="bubble-wrap">

            </div>
            <div id="users_listbox" role="listbox">


            </div>
        </section>
        <section id="Users_settings_sub" class="Users_settings_sub">
            <div id="users_listbox_sub" role="listbox">

<h4></h4><paper-icon-item onclick='' id="deletition"><div class="avatar blue" item-icon></div><paper-item-body two-line><div>Delete Account</div><div id="description" secondary></div></paper-item-body><paper-icon-button icon="star" alt="favourite this!"></paper-icon-button></paper-icon-item>
            </div>
        </section>
        <section id="Apps_settings" class="Apps_settings">            <div id="apps_listbox" role="listbox">


            </div></section>
                    <section id="Apps_settings_sub" class="Users_settings_sub">
            <div id="apps_listbox_sub" role="listbox">

<h4></h4><paper-icon-item onclick='' id="deletition"><div class="avatar blue" item-icon></div><paper-item-body two-line><div>Delete Account</div><div id="description" secondary></div></paper-item-body><paper-icon-button icon="star" alt="favourite this!"></paper-icon-button></paper-icon-item>
                
            </div>
                        <canvas id="app-chart" width="100" height="100" />
        </section>
        <section id="Storage_settings" class="Storage_settings">

            <canvas id="storage-chart" width="100" height="100" />
        </section>

<section id="Apps_settings" class="Apps_settings">            <div id="apps_listbox" role="listbox">


            </div></section>
                    <section id="About_settings" class="About_settings">
            <div id="about_listbox" role="listbox">

<paper-icon-item onclick='' id="version_container"><div class="avatar blue" item-icon></div><paper-item-body two-line><div>Version</div><div id="version" secondary></div></paper-item-body></paper-icon-item>

    <paper-icon-item onclick='' id="build_date_container"><div class="avatar blue" item-icon></div><paper-item-body two-line><div>Build Date</div><div id="build_date" secondary></div></paper-item-body></paper-icon-item>            
            </div>
                        
        </section>
                    <section id="Sound_settings" class="Sound_settings">
            <div id="sound_listbox" role="listbox">

<paper-icon-item onclick='' id="volume_btn_container"><div class="avatar blue" item-icon></div><paper-item-body two-line><div>Sound Volumes</div><div id="volume_tip" secondary>Loud sounds cause DEATH ;)</div></paper-item-body></paper-icon-item>
<paper-icon-item onclick='' id="ringtone_btn_container"><div class="avatar blue" item-icon></div><paper-item-body two-line><div>Ringtone</div><div id="ringtone_tip" secondary>Keep yourself happy with out daily updated HD ringtones</div></paper-item-body></paper-icon-item>
                        
        </section>
             <section id="WI-FI_settings" class="WI-FI_settings">
<div id="wifi_not_supported_container" class="wifi_not_supported_container"><img width="50" width="50" src="../../Media/Framework/confused.png" /><div class="wifi_not_supported_container_text"><h4>Oops, It seems that your computer hasn't WI-FI interface.....!</h4></div></div>
                        
        </section>

<paper-radio-group selected="b" aria-labelledby="label2" id="ringtone_list" class="ringtone_list">
  <paper-radio-button name="a">allosaurus</paper-radio-button><br>
  <paper-radio-button name="b">brontosaurus</paper-radio-button><br>
  <paper-radio-button name="d">diplodocus</paper-radio-button>
</paper-radio-group>
<div id="volume_list" class="volume_list">
<div>Ringtone</div>
<paper-slider class="red" value="23" max="255" editable></paper-slider>
<div>Media</div>
<paper-slider class="green" value="183" max="255" editable></paper-slider>
<div>Notifications</div>
<paper-slider class="blue" value="211" max="255" editable></paper-slider>
</div>
        <app-header>


            <div id="background" class="style-scope app-header">
                <div id="backgroundRearLayer" class="style-scope app-header"></div>
                <div id="backgroundFrontLayer" class="style-scope app-header"></div>
            </div>
            <div id="contentContainer">

                <app-toolbar>

                    <paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button>

                    <div id="title" title="">Settings</div>
                    <paper-icon-button icon="cancel"></paper-icon-button>
                </app-toolbar>

            </div>
        </app-header>

    </body>

    </html>
